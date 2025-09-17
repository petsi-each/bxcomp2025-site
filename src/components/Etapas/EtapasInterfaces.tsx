'use client'

export interface Desafio{
    desafio: string,
    enunciado: string,
    resolucao: string,
    casosTeste: string
}

export interface DesafioList{
    desafios: Desafio[];
}

export interface Etapa {
    etapaIndice: number;
    estaLiberada: boolean;
    tema: string;
    descricao: string;
    iconName: string;
    desafios: Desafio[];
}