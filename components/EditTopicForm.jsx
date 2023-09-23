"use client"

import React, { useState } from "react"
import Card from "./UI/Card"

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      })

      if (!response.ok) {
        throw new Error("Failed to Update Topic")
      }

      location.href = "http://localhost:3000/"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-300">
        Edit Topic Form
      </h1>
      <Card>
        <main key={id} className="mx-auto p-1 text-center sm:w-3/4">
          <div className="mb-4">
            <label className="mb-2 block text-lg font-medium text-white">
              Topic Title:{" "}
            </label>
            <input
              type="text"
              placeholder="Topic Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-2 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-lg font-medium text-white">
              Topic Description:{" "}
            </label>
            <input
              type="text"
              placeholder="Topic Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-2 py-2"
              required
            />
          </div>

          <button
            onClick={submitHandler}
            className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400 active:bg-blue-300"
          >
            Edit Topic
          </button>
        </main>
      </Card>
    </div>
  )
}

export default EditTopicForm
