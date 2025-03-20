import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Fetch all submissions, sorted by timestamp in descending order
    const submissions = await Submission.find({})
      .sort({ timestamp: -1 })
      .lean();

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Error fetching submissions' },
      { status: 500 }
    );
  }
} 