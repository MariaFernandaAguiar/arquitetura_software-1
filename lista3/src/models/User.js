const bcrypt = require('bcrypt');

class User {

  
  constructor(name_user,email_user,password_user){
  
    this.id_user = User.getId();
  
    this.name_user = name_user;
  
    this.email_user = email_user;
  
    this.password_user = password_user;
  
  }

  showUser() {
  
    console.log(`ID: ${this.id_user}`);
  
    console.log(`Nome : ${this.name_user}`);
  
    console.log(`Email : ${this.email_user}`);
  
    console.log(`Senha: ${this.password_user}`);
  
  }

  showAllUsers() {
      
    this.usuarios.forEach(usuario => {
  
      usuario.show_user();
  
    });
  
  }

  async getId() {

    currentId = 1;

    this.id_user = await User.currentId++;

    return this.id_user;

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

  static async addNewUser(name,email,password){

    const user =  new User(name,email,password);

    user.password_user = await user.hashPassword(password);

    User.usuarios.push(user);

    return user;

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