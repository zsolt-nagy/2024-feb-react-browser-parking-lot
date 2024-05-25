import { useState } from "react";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
    let [parkingLotItems, setParkingLotItems] = useState([
        {
            id: nanoid(),
            date: "06/27/2023",
            priority: "Low",
            link: "https://google.com/",
            description: "Ultimate source of truth.",
        },
        {
            id: nanoid(),
            date: "08/27/2023",
            priority: "Medium",
            link: "https://react.dev/",
            description: "React documentation and tutorial",
        },
    ]);

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
