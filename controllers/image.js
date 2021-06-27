
const Clarifai =require ('clarifai');

const app =new Clarifai.App({
    apiKey:"8cba374fac6e4d7287ca8d273b670ff8"
  
  });
  const handleapicall=(req,res)=>{
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data =>{
        res.json(data);
    })
    .catch(err =>res.status(400).json('unable to work with api'))

  }
 
const handleimage=(req,res,db) =>{
    const {id} =req.body;
    db('users').where('id' ,'=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries=>{
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))

}
module.exports={
   
    handleimage,handleapicall
    
    
}
