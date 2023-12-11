//Eli and Evan together
"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useUserAuth } from "../login/_utils/auth-context";
import Link from "next/link";

export default function List(){
    //Constants
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const { user } = useUserAuth();
    return(
        <main className="h-screen">
            <Link href="../" className="shadow-2xl bg-gray-600 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700 w-40 text-center self-center m-4 absolute top-0">Go Back</Link>
            <h1 className="text-4xl font-bold text-purple-900 text-center"> To-Do List</h1>
            <NewItem onAddItem = {handleAddItem} />
            <ItemList items = {items} />
        </main>
    );
}
