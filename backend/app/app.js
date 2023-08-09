import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(
    express.json(),
    express.urlencoded({
        extended: true
    })    
);

app.post("/", (req, res)=>{
    const { msg } = req.body;
    if(msg.toUpperCase() == "SIM"){
        return res.status(200).json({message: "Você está mais próximo de se juntar ao time!"});
    }
    if(msg.toUpperCase() == "NAO" || msg.toUpperCase() == "NÃO"){
        return res.status(200).json({message: "Tudo bem! Quem sabe na próxima néh!"});
    }
    // if(msg == ""){
    //     return res.status(400).json({message: "Erro"});    
    // }
    return res.status(200).json({message: "Erro"});
})

app.listen(PORT, ()=>{
    console.log("Backend is running!");
})