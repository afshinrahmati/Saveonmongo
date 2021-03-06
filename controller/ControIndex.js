const axios = require("axios")
// *********MOdels********
const saveonmongo = require('../models/ModelIndex')

module.exports = new class Admin  {
    
// ********* axisos + Delete Databases + ************** 

First(req,res,next){

new Promise((resolve, rejects) => {

     
  let ShowAll = saveonmongo.deleteMany({});
  resolve(ShowAll)

     axios.get('http://tsetmc.com/tsev2/data/MarketWatchPlus.aspx').then(resp => { 
       let data = resp.data;
       let dataParts = data.split('@')
       let stocks = dataParts[2].split(';')
    
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
            
           if (err) return rejects({
            Error:"Error"+err,
            message : ":("
           });
           else {
               return resolve({
                Successful:"ok",
                message : ":)"
               });
           }
              
       })
        }
        
     
    })
     
  }).then((message) => {
    return res.status(200).send(message)
  }).catch((message) => {
    console.log(message);
  })

};
  
//*********** Show ALL ***************/ 

ShowAll(req,res,next){

  new Promise((resolve, rejects) => {
    
    let ShowAll = saveonmongo.find({});
    resolve(ShowAll)
  }).then((message) => {

    return res.status(200).send(message)
  }).catch((message) => {
    console.log(message);
  })

}  

// ********SHOW Taki*******
ShowOnce(req,res,next){
  new Promise((resolve, rejects) => {
    let b = saveonmongo.find({ code: req.params.code });

    resolve(b)

  }).then((message) => {

    return res.status(200).send(message)

  }).catch((message) => {

  })
}



}