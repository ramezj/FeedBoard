import Link from "next/link"
import GetStarted from "./get-started"

export default function Navigation() {
    return (
        <>
        <div className="navbar bg-black">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl text-white">Lunar</a>
  </div>
  <div className="navbar-end">
  <GetStarted /> 
  </div>
</div>
        </>
    )
}