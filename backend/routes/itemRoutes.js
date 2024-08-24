const express = require('express');
const router = express.Router();
const Item = require('../models/items')
require("dotenv").config();

//@route to post item or creating a new item
router.post('/items',async(req,res)=>{
    const {name,quantity,description} = req.body;
    try{
        const newItem = new Item({name,quantity,description})
        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(500).json({message:'Error creating items',error})
    }
})

// @route GET /items
// @desc Get all items
router.get('/items', async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items)
    }catch(error){
        res.status(500).json({message:'Error fetching items',error})
    }
})

router.get('/items/:id',async(req,res)=>{
    try{
        const item = await Item.findById(req.params.id);
        if(!item) return res.status(404).json({message:'item not found'})
            res.status(200).json(item);
    }catch(error){
        res.status(500).json({message:'Error fetching item',error})
    }
})

router.put('/items/:id',async(req,res)=>{
    try{
        const {name,quantity,description} = req.body;
        const updateItem = await Item.findByIdAndUpdate(
            req.params.id,
            {name,quantity,description},
            {new:true}
        );
    if (!updateItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updateItem);
    }catch(error){
        res.status(500).json({message:"Error updating item",error})
    }
})

router.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error("Error deleting item:", error); // Log the error
        res.status(500).json({ message: 'Error deleting item', error });
    }
});


module.exports = router;