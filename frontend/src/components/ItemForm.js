import React, { useState } from 'react'
import axios from 'axios';

function ItemForm({fetchItem}) {
    const [itemData,setItemData] = useState({name:'', quantity:'', description:''});
    const [updateId,setUpdateId] = useState('');

    const handleChange = (e) =>{
        setItemData({...itemData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(updateId){
            await axios.put(
              `http://localhost:4000/api/items/${updateId}`,itemData
            );
        }else{
            await axios.post("http://localhost:4000/api/items",itemData);
        }
        setItemData({name:'', quantity:'',description:''});
        setUpdateId('');
        fetchItem();
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
        <h2 className="text-lg font-bold mb-4">
          {updateId ? "Update" : "Create"} Item
        </h2>

        <div className="mb-4">
          <label className="block mb-2">Name</label>

          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded"
            value={itemData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={itemData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={itemData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {updateId ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
}

export default ItemForm