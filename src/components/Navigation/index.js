import Link from "next/link"
import GetStarted from "./get-started"
import Profile from "./profile"

export default function Navigation(props) {
    return (
        <>
        <div className="navbar bg-black">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl text-white">Lunar</a>
  </div> 
  <div className="navbar-end">
    {
      props.session 
      ? <><Profile /> </>
      : <><GetStarted /> </>
    }
  </div>
</div>
        </>
    )
}