import Usuario from "../models/Usuario.js";



export async function listar(req,res){

const usuarios =
await Usuario.find();


res.json(usuarios);

}



export async function buscar(req,res){

const usuario =
await Usuario.findById(
req.params.id
);


res.json(usuario);

}




export async function atualizar(req,res){

const usuario =
await Usuario.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


res.json(usuario);

}




export async function arquivar(req,res){


await Usuario.findByIdAndUpdate(

req.params.id,

{
ativo:false
}

);


res.json({
mensagem:"Usuário arquivado"
});


}