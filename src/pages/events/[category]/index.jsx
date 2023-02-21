import EventsPerCity from '@/pages/components/events/EventsPerCity';

import React from 'react'

const EventPerCityPage = ({ data, pageName }) => {
    return (
        <EventsPerCity data={data} pageName={pageName} />
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