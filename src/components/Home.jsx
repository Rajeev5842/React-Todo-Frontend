import { Heading, Box, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = () => {


  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todoList')) ||[]);


  useEffect(()=>{
    localStorage.setItem("todoList",JSON.stringify(todos));
  },[todos])
  function AddTodoFun(todo)
  {
    setTodos([...todos,todo]);
    console.log(todos);

  }

  function deleteTodo(id){
    // console.log("deleteid",id);
    const newTodos=todos.filter((todo)=>{
      return todo.id !==id
    })

    setTodos(newTodos);
  }
  return (
    <VStack  alignItems={"center"} justifyContent={"center"}>
      <Heading letterSpacing={"4px"} mt={"10vh"} mb={"3vh"}>My Todos</Heading>
      <Box p={"4"} backgroundColor="blackAlpha.400" borderRadius={"10px"}>
        
        <TodoList deleteTodo={deleteTodo} todos={todos}/>
        <AddTodo addTodo={AddTodoFun}/>
      </Box>
    </VStack>
  );
};

export default Home;
