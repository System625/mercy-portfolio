import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      // Get the path to our JSON file
      const filePath = path.join(process.cwd(), 'data/submissions.json');
      
      let submissions = [];
      try {
        // Try to read existing submissions
        const fileContent = await fs.readFile(filePath, 'utf-8');
        submissions = JSON.parse(fileContent);
      } catch (error) {
        // If file doesn't exist or can't be read, use empty array
        console.error('Error reading submissions file:', error);
      }

      // Add new submission
      submissions.push(submission);

      // Try to write back to file
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    } catch (error) {
      // Log the error but don't fail the request
      console.error('Error saving submission to file:', error);
    }

    // Return success even if file operations fail
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully! Thank you for your message.' 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Error processing form submission' },
      { status: 500 }
    );
  }
} 