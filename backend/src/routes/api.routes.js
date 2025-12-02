import { Router } from "express";
import { criarSolicitacao, estatisticasPontos } from "../controllers/general.controller.js";

const router = Router();

router.post("/NewRequest", criarSolicitacao);
router.get("/GetStatistics/:userId", estatisticasPontos);

export default router;
