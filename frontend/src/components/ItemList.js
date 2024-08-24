import React, { useState,useEffect } from 'react'
import axios from 'axios';

function ItemList({ setUpdateId, setItemData }) {
  const [items, setItems] = useState([]);

  const fetchItem = async () => {
    const response = await axios.get("http://localhost:4000/api/items");
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/items/${id}`);
    fetchItem();
  };

  useEffect(() => {
    fetchItem();
  });
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded">
        <h2 className="text-lg font-bold mb-4">Item List</h2>

        <ul>
          {items.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <p className="font-bold">{item.name}</p>
                <p>Quantity:{item.quantity}</p>
                <p>{item.description}</p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setUpdateId(item.id);
                    setItemData(item);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >Edit</button>

                <button onClick={()=>{
                    handleDelete(item._id)
                }} className='bg-red-500 text-white px-4 py-2 rounded'>
                    Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ItemList