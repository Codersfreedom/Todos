import { createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id:1,
            todo:"Hello World!",
            isComplete:false
        }
    ]
}

export const TodoSlice = createSlice({
        name: "Superman",
        initialState,
        reducers:{
            addTodo: (state,action)=>{
                
                const todo = {
                    id:nanoid(),
                    todo:action.payload,
                    isComplete:false
                }
                state.todos.push(todo)
            },
            updateTodo:(state,action)=>{
               
               state.todos = state.todos.map((todo)=> todo.id ===action.payload.id? {...todo, todo:action.payload.todo}  : todo )
            },
            deleteTodo:(state,action)=>{
                console.log(action.payload)
              state.todos=  state.todos.filter((todo)=>todo.id!==action.payload);
            },
            toggleComplete: (state,action)=>{
                
                state.todos = state.todos.map((todo)=> todo.id ===action.payload ? {...todo, isComplete:!todo.isComplete} :todo)
            }

        }
        

})

export const {addTodo,updateTodo,deleteTodo,toggleComplete} = TodoSlice.actions

export default TodoSlice.reducer;