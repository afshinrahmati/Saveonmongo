const express = require("express")
const router =  express.Router()
const axios = require("axios")
const saveonmongo = require('../models/ModelIndex')
axios.get('http://tsetmc.com/tsev2/data/MarketWatchPlus.aspx').then(resp => { 
 let data = resp.data;
 let dataParts = data.split('@')
 let stocks = dataParts[2].split(';')

 let p = new Promise((resolve,rejects)=>{

  for(let i = 0 ;i<stocks.length;i++){
    //Split ','
    let stockProps = stocks[i].split(',')
    //save on mongo
    const newsaveonmongo = new saveonmongo({
       code: `${stockProps[0]}`,
       link: `${stockProps[1]}`,
       parent_id: `${stockProps[2]}`,
       tablecompnt:`${stockProps[3]}`,
       detail: {
         ISIN : `${stockProps[4]}`,
         symol : `${stockProps[5]}`,
         company : `${stockProps[6]}`,
         sharenumber : `${stockProps[7]}`,
       },
       spaciaDelete: `${stockProps[8]}`,
       price: {
           opening: `${stockProps[9]}`,
           closeing : `${stockProps[10]}`,
           last : `${stockProps[11]}`,
           lowest: `${stockProps[12]}`,
           heigth : `${stockProps[13]}`,
           yesterday : `${stockProps[14]}`,
         },
         cost: `${stockProps[15]}`,
         value: `${stockProps[16]}`,
         volume: `${stockProps[17]}`,
    });
 
    newsaveonmongo.save(function(err, useres) {
     console.log(useres);
     if (err) return rejects({
      Error:"Error"+err,
      message : ":("
     });
     else {
         return resolve({
           sucsess :" OK",
           message : ":)"
         })
     }
 });
 }
});
p.then((message)=>{
  //Resolve + sucsess
  console.log(message.sucsess + "  " +message.message  );
}).catch((message)=>{
  // Reject + Erro
  console.log(message.Error + "  " +message.message );
});

 

})
 



router.get("/",(req,res,next)=>{
 return res.render("../MarketWatchPlus.aspx")
})






module.exports = router