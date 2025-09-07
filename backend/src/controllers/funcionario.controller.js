import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || "uma_chave_secreta";

// Criar funcionário
export const criarFuncionario = async (req, res) => {
  try {
    // Criptografar senha
    const hashedPassword = await bcrypt.hash(req.body.FUN_NM_SENHA, 10);

    const user = await prisma.T_FUNCIONARIO.create({
      data: {
        FUN_NM_NOME: req.body.FUN_NM_NOME,
        FUN_NM_EMAIL: req.body.FUN_NM_EMAIL,
        FUN_NM_SENHA: hashedPassword
      }
    });

    // Remover senha antes de enviar
    const { FUN_NM_SENHA, ...userSemSenha } = user;
    res.json({ success: true, funcionario: userSemSenha });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login do funcionário
export const loginFuncionario = async (req, res) => {
  try {
    const user = await prisma.T_FUNCIONARIO.findFirst({
      where: { FUN_NM_EMAIL: req.body.FUN_NM_EMAIL }
    });

    if (!user) return res.status(401).json({ success: false, message: "Usuário não encontrado" });

    // Comparar senha
    const isMatch = await bcrypt.compare(req.body.FUN_NM_SENHA, user.FUN_NM_SENHA);
    if (!isMatch) return res.status(401).json({ success: false, message: "Senha incorreta" });

    // Gerar JWT
    const token = jwt.sign({ id: user.FUN_CD_USUARIO }, SECRET, { expiresIn: "1d" });

    // Remover senha antes de enviar
    const { FUN_NM_SENHA, ...userSemSenha } = user;

    res.json({ success: true, token, funcionario: userSemSenha });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
