"use client"

import React from "react"
import { HiOutlineTrash } from "react-icons/hi"

const RemoveBtn = ({ id }) => {
  const deleteTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete it?")

    if (confirmed) {
      const response = await fetch(
        `http://localhost:3000/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      )
      if (response.ok) {
        location.reload()
      }
    }
  }

  return (
    <button onClick={deleteTopic} className="text-red-500 hover:text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn
