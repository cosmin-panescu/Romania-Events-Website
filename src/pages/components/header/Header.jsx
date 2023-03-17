import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='nav'>
                <h1><Link className='link lk' href="/">ROstivals</Link></h1>
                <ul>
                    <li>
                        <Link className='link lk' href="/events">Events</Link>
                    </li>
                    <li>
                        <Link className='link lk' href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>)
}

export default Header