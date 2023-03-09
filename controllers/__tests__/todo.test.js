
const {  findAllTodo, findTodo, addTodo } = require("../todos");

describe("TESTING TODO CONTROLLER",()=>{
    let  mockRequest, mockResponse

    beforeEach(()=>{
        mockRequest= () => {
            const req = {}
            req.body = {}
            req.params = {}
            return req
          },
        
          mockResponse= () => {
            const res = {}
            res.send = jest.fn().mockReturnValue(res)
            res.status = jest.fn().mockReturnValue(res)
            res.json = jest.fn().mockReturnValue(res)
            return res
          }
    })

    it("Get Todo function",async()=>{
        let req = mockRequest();
        const res = mockResponse();
        await findAllTodo(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{id:1, name:"Check emails", completed:false}]);
    })

    it('Get specific todo', async()=>{
        let req = mockRequest();
        req.params.id = 1
        let res = mockResponse();
        await findTodo(req,res)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{id:1, name:"Check emails", completed:false}]);

        req.params.id = 999
        res = mockResponse();
        await findTodo(req,res)
        expect(res.status).toHaveBeenCalledWith(404);
    })
    
    it('Add new Todo', async()=>{
        let req = mockRequest();
        req.body.name = "New todo"
        let res = mockResponse();
        await addTodo(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith([{id:1, name:"Check emails", completed:false},{id:2, name:"New todo", completed:false}]);

    })
})