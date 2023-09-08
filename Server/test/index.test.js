const app = require("../src/")
const session = require("supertest")
const agent = request(server);

describe("Routes testing", () => {
    describe("GET characters/:id");
    describe("User")

    it("Responde con status 200", async () => {
        await agent.get("/character/1").expect(200);

        it('responde un objeto con las propiedades: "id", "name", "species", gender, ')
    })
})

describe ()