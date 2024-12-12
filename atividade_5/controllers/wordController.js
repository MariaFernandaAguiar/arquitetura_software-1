
exports.transformId = async(req,res) =>{
    const {id} = req.params;

    const id_value = parseInt(id);

    try{ 

        res.send(`ID modificado com sucesso: ${id_value*4}`);

    }
    catch(err){
        res.status(400).send('Erro ao modificar ID');
    }


}

exports.transformWord = async(req,res) =>{
    const {word} = req.params;

    try{ 

        res.send(`Palavra modificada com sucesso: ${word.toUpperCase()}`);

    }
    catch(err){
        res.status(400).send('Erro ao modificar palavra');
    }
}