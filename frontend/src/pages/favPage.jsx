import { Link } from 'react-router-dom';
import LaunchCard from '../components/launchCard.jsx'
import { useLaunchData } from '../context/context.jsx';

const Error = () => {
    return (
        <div className='text-center text-2xl text-white underline'>
            Error Occured!
        </div>
    )
}

const AllLaunches = ({ allLaunches }) => {

    return ( allLaunches &&
        <>
            <div className='flex flex-wrap justify-around py-5' style={{ gap: '32px' }}>
                {
                    allLaunches.map((launch, i) => {
                        return (
                            <div id={i}>
                                <LaunchCard launchData={launch} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

const FavPage = () => {

    const { error, favLaunches } = useLaunchData();

    return (
        <div className="mx-4" style={{ maxHeight: '100vh' }}>
            <Link to="/" className='py-2 text-white flex flex-row gap-3 justify-end'>
                Home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </Link>
            <div className="lg:text-5xl md:text-4xl text-2xl text-center text-gray-200 pb-4 pt-2">
                Favourite Launches
            </div>
            <div className="lg:text-xl md:text-lg text-base text-center text-gray-200 py-4">
                List of favourite launches
            </div>
            {
                error ? <Error /> : <AllLaunches allLaunches={favLaunches} />
            }
        </div>
    )
}

export default FavPage;