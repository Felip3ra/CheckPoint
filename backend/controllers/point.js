const { poolPromise, sql } = require('../db');
const moment = require('moment-timezone');

exports.GetPoint = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do funcionário

    if (!id) {
      return res.status(400).json({ error: 'ID do funcionário é obrigatório' });
    }

    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query(`
        SELECT 
    CD_FUNCIONARIO, 
    NM_PONTO, 
    NM_ENDERECO, 
    DT_PONTO -- NÃO aplique conversão AT TIME ZONE
FROM T_PONTO 
WHERE CD_FUNCIONARIO = @id 
  AND CAST(DT_PONTO AS DATE) = CAST(GETDATE() AS DATE)
ORDER BY DT_PONTO;


      `);

    const pontos = result.recordset;

    if (pontos.length === 0) {
      return res.status(404).json({ error: 'Nenhum ponto encontrado para este funcionário hoje' });
    }

    // Formata os pontos encontrados
    const pontosFormatados = pontos.map((ponto) => ({
      ponto: ponto.NM_PONTO,
      horario: new Date(ponto.DT_PONTO).toISOString().split('T')[1].slice(0, 5)
    }));
    

    
    return res.status(200).json({
      message: 'Pontos encontrados',
      pontos: pontosFormatados,
    });
  } catch (error) {
    
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.AddPoint = async (req,res) => {
    try{
      const {CodigoFuncionario,tipoPonto,endereco} = req.body;
      console.log('Dados recebidos no backend:', req.body);
      if (!CodigoFuncionario || !tipoPonto || !endereco) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }
      const pool = await poolPromise;
      const result = await pool 
                  .request()
                  .input('CodigoFuncionario',sql.Int,CodigoFuncionario)
                  .input('tipoPonto',sql.NVarChar,tipoPonto)
                  .input('endereco',sql.NVarChar,endereco)
                  .query(`INSERT INTO T_PONTO ([CD_FUNCIONARIO], [NM_PONTO], [NM_ENDERECO], [DT_PONTO]) 
                    VALUES (@CodigoFuncionario, @tipoPonto, @endereco, GETDATE())`);
      return res.status(201).json({message: 'Ponto criado com sucesso!'})
    }
    catch(err){
      console.log('Erro ao criar ponto: ', err)
    }
  }