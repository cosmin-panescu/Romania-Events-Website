import SingleEvent from '@/pages/components/events/SingleEvent';
import React from 'react'

const EventPage = ({ data }) => {
    return (
        <SingleEvent data={data}/>
    )
}

export default EventPage

export async function getStaticPaths() {
    const { allEvents } = await import('../../../../data/data.json');

    const allPaths = allEvents.map(ev => {
        return {
            params: {
                category: ev.city,
                id: ev.id,
            }
        }
    });

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('../../../../data/data.json');
    const data = allEvents.find(ev => ev.id === id);

    return {
        props: {
            data: data,
        },
    }
}