module.exports={
    getCars: async(req,res)=>{
        try {
            const db =req.app.get('db')
            const{buyer_id} = req.session.buyer
            const cars = await db.cars.select_cars([user_id])
            res.status(200).send(cars)            
        } catch (error) {
            console.log('error getting cars')
            res.status(500).send(error)
        }
    },
    addCars: async(req,res)=>{
        try {
            const db = req.app.get('db')
            const {make,model,price,mileage,img} = req.body
            const{buyer_id} = req.session.buyer
            const cars = await db.cars.add_cars([make,model,price,mileage,img,buyer_id])
            res.status(200).send(cars)
        } catch (error) {
            console.log('error adding cars')
            res.status(500).send(error)
        }
    },
    deleteCars: async(req,res) =>{
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const cars = await db.cars.delete_cars(id)
            res.status(200).send(cars)
        } catch (error) {
            console.log('error removing cars',error)
            res.status(500).send(error)
        }
    },
    updateCars:async(req,res)=>{
        try {
            const db = req.app.get('db')
            const{price, mileage} = req.query
            const{id} = req.params
            const cars = await db.cars.update_cars([id, price, mileage])
            res.status(200).send(cars)  
        } catch (error) {
            console.log('error updating cars')
            res.status(500).send(error)
        }
    }
}