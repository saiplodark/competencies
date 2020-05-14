module.exports={
    getCars: async(req,res)=>{
        try {
            const db =req.app.get('db')
            const{user_id} = req.session.user
            const {bank} = req.params
            const cars = await db.cars.select_cars([user_id,bank])
            res.status(200).send(cars)            
        } catch (error) {
            console.log('error getting cars')
            res.status(500).send(error)
        }
    },
    addCars: async(req,res)=>{
        try {
            const db = req.app.get('db')
            const {name,bank, type, annual_fee,points,img} = req.body
            const{user_id} = req.session.user
            const cars = await db.cars.add_cars([name,bank,type,annual_fee,points,img,user_id])
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
            const{points} = req.query
            const{id} = req.params
            const cars = await db.cars.update_cars([id, points])
            res.status(200).send(cars)  
        } catch (error) {
            console.log('error updating cars')
            res.status(500).send(error)
        }
    }
}