"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_main_1 = require("./contract-main");
function contractDoGet(request, response, next) {
    response.setHeader("content-type", "application/json");
    response.send(JSON.stringify(contract_main_1.storage.persons));
    next();
}
exports.contractDoGet = contractDoGet;
function contractDoGetID(request, response, next) {
    response.setHeader("content-type", "application/json");
    contract_main_1.storage.persons.filter(person => person.id === request.params.id);
}
exports.contractDoGetID = contractDoGetID;
