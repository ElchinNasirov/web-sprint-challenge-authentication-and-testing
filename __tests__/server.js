const supertest = require("supertest")
const server = require("./server.js")
const db = require("../database/dbConfig.js")


describe("server.js", () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    it("should use testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("user registration", () => {
        it("should recieve status code 201 and  ...", async () => {
            const res = await supertest(server).post("/api/auth/register").send({ username: "user01", password: "pass01" })

            expect(res.status).toEqual(201)
            expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
            expect(response.body).toHaveProperty("username", "user01")
        })
    })

    // describe("user login", async () => {
    //     it("should recieve status code 200 and have property", async () => {
    //         await supertest(server).post("/api/auth/register").send({ username: "user01", password: "pass01" })
    //         const res = await supertest(server).post("/api/auth/login").send({ username: "user01", password: "pass01" })

    //         expect(res.status).toEqual(200)
    //         expect(res.body).toHaveProperty("message", "Welcome user01")
    //     })
    // })

    // describe("jokes", async () => {
    //     it("should return  array of 20 jokes", () => {
    //         await supertest(server).post("/api/auth/register").send({ username: "user01", password: "pass01" })
    //         const userRes = await supertest(server).post("/api/auth/login").send({ username: "user01", password: "pass01" })
    //         const jokeRes = await request(server).get("/api/jokes").set({ Authorization: userRes.body.token });

    //         expect(jokeRes.body).toHaveLength(20)
    //     })
    // })
})