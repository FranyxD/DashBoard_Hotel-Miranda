
import React from 'react';
import GuestList from '../components/RoomList';
import Tabs from '../components/Tabs';

const Rooms = () => {

    const listguest = () => {
        return <GuestList/>
    }
    return (
        <main className='p-[2.5%] bg-white dark:bg-black dark:text-white'>
            {/* <Tabs componente={listguest}/> */}
            
        </main>
    )
}

export default Rooms;
