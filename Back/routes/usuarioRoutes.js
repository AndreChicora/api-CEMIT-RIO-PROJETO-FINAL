import express from "express";

import {
listar,
buscar,
atualizar,
arquivar
}
from "../controllers/usuarioController.js";


import {
autenticar
}
from "../middlewares/authMiddleware.js";


import {
apenasAdmin
}
from "../middlewares/adminMiddleware.js";


const router =
express.Router();



router.get(
"/",
autenticar,
listar
);



router.get(
"/:id",
autenticar,
buscar
);



router.put(
"/:id",
autenticar,
atualizar
);



router.delete(
"/:id",
autenticar,
apenasAdmin,
arquivar
);



export default router;