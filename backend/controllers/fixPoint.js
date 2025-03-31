const { poolPromise, sql } = require('../db');

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