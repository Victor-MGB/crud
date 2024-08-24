import React,{useState} from 'react'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

function App() {
  const [updateId, setUpdateId] = useState("");
  const [itemData, setItemData] = useState({
    name: "",
    quantity: "",
    description: "",
  });

   const fetchItems = async () => {
    // Function to fetch items, passed to both ItemForm and ItemList
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">CRUD App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ItemForm
          updateId={updateId}
          setUpdateId={setUpdateId}
          itemData={itemData}
          setItemData={setItemData}
          fetchItems={fetchItems}
        />
        <ItemList setUpdateId={setUpdateId} setItemData={setItemData} />
      </div>
    </div>
  );
}

export default App