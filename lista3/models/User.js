
class User {
  
  constructor(id_user,name_user,email_user,password_user){
  
    this.id_user = id_user ;
  
    this.name_user = name_user;
  
    this.email_user = email_user;
  
    this.password_user = password_user;
  
  }

  show_user() {
  
    console.log(`Código do produto: ${this.id_user}`);
  
    console.log(`Nome : ${this.name_user}`);
  
    console.log(`Email : ${this.email_user}`);
  
    console.log(`Preço: ${this.password_user}`);
  
  }

}

module.exports = User;