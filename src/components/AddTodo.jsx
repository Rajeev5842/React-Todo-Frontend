import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React from 'react';
import {nanoid} from "nanoid";
import { useState } from 'react';

const AddTodo = ({addTodo}) => {

    const [task,setTask]=useState('');
    const toast =useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);

    if(!task)
    {
        toast({
          title:"Enter the task",
          status:"error",
          duration:2000,
          isClosable:true,
          // colorScheme:"green",
          colorScheme:"blackAlpha.900"
        });
        return;
    }

    const todo={
        id:nanoid(),
        body:task
    }

    addTodo(todo);
    setTask('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input onChange={(e)=>setTask(e.target.value)} variation="filled" value={task} placeholder="Ex: Start Learning  React" />
          <Button  type="submit" colorScheme="cyan" px="8">
            Add Todo
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default AddTodo;
