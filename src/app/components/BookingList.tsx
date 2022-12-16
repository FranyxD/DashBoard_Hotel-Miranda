// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { FlexCol } from '../styles';

const BookingList = () => {
    const [data, setData] = useState([])
    // @ts-ignore
    const datos = async() => {
        return await fetch(`http://localhost:3010/bookings`)
        .then(response => response.json())
        .then(json => setData(json))
      }
     useEffect(() => {
        datos();
     }, []);

     const getDatos = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await response.json();
        return data;
      };
      
      
      
      console.log(getDatos())
   

     console.log(data)
    return (
        <>
            {
                
            data.map((item, index) => {
                return <tr key={item.id}>
                    <td>
                        <img className='w-12 h-12' src={item.image} alt="" />
                        <FlexCol>
                            <span>{item.name}</span>
                            <span>{item.id}</span>
                            </FlexCol>    
                    </td>
                    <td>{item.orderDate}</td>
                    <td>{item.checkIn}</td>
                    <td>{item.checkOut}</td>
                    <td>{item.specialRequest}</td>
                    <td>
                        <span>{item.roomType.type}</span>
                        <span>{item.roomType.numRoom}</span>
                    </td>
                    <td>{item.status}</td>
                </tr>
            })
        }
        </>
    )
}

export default BookingList;