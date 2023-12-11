//Eli and Evan together

// export default function Item({name, quantity, category}) {
export default function Item({item}) {
    return (
        <div className="border border-purple-500 bg-purple-800 max-w-md mx-auto m-4 p-2 rounded-md ">
            <h3 className="text-x1 font-bold">Task: {item.name}</h3> 
        </div>
    );
}