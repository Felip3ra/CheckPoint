import { Router } from "express";
import { criarPonto, listaPontos } from "../controllers/ponto.controller.js";



const router = Router();

router.post("/criarPonto", criarPonto);

router.post("/listaPontos", listaPontos);

export default router;
