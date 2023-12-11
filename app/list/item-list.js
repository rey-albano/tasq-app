//Eli and Evan together

"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) { 

    const itemsArray = Array.isArray(items) ? [...items] : [];

    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...itemsArray].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'priority') {
          return a.priority.localeCompare(b.priority);
        }
        return 0;
    });
      
    const handleSortByName = () => {
        setSortBy('name');
        console.log(sortBy)
    };

    return (
        <div className="max-w-md mx-auto">
            <div>
                <p className="text-xl mt-4 font-semibold">Sort Options</p>
                <button
                  onClick={handleSortByName}
                  className={`my-2 shadow-2xl bg-gray-500 px-4 py-1 border-4 border-slate-800 rounded-xl text-md hover:bg-slate-700 relative inline-block ${sortBy === 'name' ? 'bg-slate-700 text-white rounded-md' : ''}`}
                >
                  Sort by Name
                </button>
                <button
                  onClick={() => setSortBy('grouped')}
                  className={`mx-2 my-2 shadow-2xl bg-gray-500 px-4 py-1 border-4 border-slate-800 rounded-xl text-md hover:bg-slate-700 relative inline-block ${sortBy === 'grouped' ? 'bg-slate-700 text-white rounded-md' : ''}`}
                >
                  Group by priority
                </button>
            </div>
            <p className="text-xl mt-4 font-semibold">Your list</p>
            {sortBy === 'grouped' ? (
                <div>
                  {Object.keys(sortedItems.reduce((acc, item) => {
                      const newAcc = { ...acc };
                      if (!newAcc[item.priority]) {
                          newAcc[item.priority] = [];
                      }
                      newAcc[item.priority].push(item);
                      return newAcc;
                  }, {})).sort(sortAlphabetically).map((priority) => (
                      <div key={priority}>
                          <h2 className="mb-2 mt-4">{priority}</h2>
                          {sortedItems
                              .filter((item) => item.priority === priority)
                              .map((item) => (
                                  <Item key={item.id} item={item}/>
                              ))}
                      </div>
                  ))}
                </div>
            ) : (
                <div className="flex flex-col">
                    {sortedItems.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
      
    function sortAlphabetically(a, b) {
        return a.localeCompare(b);
    }
}
