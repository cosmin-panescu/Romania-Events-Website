import Image from 'next/image'

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
                <div className="content-text">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>)
}

export default SingleEvent