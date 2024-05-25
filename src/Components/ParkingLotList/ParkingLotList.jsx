import React from 'react';
import ParkingLotItem from './ParkingLotItem';

import './ParkingLot.css';

export default function ParkingLotList({ parkingLotItems, deleteItem }) {

    const ParkingLotItemsJsx = parkingLotItems.map( item => 
        <ParkingLotItem key={item.id} {...item} deleteItem={deleteItem} />
    );

    return (
        <section className="parking-lot-list-container">
            { ParkingLotItemsJsx }
        </section>
    );
}
