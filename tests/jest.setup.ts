//npm add -D supertest @types/supertest = lib que consegue fazer requisições http para testar rotas da aplicação
import supertest from "supertest";

//importando a aplicação
import { app } from "../src/server/Server";

//exportando a aplicação para ser utilizada nos testes
export const testServer = supertest(app);
