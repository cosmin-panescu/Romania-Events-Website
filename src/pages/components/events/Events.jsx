import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = ({ data }) => {
    return (
        <div className='events'>
            {data?.map((city, index) => (
                <Link href={`/events/${city.id}`} key={index} className="event">
                    <Image
                        src={city.image}
                        alt={city.title}
                        width={400}
                        height={400}
                        priority={true}
                        className="image"
                    />
                    <h2>{city.id}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Events