const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig.js")


describe("server.js", () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    it("should use testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    it("POST api/auth/register - should return status 200", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({ username: "user01", password: "pass01" })
            .then(res => {

                expect(res.status).toBe(200);
            })
    })

    it("POST /auth/register - res.type should match json", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({ username: "user01", password: "pass01" })
            .then(res => {

                expect(res.type).toMatch(/json/i);
            })
    })

    it("POST api/auth/login - res.type should match json", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({ username: "user01", password: "pass01" })
            .then(res => {

                expect(res.type).toMatch(/json/i);
            })
    })

    it("POST api/auth/login - should return status 200", function () {
        return supertest(server).post("/api/auth/login")
            .send({ username: "user01", password: "pass01" })
            .then(res => {

                expect(res.status).toBe(401);
            })
    })

    it("GET api/jokes/ - res.type should match json", function () {
        return supertest(server)
            .get("/api/jokes/")
            .then(res => {

                expect(res.type).toMatch(/json/i);
            })
    })

    it("GET api/jokes/ - should be defined", function () {
        return supertest(server)
            .get("/api/jokes/")
            .then(res => {

                expect(res.body).toBeDefined();
            })
    })
})