import React from "react"
import Card from "@/components/UI/Card"
import RemoveBtn from "./RemoveBtn"
import EditBtn from "./EditBtn"

const TopicList = () => {
  return (
    <>
      <Card>
        <div>
          <h1 className="text-lg font-bold text-gray-100">Topic Title</h1>
          <p className="text-white">Topic Description</p>
        </div>

        <div className="flex items-start gap-2">
          <RemoveBtn />
          <EditBtn />
        </div>
      </Card>
    </>
  )
}

export default TopicList
