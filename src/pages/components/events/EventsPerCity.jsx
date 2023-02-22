import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventsPerCity = ({ data, pageName }) => {
    return (
        <div className='events-per-city'>
            <h1>Events in {pageName}</h1>
            <div className='all-city-events'>
                {data?.map((ev, index) => (
                    <Link href={`/events/${ev.city}/${ev.id}`} className="one-city-event lk" key={index}>
                        <Image
                            src={ev.image}
                            alt={ev.title}
                            width={300}
                            height={300}
                            priority={true}
                            className="image"
                        />
                        <h2>{ev.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default EventsPerCity