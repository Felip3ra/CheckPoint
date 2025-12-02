import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const criarPonto = async (req, res) => {
  try {
    const ponto = await prisma.t_PONTO.create({
      data: {
        PON_NM_PONTO: req.body.PON_NM_PONTO,
        PON_NM_ENDERECO: req.body.PON_NM_ENDERECO,
        PON_CD_USUARIO: req.body.PON_CD_USUARIO,
      },
    });
    res.json(ponto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listaPontos = async (req, res) => {
  try {
    const userId = req.body.PON_CD_USUARIO || req.query.PON_CD_USUARIO;
    if (!userId) {
      return res.status(400).json({ error: "PON_CD_USUARIO é obrigatório" });
    }

    const data = new Date().toISOString().split("T")[0];
    const inicioDia = new Date(`${data}T00:00:00.000Z`);
    const fimDia = new Date(`${data}T23:59:59.999Z`);

    const pontos = await prisma.t_PONTO.findMany({
      where: {
        PON_CD_USUARIO: Number(userId),
        PON_DT_PONTO: {
          gte: inicioDia,
          lte: fimDia,
        },
      },
    });

    res.json(pontos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
