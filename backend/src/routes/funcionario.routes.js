import { Router } from "express";

import { criarFuncionario, loginFuncionario } from "../controllers/funcionario.controller.js";

const router = Router();

router.post("/criarFuncionario", criarFuncionario);

router.post("/loginFuncionario", loginFuncionario);

export default router;
