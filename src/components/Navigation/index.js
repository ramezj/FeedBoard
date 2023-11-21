import Link from "next/link"
export default function Navigation() {
    return (
        <>
        <div className="navbar bg-black">
  <div className="flex-1 mt-1">
    <a className="btn btn-ghost text-xl">Lunar</a>
  </div>
  <div className="flex-none mr-3 mt-1">
  <Link href='/' className="bg-white text-black font-medium rounded-md px-3 py-1.5">Get Started</Link>
  </div>
</div>
        </>
    )
}