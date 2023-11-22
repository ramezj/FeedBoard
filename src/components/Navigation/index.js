import Link from "next/link"
import GetStarted from "./get-started"

export default function Navigation() {
    return (
        <>
        <div className="navbar bg-black">
  <div className="flex-1 mt-3">
    <a className="btn btn-ghost text-xl text-white">Lunar</a>
  </div>
  <div className="flex-none mr-3 mt-2.5">
  <GetStarted /> 
  </div>
</div>
        </>
    )
}