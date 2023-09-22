import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { title, description } = await request.json()
    //connect to database
    await connectMongoDB()
    await Topic.create({ title, description })

    return NextResponse.json({ message: "TOPIC CREATED" }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  await connectMongoDB()
  const topics = await Topic.find()

  return NextResponse.json({ topics })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await connectMongoDB()
  await Topic.findByIdAndDelete(id)

  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}
