const {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
} = require("./validacoes");

describe("Função primeiroNome", () => {
  it("deve retornar o primeiro nome ao receber nome completo", () => {
    expect(primeiroNome("Maria Fernanda Souza")).toBe("Maria");
  });

  it("deve retornar o nome completo se não houver espaço", () => {
    expect(primeiroNome("Maria")).toBe("Maria");
  });

  it("deve funcionar com múltiplos espaços", () => {
    expect(primeiroNome("Carlos Eduardo Silva")).toBe("Carlos");
  });
});

describe("Função verificarDisponibilidadeEstoque", () => {
  it("deve retornar true se houver quantidade suficiente", () => {
    expect(verificarDisponibilidadeEstoque("laptop", 5)).toBe(true);
  });

  it("deve retornar false se não houver quantidade suficiente", () => {
    expect(verificarDisponibilidadeEstoque("headphone", 6)).toBe(false);
  });

  it("deve retornar false se o produto não existir", () => {
    expect(verificarDisponibilidadeEstoque("camera", 1)).toBe(false);
  });

  it("deve retornar false se o produto existir mas estiver zerado", () => {
    expect(verificarDisponibilidadeEstoque("livro", 1)).toBe(false);
  });
});

describe("Função calcularPrecoTotal", () => {
  it("deve retornar o total correto de produtos", () => {
    const produtos = [
      { nome: "Produto 1", preco: 10, quantidade: 2 },
      { nome: "Produto 2", preco: 15, quantidade: 2 },
      { nome: "Produto 3", preco: 20, quantidade: 1 },
    ];
    expect(calcularPrecoTotal(produtos)).toBe(70);
  });

  it("deve retornar 0 para array vazio", () => {
    expect(calcularPrecoTotal([])).toBe(0);
  });

  it("deve funcionar com um único produto", () => {
    const produtos = [{ nome: "Produto 4", preco: 50, quantidade: 3 }];
    expect(calcularPrecoTotal(produtos)).toBe(150);
  });
});
