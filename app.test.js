const request = require("supertest")
const app = require("./app")

describe("APP JS TEST FILE", () => {

  it("GET all todos", async () => {
    const response = await request(app).get("/todos")
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ])
    )
  })

  it("GET specific todo",async () => {
    const response = await request(app).get("/todos/1")
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ])
    )
  })

  it("POST new todo", async() => {
    const response = await request(app).post("/todos").send({name:"New Item Added"})
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.status).toEqual(201)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ])
    )
  })
  
  it("GET not present todo for error", async () => {
    const response = await request(app).get("/todos/999")
    expect(response.status).toEqual(404)
  })
})
