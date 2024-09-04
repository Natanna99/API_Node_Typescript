"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const http_status_codes_1 = require("http-status-codes");
//RequestHandler é um tipo de função que recebe um Request, Response e NextFunction
//Função de validação de corpo de requisição
//Recebe um campo (schemas) que é um parametro com os tipos de requesição que serão validados
const validator = (schemas) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //errorsResult é um objeto que armazena os erros de validação
    const errorsResult = {};
    //Object.entries pega um objeto e transforma em um array de arrays
    //O primeiro valor é a chave e o segundo é o valor (key= tipo de requisição, schema= esquema de validação)
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            //abortEarly: false para retornar todos os erros de uma vez
            schema.validateSync(req[key], { abortEarly: false });
            //Caso a validação ocorra com sucesso, chama o próximo middleware ou função de controle
        }
        catch (err) {
            //Caso ocorra um erro de validação, o erro é do tipo ValidationError
            const yupError = err;
            //Record<string, string> é um objeto que aceita qualquer chave e valor como string
            //Mapia os erros de validação para um objeto de erros
            const errors = {};
            //Percorre o array de erros de validação e mapeia para um objeto de erros
            yupError.inner.forEach((error) => {
                if (error.path) {
                    errors[error.path] = error.message;
                }
            });
            //Adiciona os erros no objeto de erros
            errorsResult[key] = errors;
        }
    });
    //Caso exista erros de validação, retorna os erros
    //Caso contrário, chama o próximo middleware ou função de controle
    if (Object.entries(errorsResult).length > 0) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
    else {
        return next();
    }
});
exports.validator = validator;
