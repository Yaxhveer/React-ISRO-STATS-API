import LaunchCard from '../components/launchCard.jsx';

const AllLaunches = ({ allLaunches }) => {

    return (
        <>
            <div className='flex flex-wrap justify-around py-5' style={{ gap: '32px' }}>
                {
                    allLaunches?.map((launch, i) => {
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

export default AllLaunches;