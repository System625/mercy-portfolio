import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';

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

    try {
      // Connect to MongoDB
      await connectDB();
    } catch (error) {
      console.error('MongoDB connection error:', error);
      return NextResponse.json(
        { error: 'Database connection failed', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      );
    }

    try {
      // Create new submission
      const submission = await Submission.create({
        name,
        email,
        message,
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully! Thank you for your message.',
        submission 
      });
    } catch (error) {
      console.error('Submission creation error:', error);
      return NextResponse.json(
        { error: 'Failed to save submission', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Error processing form submission', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 