import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { getData } from '../utils/modules';

const Table = ({componente, tableHeads}:any) => {
   

     
    return(
        <table className="reviews w-full dark:bg-myBlack rounded text-left">
            <thead className="head align-top w-full">
                <tr>
                    {
                        // @ts-ignore
                        tableHeads.map((item, index) => <th key={item}>{item}</th>)
                    }
                </tr>
            </thead>

            <tbody  className="task-container">
                   {componente}
            </tbody>

        </table>
    )
}

export default Table;