import { api } from "./api";

export type LoginPayload = {
    email: string;
    senha: string;
};

export type RegisterPayload = {
    nome: string;
    email: string;
    senha: string;
};

export type AuthUser = {
    id: number;
    nome: string;
    email: string;
    token?: string;
};

type LoginResponse = {
    success: boolean;
    token: string;
    funcionario: {
        FUN_CD_USUARIO: number;
        FUN_NM_NOME: string;
        FUN_NM_EMAIL: string;
    };
};

type RegisterResponse = {
    success: boolean;
    funcionario: {
        FUN_CD_USUARIO: number;
        FUN_NM_NOME: string;
        FUN_NM_EMAIL: string;
    };
};

export async function loginFuncionario(payload: LoginPayload): Promise<AuthUser> {
    const { data } = await api.post<LoginResponse>("/funcionarios/loginFuncionario", {
        FUN_NM_EMAIL: payload.email,
        FUN_NM_SENHA: payload.senha,
    });

    return {
        id: data.funcionario.FUN_CD_USUARIO,
        nome: data.funcionario.FUN_NM_NOME,
        email: data.funcionario.FUN_NM_EMAIL,
        token: data.token,
    };
}

export async function cadastrarFuncionario(payload: RegisterPayload): Promise<AuthUser> {
    const { data } = await api.post<RegisterResponse>("/funcionarios/criarFuncionario", {
        FUN_NM_NOME: payload.nome,
        FUN_NM_EMAIL: payload.email,
        FUN_NM_SENHA: payload.senha,
    });

    return {
        id: data.funcionario.FUN_CD_USUARIO,
        nome: data.funcionario.FUN_NM_NOME,
        email: data.funcionario.FUN_NM_EMAIL,
    };
}
