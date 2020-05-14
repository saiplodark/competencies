const bcrypt = require('bcrypt')

module.exports = {
    login: async(req, res) =>{
        const db = req.app.get('db')
        const {username, password} =  req.body
        const foundBuyer = await db.buyers.select_buyers(username).catch(err => console.log(err))
        if (!foundBuyer.length){
            res.status(401).send("Buyers not showing")
        }else{
            const matchPasswords = await bcrypt.compare(password, foundBuyer[0].hashed_password).catch(err=>console.log(err))
            if(matchPasswords){
                req.session.buyer = {
                    username:foundBuyer[0].username,
                    buyer_id: foundBuyer[0].buyer_id
                }
                console.log(req.session.buyer)
                res.status(200).send(req.session.buyer)
            }else{
                res.status(401).send("Something is wrong")
            }
        }
    },
    register: async (req,res)=>{
        const db = req.app.get('db')
        const {username, password} = req.body
        const foundBuyer = await db.buyers.select_buyers(username).catch(err=>consolee.log(err))
        if(foundBuyer.length){
            res.status(409).send('Buyer exists, but something went wrong')
        }else{
            const saltRounds =12
            const salt = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, salt)
            const createBuyer = await db.buyers.add_buyers([username, hashedPassword])
            req.session.buyer={
                buyer_id:createBuyer[0].buyer_id,
                username: createBuyer[0].username
            }
            res.status(200).send(req.session.buyer)
        }
        },
        signout:(req,res)=>{
            req.session.destroy()
            res.sendStatus(200)
            console.log(req.session)
        },
        buyerSession:(req,res)=>{
            res.status(200).send(req.session.buyer)
        }
}