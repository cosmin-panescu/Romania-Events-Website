import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = ({ data }) => {
    return (
        <div className='events'>
            {data.map((city, index) => (
                <Link href={`/events/${city.id}`} key={index} className="event">
                    <Image
                        src={city.image}
                        alt={city.title}
                        width={500}
                        height={500}
                        priority={true}
                    />
                    <h2>{city.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Events