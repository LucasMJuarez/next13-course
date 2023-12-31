import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
    { text: 'About', path: '/about' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
]


export const NavBar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" size={16} />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
                ))
            }

        </nav>
    )
}
