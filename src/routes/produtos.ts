import express from "express"

const router = express.Router()

router.get("/produto/:id", (req, res) => {
    console.log(req.params)
    res.json({nome:"Teclado xyz", precp:100})
})

router.post("/", (req,res) =>{
    res.json({ produtos:[] })
})

export default router