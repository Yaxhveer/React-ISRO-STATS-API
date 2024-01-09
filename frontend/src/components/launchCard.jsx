import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useLaunchData } from '../context/context';
import { addFavLaunch, deleteFavLaunch } from '../services/services';
import { useEffect, useState } from 'react';



const LaunchCard = ({launchData}) => {

    const { setError, favLaunches, setFavLaunches, favLaunchesUUID, setFavLaunchesUUID } = useLaunchData();
    const [ isFav, setIsFav ] = useState();

    useEffect(() => {
        setIsFav(favLaunchesUUID?.includes(launchData.UUID))
    }, [favLaunchesUUID])

    const handleAddFav = async () => {
        try {
            const addFav = await addFavLaunch(launchData);
            if (!addFav.done) {
                throw new Error(addFav.error);
            }
            setFavLaunches([...favLaunches, launchData]);
            setFavLaunchesUUID([...favLaunchesUUID, launchData.UUID]);
        } catch (e) {
            console.log(e.message);
            setError("Error occured")
        }
    }

    const handleDelFav = async () => {
        try {
            const delFav = await deleteFavLaunch(launchData.UUID);
            if (!delFav.done) {
                throw new Error(delFav.error);
            }
            const temp = favLaunches.filter((l) => l.UUID != launchData.UUID);
            console.log(temp);
            setFavLaunches(temp);
            setFavLaunchesUUID(favLaunchesUUID.filter((l) => l != launchData.UUID));
        } catch (e) {
            console.log(e.message);
            setError(e.message)
        }
    }

    return (
        <div id={launchData.UUID} style={{width:'300px'}} >
            <Card variant="outlined">
                <CardContent>
                    <div className='flex flex-row gap-2 justify-between'>
                        <Link to={launchData.Link}>
                            <Typography variant="h5" component="div" className='underline'>
                                {launchData.Name}
                            </Typography>
                        </Link>
                        {
                            favLaunchesUUID && isFav ?
                                <div className='w-6 pt-1' onClick={handleDelFav} style={{cursor: 'pointer'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            :
                                <div className='w-6 pt-1' onClick={handleAddFav} style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                        }
                    </div>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Serial No. {launchData.SerialNumber}
                    </Typography>
                    <div variant="body2" className='flex flex-col text-base gap-1'>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            {launchData.LaunchType}
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            {launchData.LaunchDate}
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            {launchData.MissionStatus}
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                            </svg>


                            {launchData.Payload || "Undisclosed"}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default LaunchCard;