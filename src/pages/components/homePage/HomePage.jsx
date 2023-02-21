import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = ({ data }) => {
    return (
        <div className='home-body'>
            {data.map((city) => (
                <Link href={`/events/${city.id}`} className="card lk" key={city.id}>
                    <div className="image-container">
                        <Image
                            className='image'
                            src={city.image}
                            alt={city.title}
                            width={600}
                            height={400}
                            priority={true}
                        />
                    </div>
                    <div className='content'>
                        <h2>{city.title}</h2>
                        <p>{city.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Home