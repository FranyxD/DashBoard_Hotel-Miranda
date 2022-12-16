import React from 'react';
import BookingList from '../components/BookingList';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import { getData } from '../utils/hooks';

const Bookings = () => {
    
        

    const tabs:string[] = ['All Guest', 'Pending', 'Booked', 'Cancelled', 'Refund'];
    const tableHeads:string[] = ['Guest', 'Order Date', 'Check in', 'Check out', 'Special Request', 'Room Type', 'Status']

    
    // @ts-ignore 
    const componentes:any[] = tabs.map((item , index) => <Table componente={<BookingList/>} tableHeads={tableHeads}/>)
    //console.log(componentes)

    return (
        <main className='p-[2.5%] bg-white dark:bg-black dark:text-white'>
            <section>
            <Tabs componentes={componentes} tabs={tabs}/>
            </section>
        </main>
    )
}

export default Bookings;
