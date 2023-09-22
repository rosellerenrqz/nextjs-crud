"use client"

import React, { useState } from "react"
// import { useRouter } from "next/router"
import Card from "@/components/UI/Card"

const AddTopicForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert("Title and Description are required.")
      return
    }

    try {
      const response = await fetch("http://localhost/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      })

      if (response.ok) {
        // router.push("/")
        setTitle("")
        setDescription("")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-300">
        Add Topic Form
      </h1>
      <Card>
        <main className="mx-auto p-1 text-center sm:w-3/4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-2 block text-lg font-medium text-white"
            >
              Topic Title:{" "}
            </label>
            <input
              id="title"
              type="text"
              placeholder="Topic Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-2 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-2 block text-lg font-medium text-white"
            >
              Topic Description:{" "}
            </label>
            <input
              id="description"
              type="text"
              placeholder="Topic Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md  border-slate-300 px-2 py-2"
              required
            />
          </div>

          <button
            onClick={submitHandler}
            className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400 active:bg-blue-300"
          >
            Add Topic
          </button>
        </main>
      </Card>
    </>
  )
}

export default AddTopicForm
