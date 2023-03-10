require('dotenv').config
const router = require('express').Router();
const jwt = require('jsonwebtoken')


const Catalogo = require('../Models/Catalog');

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    
    const product = await Catalogo.findById(id, '-__v');

    if(!product){
        res.status(404).json({message: 'produto não encontrado'})
    }

    res.status(200).json({product})

})

router.get('/', async (req,res) => {
    //receber as informações
    Catalogo.find()
    .then((products)=> {
        res.status(200).json({products});
    })
    .catch((error) => console.log(error));

});

function checkToken (req, res, next) {
    authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
    return res.status(401).json({message: 'acesso negado'});
    }
     try{
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();
     }catch(error){
        res.status(400).json({message:"usuario invalido"});
     }

}

router.post('/registrar',checkToken, async (req, res)=> {
    const {nome, descricao, img, links} = req.body

    if(!nome){
        return res.status(422).json({message: 'Nome obrigatirio'})
    }
    if(!descricao){
        return res.status(422).json({message: 'Descrição obrigatoria'})
    }
    if(!img){
        return res.status(422).json({message: 'Imagem obrigatiria'})
    }
    if(!links){
        return res.status(422).json({message: 'Links Obrigatorios'})

    }

    const catalogo = new Catalogo({
        nome,
        descricao,
        img,
        links
    })

    try{
        await catalogo.save()
        res.status(201).json({message:'Produto Adicionado'})
    }
    catch(error){
        res.status(400).json({error:error})
    }


});



router.delete('/:id', checkToken, async (req, res) => {
    const id = req.params.id;
    
    try{
        await Catalogo.deleteOne({_id: id})
        res.status(200).json({message: 'Produto apagado'})
    }catch(error){
        res.status(500).json({error:error})    }
})

module.exports = router
