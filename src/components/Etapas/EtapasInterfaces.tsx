'use client'

export interface Desafio{
    desafio: string,
    enunciado: string,
    resolucao: string,
    casosTeste: string
}

export interface Etapa {
    etapaIndice: number;
    estaLiberada: boolean;
    tema: string;
    descricao: string;
    iconPath: string;
    desafios: Desafio[];
}