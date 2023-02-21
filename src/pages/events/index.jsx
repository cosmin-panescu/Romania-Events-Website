import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>EventsPage Page</h1>
      <div>
        {data.map((city, index) => (
          <Link href={`/events/${city.id}`} key={index}>
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
    </div>
  )
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('../../../data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}