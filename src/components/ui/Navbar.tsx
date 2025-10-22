import Link from 'next/link'
import React from 'react'
import Container from '../layouts/Container'
import { Button } from './button';

const Navbar = () => {

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <header>
      <Container className='flex justify-between items-center py-4'>
        <Link href="/">
        <h5 className='font-mono'>ClearInvoice</h5>
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className='inline-block ml-6'>
              <Link href={item.href} className='hover:underline'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-2">
        <Button variant="outline">
          <Link href="/invoice/new">
            Login
          </Link>
        </Button>
        <Button>
          <Link href="/invoice/new">
            Sign Up
          </Link>
        </Button>
      </div>
      </Container>

    </header>
  )
}

export default Navbar