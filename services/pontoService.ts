import { api } from "./api";

export type PontoRegistro = {
    PON_NM_PONTO: string;
    PON_DT_PONTO: string;
    PON_CD_USUARIO: number;
};

export type PontoUIModel = {
    ponto: string;
    horario: string;
};

export async function criarPonto(payload: {
    userId: number;
    tipoPonto: string;
    endereco: string;
    token?: string;
}): Promise<void> {
    const headers = payload.token ? { Authorization: `Bearer ${payload.token}` } : undefined;
    await api.post(
        "/pontos/criarPonto",
        {
            PON_CD_USUARIO: payload.userId,
            PON_NM_PONTO: payload.tipoPonto,
            PON_NM_ENDERECO: payload.endereco,
        },
        { headers }
    );
}

export async function listarPontosHoje(userId: number): Promise<PontoUIModel[]> {
    const { data } = await api.post<PontoRegistro[]>("/pontos/listaPontos", {
        PON_CD_USUARIO: userId,
    });

    return data.map((ponto) => ({
        ponto: ponto.PON_NM_PONTO,
        horario: new Date(ponto.PON_DT_PONTO).toLocaleTimeString("pt-BR"),
    }));
}
