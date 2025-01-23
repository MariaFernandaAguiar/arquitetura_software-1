const bcrypt = require('bcrypt');

class User {
  
  constructor(id_user,name_user,email_user,password_user){
  
    this.id_user = id_user ;
  
    this.name_user = name_user;
  
    this.email_user = email_user;
  
    this.password_user = password_user;

    this.usuarios = [];
  
  }

  show_user() {
  
    console.log(`Código do produto: ${this.id_user}`);
  
    console.log(`Nome : ${this.name_user}`);
  
    console.log(`Email : ${this.email_user}`);
  
    console.log(`Preço: ${this.password_user}`);
  
  }

  async verifyPassword(password) {

    return await bcrypt.compare(password, this.password_user);

  }

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  static async findByEmail(email) {
    const usuario = User.usuarios.find(usuario => usuario.email_user === email);
      
    return usuario||null;
  }


}

(async () => {
  const hashedPassword = await new User().hashPassword('123456');
  const hashedPasswordMaria = await new User().hashPassword('123456');

  User.usuarios = [
    new User(1, 'João', 'joao@hotmail.com', hashedPassword),
    new User(2, 'Maria', 'maria@gmail.com', hashedPasswordMaria)
  ];

}
)();

module.exports = User;