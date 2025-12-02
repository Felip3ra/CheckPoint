import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const criarSolicitacao = async (req, res) => {
  try {
    const payload = req.body;
    const ajuste = await prisma.t_AJUSTE_PONTO.create({
      data: {
        TAP_NM_SOLICITACAO: payload.solicitacao,
        TAP_NM_STATUS: payload.status,
        TAP_NM_DESCRICAO: payload.descricao,
        TAP_NM_URL: payload.arquivo || null,
        TAP_DT_INICIAL: payload.dataInicio ? new Date(payload.dataInicio) : null,
        TAP_DT_FINAL: payload.dataFinal ? new Date(payload.dataFinal) : null,
        TAP_BL_APROVADO: false,
      },
    });
    res.json({ success: true, ajuste });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const estatisticasPontos = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: "userId é obrigatório" });
    }

    const { inicio, fim } = req.query;
    const startDate = inicio ? new Date(inicio) : new Date(new Date().setDate(new Date().getDate() - 7));
    const endDate = fim ? new Date(fim) : new Date();

    const pontos = await prisma.t_PONTO.findMany({
      where: {
        PON_CD_USUARIO: Number(userId),
        PON_DT_PONTO: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const total = pontos.length;
    const porTipo = pontos.reduce((acc, p) => {
      const tipo = p.PON_NM_PONTO || "Desconhecido";
      acc[tipo] = (acc[tipo] || 0) + 1;
      return acc;
    }, {});

    res.json({
      total,
      porTipo,
      inicio: startDate,
      fim: endDate,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
