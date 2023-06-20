const Item = require('../models/item');

// function for reading our items
module.exports.items = async function(req,res){
    try {
        const items = await Item.find({}); 
        res.status(200).json({
         message: "Request Successful !",
         items: items
        }); 
    } catch (error) {
       console.log("Error in finding items", error);
       res.status(404).json({
        message: `Internal server error`
    });
    }
}


// function to create a new item
module.exports.createItem = async function(req, res){
    try {
        const newItem = new Item({
            name: req.body.name,
            brand: req.body.brand
        });
        await newItem.save();
        res.status(200).json({
            message: `Your item is add with name ${req.body.name}`
        });
    } catch (error) {
        console.log("Error in creating item", error);
        res.status(404).json({
            message: `Internal server error`
        });
        
    }
    
}


//function for deleteing item
module.exports.deleteItem = async function(req, res){
  try {
    await Item.deleteOne({_id: req.params.itemID});
    res.status(200).json({
        message: `Your item is deleted with id ${req.params.itemID}`
    });
    
  } catch (error) {
    console.log("Error in deleting item",error);
    res.status(404).json({
        message: `Internal server error`
    });
  }

}


// fuction for updating item
module.exports.updateItem = async function(req, res) {
    try {
        const ID = req.params.itemID;
        const newbrand = req.body.brand;
       
// after we find id and assign brand to new brand we update our brand id to new brandID 
       const updateItem = await Item.findByIdAndUpdate(ID, {brand: newbrand}, {new: true});

       if(updateItem) {
        res.status(200).json({
            Item : updateItem,
            message: `yeah! Brand is updated to ${newbrand}`
        });
       }else {
        res.status(404).json({
            message: `item not found`
        })
       }
          

    } catch (error) {
        console.log("Error in updating user", error);
        res.status(404).json({
            message: `Internal server error`
        });
        
    }
}
