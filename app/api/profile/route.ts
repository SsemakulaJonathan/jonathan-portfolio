import { NextResponse } from 'next/server'
import { updateProfile } from '@/lib/api'

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const updatedProfile = await updateProfile(data)
    return NextResponse.json(updatedProfile)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}