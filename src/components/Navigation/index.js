import Link from "next/link"
export default function Navigation() {
    return (
        <>
        <div className="navbar bg-black">
  <div className="flex-1 mt-3">
    <a className="btn btn-ghost text-xl text-white">Lunar</a>
  </div>
  <div className="flex-none mr-3 mt-2.5">
  <Link href='/' className="bg-white text-black font-medium rounded-2xl px-4 py-1.5 flex align-middle items-center gap-x-1">
    Get Started
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex align-middle">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
    </Link>
  </div>
</div>
        </>
    )
}