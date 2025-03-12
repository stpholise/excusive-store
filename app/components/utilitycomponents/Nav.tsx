import  Link  from 'next/link'
import Filter from '../shopping/Filter'

interface NavItem {
    label: string
    href: string
}


const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Sign Up', href: '/signup' },
]

const Nav = () => {
  return (
    <div className="">
        <ul className='lg:flex gap-4 text-black hidden'>
            {navItems.map((item, index) => (
                <li key={`${item.href}${index}`}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
        <div className="md:hidden">
            <Filter />
        </div>
    </div>
  )
}

export default Nav