import { api } from "./api";

export type FixPointRequest = {
    cdPonto: string;
    solicitacao: string;
    status: string;
    motivo: string;
    descricao: string;
    dataInicio: string;
    dataFinal: string;
    totalHoras: string;
    arquivo?: string;
};

export async function criarSolicitacaoAjuste(payload: FixPointRequest): Promise<void> {
    await api.post("/api/NewRequest", payload);
}
