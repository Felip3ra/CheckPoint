import { Router } from "express";
import { criarPonto, listaPontos } from "../controllers/ponto.controller.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = Router();

// cria ponto exige usuário autenticado
router.post("/criarPonto", authenticate, criarPonto);

// lista pontos do dia (mantém sem auth para não quebrar app atual)
router.post("/listaPontos", listaPontos);

export default router;
