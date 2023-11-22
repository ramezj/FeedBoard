import Link from "next/link"
import GetStarted from "./get-started"
import Profile from "./profile"

export default function Navigation(props) {
    return (
        <>
        <div className="navbar bg-black">
  <div className="navbar-start mt-3 ml-2">
    <Link href='/' className="btn btn-ghost text-xl text-white">Lunar</Link>
  </div> 
  {/* <div className="navbar-center mt-3 gap-x-5">
    <a className="text-xl text-white cursor-pointer">Pricing</a>
  </div> */}
  <div className="navbar-end mt-3 mr-2">
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