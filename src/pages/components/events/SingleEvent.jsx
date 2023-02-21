import Image from 'next/image'
import React from 'react'

const SingleEvent = ({ data }) => {
    return (
        <div className='single-event'>
            <div className="content">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={500}
                    height={500}
                    priority={true}
                />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            <div className="input">
                <input type="email" />
                <button>Submit</button>
            </div>
        </div>)
}

export default SingleEvent