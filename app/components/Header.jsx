"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {

  const pathname = usePathname()

    const navItems = [
        {
            label: "Home",
            href: '/',
        },
        {
            label: "About",
            href: '/about',
        },
        {
            label: "FAQ",
            href: '/about/faq',
        },
        {
          label: "API Endpoints",
          href: '/posts',
        },
        {
          label: "Crud",
          href: '/crud',
        },
    ]


  return (
    <div>
      {/* <h1>navbar</h1> */}
      <ul className="flex py-10 gap-5">
        {
            navItems.map((link, index) =>(
                <li key={index}>
                    <Link href={link.href} className={pathname === `${link.href}` ? "text-blue-500 font-bold" : ""}>
                      {link.label}
                    </Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Header
