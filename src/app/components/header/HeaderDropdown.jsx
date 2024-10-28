"use client"
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isAdmin } from "@/app/libs/utils";
const HeaderDropdown = ({data}) => {
  const [shopDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  function handleDropdown(e){
    if(dropdown.current && !dropdown.current?.contains(e.target)){
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDropdown, !shopDropdown)

    return () => {
      document.removeEventListener('click', handleDropdown, !shopDropdown)
    }
  }, [shopDropdown])


  async function logoutHandle() {
      await signOut({redirect: false}).then(() => {
        router.push('/');
        router.refresh();
      })
  }

  return (
    <>
    <div className="profile" onClick={() => setShowDropdown((b) => !b)}>
        <div className="user">
            <h3>Welcome {data?.user?.name.charAt(0)}</h3>
        </div>
        <div className="img-box bg-slate-300">
          {
            !!data?.user?.image && (
              <Image src={data?.user?.image} className="p-1 rounded-full" width={30} height={30} alt="profile avatar" />
            )
          }

        </div>
    </div>
    {shopDropdown && (
      <div className="menu" ref={dropdown}>
          <div className="py-3 px-3 bg-gray-300 rounded-t-lg">
            <p className="text-sm text-gray-500">Signed in as</p>
            <span>{data?.user?.email}</span>
          </div>

          {isAdmin(data?.user) ? (
            <ul>

              <li>
               
                <Link href={'/dashboard'}>Dashboard</Link>
              </li>
            </ul>
          ) : (
            <ul>
           

              <li className="flex items-center px-2">My Account</li>
            </ul>
          )}

          <button onClick={logoutHandle}>Sign Out</button>
      </div>
    )}
    </>
  )
}

export default HeaderDropdown