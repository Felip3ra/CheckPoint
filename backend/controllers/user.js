const { poolPromise, sql } = require('../db');

exports.getUsers = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM T_FUNCIONARIO');

    return res.status(200).json(result.recordset); // Retorna os dados como JSON
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

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