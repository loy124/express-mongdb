import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
    todo: {type: String }
}, {collection : 'Todo'});

let TodosModel = mongoose.model('Todo', TodoSchema);

TodosModel.getAll = () => {
    return TodosModel.find({});
}

TodosModel.addTodo = (todoToAdd) => {
    return todoToAdd.save();
}

TodosModel.removeTodo = (todoId) => {
    return TodosModel.remove({_id: todoId});
}
 
export default TodosModel;