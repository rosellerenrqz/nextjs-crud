import Card from "@/components/UI/Card"
import React from "react"

const AddTopic = () => {
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
              className="w-full rounded-md  border-slate-300 px-2 py-2"
              required
            />
          </div>

          <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400 active:bg-blue-300">
            Add Topic
          </button>
        </main>
      </Card>
    </>
  )
}

export default AddTopic
