import React from "react"
import EditTopicForm from "@/components/EditTopicForm"

const getTopicById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to Fetch Topic")
    }

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const EditTopic = async ({ params }) => {
  const { id } = params
  const { topic } = await getTopicById(id)
  // console.log("id", id)
  const { title, description } = topic

  return <EditTopicForm id={id} title={title} description={description} />
}

export default EditTopic
