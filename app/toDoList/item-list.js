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
    };

    return (
        <div className="max-w-md mx-auto">
            <div>
                <button
                  onClick={handleSortByName}
                  className={`mr-2 ${sortBy === 'name' ? 'bg-purple-500 text-white rounded-md' : ''}`}
                >
                  Sort by Name
                </button>
                <button
                  onClick={() => setSortBy('grouped')}
                  className={`mr-2 ${sortBy === 'grouped' ? 'bg-purple-500 text-white rounded-md' : ''}`}
                >
                  Group by priority
                </button>
            </div>
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
                          <h2>{priority}</h2>
                          {sortedItems
                              .filter((item) => item.priority === priority)
                              .map((item) => (
                                  <Item key={item.id} item={item} />
                              ))}
                      </div>
                  ))}
                </div>
            ) : (
                <div>
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
