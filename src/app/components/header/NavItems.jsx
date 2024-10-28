'use client'

import Link from "next/link"
import { useState } from "react"
import RightSide from "./RightSide"


const headerLinks = [
  {
    label: "Link One",
    route: '/link1',
  },
  {
    label: "Link Two",
    route: '/link2',
  },
  {
    label: "Link Three",
    route: '/link3',
  },
]

const NavItems = ({session}) => {
  const [active, setActive] = useState(false)
  return (
    <>
    <div className="md:hidden">
        <button 
          onClick={() => setActive(!active)}
          type="button"
          className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm
          font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100
          disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700
          dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
          " aria-label="Toggle navigation"
        >
          <svg
            className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
            xnlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>

          <svg
            className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
            xnlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18"  />
            <path d="m6 6 6 18"  />
          </svg>

        </button>
    </div>

    <div className={`hs-collapse ${active ? 'w-full absolute top-[50px] z-10 bg-white' : 'hidden'} 
      transition-all duration-300 basis-full grow md:block
    `}>
      <div className="overflow-hidden overflow-y-auto max-h-[75vh]">
        <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed
          divide-gray-200 md:flex-row md:items-center md:justify-end
          md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700
        ">
          {headerLinks.map((link, index) => (
            <Link href={link.route} key={index}
              className="font-medium text-gray-600 hover:text-violet-600 py-3 md:py-6
                focus:outline-none
              "
            >
            {link.label}
            </Link>
          ))}
           <RightSide session={session} /> 
        </div>

      </div>

    </div>
    </>
  )
}

export default NavItems