import { useState, useEffect } from "react";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";
import Timer from "./Components/Timer/Timer";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
    let [parkingLotItems, setParkingLotItems] = useState(getInitialState());

    function saveParkingLotItems() {
        localStorage.setItem("items", JSON.stringify(parkingLotItems));
    }

    function getInitialState() {
        let savedState = localStorage.getItem("items");
        if (typeof savedState === "string") {
            return JSON.parse(savedState);
        }
        return [];
    }

    useEffect(saveParkingLotItems, [parkingLotItems]);

    function addItem(date, priority, link, description) {
        setParkingLotItems((oldItems) => [
            ...oldItems,
            {
                id: nanoid(),
                date,
                description,
                link,
                priority,
            },
        ]);
    }

    function deleteItem(idToDelete) {
        setParkingLotItems((oldItems) =>
            oldItems.filter((item) => item.id !== idToDelete)
        );
    }

    return (
        <div className="App">
            <header>
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
                <Timer />
            </header>
            <main>
                <ParkingLotForm addItem={addItem} />
                <ParkingLotList
                    parkingLotItems={parkingLotItems}
                    deleteItem={deleteItem}
                />
            </main>
        </div>
    );
}

export default App;
