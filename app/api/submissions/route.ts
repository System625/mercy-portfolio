import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Submission {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data/submissions.json');
    
    let submissions: Submission[] = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error: unknown) {
      console.error('Error reading submissions file:', error);
      // If file doesn't exist, return empty array
      return NextResponse.json({ submissions: [] });
    }

    // Sort submissions by timestamp in descending order (newest first)
    submissions.sort((a: Submission, b: Submission) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json({ submissions });
  } catch (error: unknown) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Error fetching submissions' },
      { status: 500 }
    );
  }
} 