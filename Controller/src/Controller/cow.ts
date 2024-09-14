// cow.ts
import express from 'express';
import {calculateMilkProduction, findCowById} from '../Model/cowData'; // นำเข้าฟังก์ชันจาก cowData.ts

const app = express();

app.use(express.json());

app.post('/get', async (req, res)=>{
    let { id } = req.body;

    if(!id){
        return res.status(400).json({message: "Please complete the form!"})
    }

    const cowID= findCowById(id)
    if(cowID){
        const milkAmount = calculateMilkProduction(cowID);
        return res.status(200).json({milkAmount: milkAmount, cowID});
    }else{
        return res.status(404).json({message: "Cow not Found!"});
        
    }

});

export default app;
