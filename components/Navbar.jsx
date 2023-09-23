import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="mx-auto my-10 flex w-[90%] justify-between rounded-md bg-gray-500 px-4 py-3 sm:w-[35rem] md:w-[45rem]">
        <Link
          href="/"
          className="flex items-center text-center text-lg font-bold text-white"
        >
          NextJS Crud.
        </Link>
        <Link
          href="/add-topic"
          className="rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-100"
        >
          Add Topic
        </Link>
      </nav>
    </>
  )
}

export default Navbar
