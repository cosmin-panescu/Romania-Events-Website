import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <div className='topNav'>
                    <h1>WP</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link className='link lk' href="/">Home</Link>
                            </li>
                            <li>
                                <Link className='link lk' href="/events">Events</Link>
                            </li>
                            <li>
                                <Link className='link lk' href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1>Lorem, ipsum dolor sit amet Lorem..</h1>
            </div>
        </header>)
}

export default Header