const router = require('express').Router();
const jwt = require('jsonwebtoken')


const Person = require('../Models/Person');


router.post('/', async (req,res) => {
    const {email, senha} = req.body;

    if(!email){return res.status(422).json({ message:"o email é obrigatorio"})};
    if(!senha){return res.status(422).json({ message:"a senha é obrigatorio"})};

    const user = await Person.findOne({email:email});

    if(!user){
        return res.status(422).json({ message: 'Usuario não encontrado'});
    }

    try{
        const secret = process.env.SECRET;

        const token = jwt.sign({
            id:user._id,
        },
        secret
        );

        res.status(200).json({message: 'Autenticação finalizada',token})

    }catch(error){
        res.status(500).json({error:error})
    }

})

module.exports = router
