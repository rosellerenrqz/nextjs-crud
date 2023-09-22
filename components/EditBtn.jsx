import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"

const EditBtn = () => {
  return (
    <Link href="edit-topic" className="text-white hover:opacity-80">
      <HiPencilAlt size={24} />
    </Link>
  )
}

export default EditBtn
