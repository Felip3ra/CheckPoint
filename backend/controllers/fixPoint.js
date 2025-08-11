const { poolPromise, sql } = require('../db');

exports.addFixPoint = async (req,res) => {
    try{
      const {cdPonto,solicitacao,status,motivo,descricao,dataInicio,dataFinal,totalHoras,url} = req.body;
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
                  .input('url',sql.NVarChar,url)
                  .input('dataInicio',sql.NVarChar,dataInicio)
                  .input('dataFinal',sql.Int,dataFinal)
                  .input('totalHoras',sql.NVarChar,totalHoras)
                  .query(`INSERT INTO T_AJUSTE_PONTO ([TAP_CD_PONTO], [TAP_NM_SOLICITACAO], [TAP_NM_STATUS], [TAP_NM_MOTIVO],[TAP_NM_DESCRICAO],[TAP_NM_URL],[TAP_DT_INICIAL],[TAP_DT_FINAL],[NR_TOTAL_HORAS],[TAP_BL_APROVADO]) 
                    VALUES (@cdPonto, @solicitacao, @status, @motivo, @descricao, @url,GETDATE(), @dataInicio, @dataFinal, @totalHoras, 0`);
      return res.status(201).json({message: 'Ajuste de Ponto criado com sucesso!'})
    }
    catch(err){
      console.log('Erro ao criar ajuste de ponto: ', err)
    }
  }