import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = ({ data }) => {
    return (
        <div className='home-body'>
            <div className='top-home'>
                <h1>Festivals 2023</h1>
                <h2>GUIDE TO FESTIVALS IN ROMANIA 🎉</h2>
            </div>
            <div className="bottom-home">
                {data?.map((city) => (
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
                        <div className='content-container'>
                            <h2>{city.title}</h2>
                            <p>{city.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home