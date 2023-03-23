import Head from 'next/head'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    return (
        <>
            <Head>
                <title>Romania Events 🎉</title>
            </Head>
            <div className='single-event'>
                <div className="content">
                    <div className="content-top">
                        <Image
                            src={data?.image}
                            alt={data?.title}
                            width={600}
                            height={400}
                            priority={true}
                            className='image'
                        />

                        <div className="content-top-right">
                            <h1>{data?.title}</h1>
                            <h1>{data?.date}</h1>
                        </div>
                    </div>

                    <p>{data?.description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleEvent