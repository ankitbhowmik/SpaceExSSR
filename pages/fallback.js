import Head from 'next/head';

const fallback = () => {
    return (
        <div>
            <h1>opps please enable internet connection</h1>
            <h1> This is a Fallback page.</h1>
        </div>
    )
}

export default fallback
