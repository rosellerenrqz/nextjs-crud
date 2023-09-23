import React from "react"
import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

const TopicList = async () => {
  const { topics } = await getTopics()

  // console.log(topics)

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <main>
      {topics.length <= 0 ? (
        <p className="text-center text-white">No Topics Available.</p>
      ) : (
        topics.map((topic) => (
          <div
            key={topic._id}
            className="mx-auto mb-5 flex w-[90%] justify-between overflow-x-auto rounded-md border border-gray-400 bg-gray-500 p-4 shadow-sm sm:w-[35rem] md:w-[45rem]"
          >
            <div key={topic._id}>
              <h1 className="text-lg font-bold text-gray-100">{topic.title}</h1>
              <p className="text-white">{topic.description}</p>

              <div className="mt-3">
                <p className="font-thin text-gray-200">
                  Created at: {formatDate(topic.createdAt)}
                </p>
                <p className="font-thin text-gray-200">
                  Updated at: {formatDate(topic.updatedAt)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <RemoveBtn id={topic._id} />
              <Link
                href={`/edit-topic/${topic._id}`}
                className="text-white hover:opacity-80"
              >
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </main>
  )
}

export default TopicList

const getTopics = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", //to get updated data when we are in this end point
    })

    if (!response.ok) {
      throw new Error("Failed to Fetch Topic")
    }

    return response.json()
  } catch (error) {
    console.log("Error loading", error)
  }
}
