import Link from "next/link"

export default function Profile() {
    return (
        <>
        <Link href='/app' className="bg-white hover:bg-gray-200 duration-200 cursor-pointer text-black font-medium rounded-2xl px-5 py-1.5 flex align-middle items-center gap-x-1">
    App
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 flex align-middle">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
    </Link>
        </>
    )
}