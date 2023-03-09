const todos = [{id:1, name:"Check emails", completed:false}]

exports.findAllTodo = (req, res) => {
    return res.status(200).json(todos);
}

exports.findTodo = (req, res) => {
    const todo = todos.find(item=> item.id===Number(req.params.id))
    if(!todo){
        return res.status(404).json({error:"Not found"})
    }
    return res.status(200).json([todo]);
}

exports.addTodo=(req, res)=>{
    const newTodo = {
        id: todos.length+1,
        name:req.body.name,
        completed: false
    }
    todos.push(newTodo)
    return res.status(201).json(todos)
}

