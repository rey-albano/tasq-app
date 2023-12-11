//Eli and Evan together
"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page(){

    //Constants
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
;
    }
    return(

        //Front end Page
        <main>

            //Words at top
            <h1 className="text-xl font-bold text-purple-300 text-center"> To-Do List</h1>

            <NewItem onAddItem = {handleAddItem} /> {}

            <ItemList items = {items} />{}

            

        </main>
    );
}