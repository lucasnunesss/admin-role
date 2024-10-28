import Link from "next/link"
import HeaderDropdown from "./HeaderDropdown"

const RightSide = ({session}) => {
  return (
    <div className="pt-3 md:pt-0">
        {session ? (
          <HeaderDropdown data={session} />
        ) : (
          <Link href={'/login'}
            className="bg-blue-500 rounded-sm hover:bg-blue-700 text-white font-medium px-2 py-1"
          > 
            Sign In
          </Link>
        )

        }
    </div>
  )
}

export default RightSide