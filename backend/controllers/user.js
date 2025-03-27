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
        id: user.ID,
        nome: user.NM_FUNCIONARIO,
        email: user.NM_EMAIL,
        isAdmin: user.BT_ISADMIN,
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

exports.addPoint = async (req,res) => {
  try{
    const {cd_funcionario,nomePonto,endereco} = req.body;
    console.log('Dados recebidos no backend:', req.body);
    if (!cd_funcionario || !nomePonto || !endereco) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const pool = await poolPromise;
    const result = await pool 
                .request()
                .input('cdFuncionario',sql.Int,cd_funcionario)
                .input('nomePonto',sql.NVarChar,nomePonto)
                .input('endereco',sql.NVarChar,endereco)
                .query(`INSERT INTO T_PONTO ([CD_FUNCIONARIO], [NM_PONTO], [NM_ENDERECO], [DT_PONTO]) 
                  VALUES (@cd_funcionario, @nomePonto, @endereco, GETDATE())`);
    return res.status(201).json({message: 'Ponto criado com sucesso!'})
  }
  catch(err){
    console.log('Erro ao criar ponto: ', err)
  }
}

exports.addFixPoint = async (req,res) => {
  try{
    const {cdPonto,solicitacao,status,motivo,descricao,dataInicio,dataFinal,totalHoras,arquivo} = req.body;
    console.log('Dados recebidos no backend:', req.body);
    if (!cdPonto || !solicitacao || !status || !motivo || !dataInicio || !dataFinal) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const pool = await poolPromise;
    const result = await pool 
                .request()
                .input('cdPonto',sql.Int,cdPonto)
                .input('solicitacao',sql.NVarChar,solicitacao)
                .input('status',sql.NVarChar,status)
                .input('motivo',sql.Int,motivo)
                .input('descricao',sql.NVarChar,descricao)
                .input('dataInicio',sql.NVarChar,dataInicio)
                .input('dataFinal',sql.Int,dataFinal)
                .input('totalHoras',sql.NVarChar,totalHoras)
                .input('arquivo',sql.VarBinary,arquivo)
                .query(`INSERT INTO T_AJUSTE_PONTO ([CD_PONTO], [NM_SOLICITACAO], [NM_STATUS], [NM_MOTIVO],[NM_DESCRICAO],[DT_SOLICITACAO],[DT_INICIAL],[DT_FINAL],[NR_TOTAL_HORAS],[NM_ARQUIVO]) 
                  VALUES (@cdPonto, @solicitacao, @status, @motivo, @descricao, GETDATE()), @dataInicio, @dataFinal, @totalHoras, @arquivo`);
    return res.status(201).json({message: 'Ajuste de Ponto criado com sucesso!'})
  }
  catch(err){
    console.log('Erro ao criar ajuste de ponto: ', err)
  }
}