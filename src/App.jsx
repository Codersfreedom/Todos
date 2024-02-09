
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { useSelector } from "react-redux"

function App() {
  

  const todo = useSelector( state =>state.todos);

  console.log(todo)

  return (
    <> 
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((t)=>(
                            <div key={t.id} className="w-full">
                                       
                               <TodoItem todo={t} /> 
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            </>
  )
}

export default App
