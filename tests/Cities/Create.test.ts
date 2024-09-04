import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

//Função que vai ser executada ao chamar a rota de criação de cidade
//O primeiro parametro é a descrição do cenário de teste
//O segundo parametro é a função que vai ser executada
describe("Cidades - Create", () => {
  //Caso de teste para criação de cidade com sucesso
  it("Cria registro", async () => {
    const res1 = await testServer.post("/city/create").send({
      nameCity: "São Paulo",
    });

    //Espera que o status retornado seja 201
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Tenta criar registro com menos de 3 caracteres", async () => {
    const res1 = await testServer.post("/city/create").send({
      nameCity: "SP",
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nameCity");
  });
});
