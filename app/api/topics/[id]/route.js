import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const { newTitle: title, newDescription: description } =
      await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })

    return NextResponse.json({ message: "Topic Updated" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}

//getting only one topic selection
export async function GET(request, { params }) {
  try {
    const { id } = params
    await connectMongoDB()
    const topic = await Topic.findOne({ _id: id })

    if (!topic) {
      // Handle the case where the topic is not found (e.g., return a 404 response).
      return NextResponse.json({ message: "Topic not found" }, { status: 404 })
    }

    return NextResponse.json({ topic }, { status: 200 })
  } catch (error) {
    // Handle database connection or query errors.
    console.error(error)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 404 }
    )
  }
}
