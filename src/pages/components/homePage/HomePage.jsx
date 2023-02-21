import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = ({ data }) => {
    return (
        <main>
            {data.map((city) => (
                <Link href={`/events/${city.id}`} key={city.id}>
                    <Image
                        src={city.image}
                        alt={city.title}
                        width={500}
                        height={500}
                        priority={true}
                    />
                    <h2>{city.title}</h2>
                    <p>{city.description}</p>
                </Link>
            ))}
        </main>
    )
}

export default Home