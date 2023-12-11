//Eli and Evan together

// export default function Item({name, quantity, category}) {
export default function Item({item}) {
    return (
        <div className="my-1 flex shadow-2xl bg-gray-500 px-4 py-1 border-4 border-slate-800 rounded-xl group-hover:bg-slate-700 relative">
            <h3 className="text-lg font-semibold tracking-wide">Task: <p className="text-lg font-light inline-block">{item.name}</p></h3> 
        </div>
    );
}