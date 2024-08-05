'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from 'next/image';

import clsx  from 'clsx';

export default function Header() {

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ]

  const pathname = usePathname()

  return ( 
    <nav className="bg-slate-200 sticky top-0 z-10">
      <div className="mx-auto max-w-7l px-2 sm:px-6 lg:px-8 container">
        <div className="relative flex h-16 items-center justify-between">
            
          <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image 
                width={50}
                height={50}
                className="h-15 w-auto" 
                src="/logo1.png"
                alt="Parot Ltd." />
            </div>
          </div>

          <div className="flex ">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((nav) => {
                    return (
                      <Link 
                        key={nav.name} 
                        href={nav.href} 
                        className={clsx('rounded-md  px-3 py-2 text-sm font-medium', 
                          {
                            'bg-gray-900 text-white' : pathname === nav.href
                          })} aria-current="page">{nav.name}</Link>
                    )
                  })}
                  
                  
                </div>
              </div>
          </div>

          <div className="flex">
            <span className="font-medium text-slate-500 hover:text-slate-600">parot.jbryan@gmail.com</span>
          </div>

        </div>
      </div>
    </nav>
  )
}
