"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_main_1 = require("./contract-main");
function contractDoPost(request, response, next) {
    console.log("POST CALLED!");
    let description = "";
    console.log(request.body.id);
    if (request.body.id === undefined || request.body.firstName === undefined || request.body.lastName === undefined || request.body.email === undefined) {
        description = "Invalid input (e.g. required field missing or empty)";
        response.statusCode = 400;
    }
    else {
        if (contract_main_1.storage.addPerson(new contract_main_1.Person(request.body.id, request.body.firstName, request.body.lastName, request.body.email))) {
            response.statusCode = 200;
            description = "Person successfully created";
        }
        else {
            response.statusCode = 400;
            description = "Person with this id (" + request.body.id + ") already exists!";
        }
    }
    response.send(description);
    next();
}
exports.contractDoPost = contractDoPost;
