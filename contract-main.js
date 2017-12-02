"use strict";
/**
 *@author Thomas Fürholzer, HTL-Perg, 4AHIF
 *@requires restify
 */
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const contract_post_1 = require("./contract-post");
const contract_get_1 = require("./contract-get");
const contract_delete_1 = require("./contract-delete");
class Person {
    constructor(id, firstName, lastName, email) {
        this.firstName = firstName;
        this.id = id;
        this.lastName = lastName;
        this.email = email;
    }
}
exports.Person = Person;
class PersonStorage {
    constructor() {
        this.persons = new Array();
    }
    /**
     * @return {boolean} returns true if the person was added
     * @param person Peroson object that should be added
     * Adds a new person if this person (id) doesn't exisit in the array.
     */
    addPerson(person) {
        if (this.persons.filter((p) => person.id === p.id).length > 0) {
            return false;
        }
        else {
            this.persons.push(person);
            return true;
        }
    }
}
exports.PersonStorage = PersonStorage;
exports.storage = new PersonStorage;
const port = process.env.PORT||8010;
const server = restify_1.createServer();
server.use(restify_1.plugins.bodyParser());
server.post("/contacts", contract_post_1.contractDoPost);
server.get("/contacts", contract_get_1.contractDoGet);
server.del("/contacts/:id", contract_delete_1.contractDoDelete);
server.listen(port, () => console.log(`Server is now listening to port ${port}`));
