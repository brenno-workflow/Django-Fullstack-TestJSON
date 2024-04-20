'use client'

import { useRouter } from 'next/navigation'
import { FaChevronLeft } from 'react-icons/fa6'

export function ButtonBack() {
  const router = useRouter()
  return (
    <div className="w-full justify-start">
      <button
        onClick={() => router.back()}
        className="border py-2 px-8 rounded-md hover:bg-secondary hover:text-primary duration-300"
      >
        <FaChevronLeft size={20} />
      </button>
    </div>
  )
}
