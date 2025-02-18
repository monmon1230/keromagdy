const handelRegister=(req,res,db,bcrypt) => {
  const { email, name, password } = req.body;
  if(!email || !password || !name){
  return  res.status(400).json('incorrect from submission');
  }
  const hash = bcrypt.hashSync(password);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail,
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
  .catch((err) => {
    res.status(400).json(" unable to register");
  });
};

export default  handelRegister ;

