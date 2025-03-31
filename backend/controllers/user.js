const { poolPromise, sql } = require('../db');

exports.getUsers = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM T_FUNCIONARIO WHERE NM_EMAIL = @email');

    const user = result.recordset[0];

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    // Comparar a senha (não use senhas em texto plano em produção!)
    if (user.NM_SENHA !== senha) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Retorna os dados do usuário (opcionalmente, sem a senha)
    return res.status(200).json({
      message: 'Login bem-sucedido',
      user: {
        id: user.CD_FUNCIONARIO,
        NM_FUNCIONARIO: user.NM_FUNCIONARIO,
        NM_EMAIL: user.NM_EMAIL,
      },
    });
  } catch (err) {
    console.error('Erro ao fazer login:', err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

exports.addUser = async (req,res) => {
    try {
        const { nome, email, senha, isAdmin } = req.body;
        console.log('Dados recebidos no backend:', req.body);
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
          }
        const pool = await poolPromise;
        const result = await pool 
                    .request()
                    .input('nome',sql.NVarChar,nome)
                    .input('email',sql.NVarChar,email)
                    .input('senha',sql.NVarChar,senha)
                    .input('isAdmin',sql.Bit,0)
                    .query(`INSERT INTO T_FUNCIONARIO ([NM_FUNCIONARIO], [NM_EMAIL], [NM_SENHA], [DT_GRAVACAO], [BT_ISADMIN])
        VALUES (@nome, @email, @senha, GETDATE(), @isAdmin)`);
        return res.status(201).json({message: 'Usuário criado com sucesso!'})
    } catch (err) {
        console.log('Erro ao criar usuário: ', err)
        return res.status(500).json({error: 'Erro interno do servidor'})
    }
};



