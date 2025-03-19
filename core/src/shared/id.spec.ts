import { describe, expect, it } from '@jest/globals';
import Id from './Id';

describe("Id.generate", () => {
  test("deve retornar uma string no formato correto", () => {
    const id = Id.generate();

    // Verifica se é uma string
    expect(typeof id).toBe("string");

    // Verifica se segue o formato esperado (três segmentos separados por "-")
    const regex = /^[a-z0-9]{7}-[a-z0-9]{7}-[a-z0-9]{7}$/;
    expect(id).toMatch(regex);
  });

  test("deve gerar IDs únicos em chamadas consecutivas", () => {
    const id1 = Id.generate();
    const id2 = Id.generate();

    expect(id1).not.toBe(id2); // Garante que não são iguais
  });
});