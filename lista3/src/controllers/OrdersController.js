const Order = require('../models/Order');
const ProductController = require('../controllers/ProductController');
const UsuarioController = require('../controllers/UserController');

const usuarioControllers = new UsuarioController();

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();


class OrderControllers {

    async createOrder(req, res) { 

        try {

            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ message: 'Token não fornecido ou inválido' });
            }

            const token = authHeader.split(' ')[1]; 
            
            console.log('Token de autenticação:', token);

            if (!token) {
                return res.status(400).json({ message: 'Token não fornecido ou inválido' });
            }
    
            const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(token);

            const id_usuario = usuario.id_usuario;

            console.log('ID do usuário:', id_usuario);
            
            const {id_product, quantity} = req.body;

            console.log('Product ID:', id_product);

            console.log('Quantity:', quantity);

            const productController = new ProductController();
            
            const response = await productController.getProductDetails(req,res);

            if(response){

                console.log("produto encontrado");

                console.log("Produto encontrado:", response.data.product.name_product);
                
                const order = new Order();

                order.addProductOrder(id_usuario,response, quantity);

                if(!order) {
                    return res.status(400).json({message: 'Error creating order - '});
                }

                return res.status(201).json({order});

            }


        }catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }

}

 module.exports = OrderControllers

