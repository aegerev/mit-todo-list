import React from 'react'

function App(){


  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  return(
    <>
    
    <h1>TODO:</h1>
      {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
    </>
  );
}

export default App;