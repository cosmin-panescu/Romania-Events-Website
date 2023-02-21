import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EventPerCityPage = ({ data, pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map((ev, index) => (
                    <Link href={`/events/${ev.city}/${ev.id}`} key={index}>
                        <Image
                            src={ev.image}
                            alt={ev.title}
                            width={500}
                            height={500}
                            priority={true}
                        />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default EventPerCityPage

export async function getStaticPaths() {
    const { events_categories } = await import('../../../../data/data.json');
    const allPaths = events_categories.map(city => {
        return {
            params: {
                category: city.id.toString(),
            },
        }
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.category;
    const { allEvents } = await import('../../../../data/data.json');

    const data = allEvents.filter(event => event.city === id);

    return {
        props: {
            data: data,
            pageName: id,
        }
    }
} 