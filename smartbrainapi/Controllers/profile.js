

const handelProfileGet=(req,res,db)=>{
    const {id} = req.params;
    db.select('*').from('users').where({id}).then(user=>{
  
      if(user.length){
        res.json(user[0])
      } else{
        res.status(400).json('Not found')
      }
      res.json(user[0])
    }).catch(err=>res.status(400).json('error getting user'))
}
export default handelProfileGet;