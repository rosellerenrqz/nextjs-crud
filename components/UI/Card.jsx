import React from "react"

const Card = (props) => {
  return (
    <main className="mx-auto mb-5 flex w-[90%] justify-between rounded-md border border-gray-400 bg-gray-500 p-4 shadow-sm sm:w-[35rem] md:w-[45rem]">
      {props.children}
    </main>
  )
}

export default Card
