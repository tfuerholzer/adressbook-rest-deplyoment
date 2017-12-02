"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_main_1 = require("./contract-main");
function contractDoDelete(request, response, next) {
    let personID = Number.parseInt(request.params.id);
    let description = "";
    response.setHeader("content-type", "application/json");
    if (personID < 0 || personID === NaN) {
        response.statusCode = 400;
        description = "Invalid ID supplied";
    }
    else {
        response.statusCode = 404;
        description = "Person not found";
        contract_main_1.storage.persons.forEach((person, num) => {
            if (person.id === personID) {
                delete (contract_main_1.storage.persons[num]);
                response.statusCode = 204;
                description = "Successful operation";
            }
        });
    }
    response.send(description);
}
exports.contractDoDelete = contractDoDelete;
