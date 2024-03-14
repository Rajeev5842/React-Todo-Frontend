import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoList = ({todos,deleteTodo}) => {
  // console.log("List of all todos",todos);
  if (todos.length == 0) {
    return (
      <Badge textAlign={"center"} colorScheme={'cyan'} p="4" borderRadius="lg">
        No Todos Available,yay
      </Badge>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderWidth="2px"
        borderColor={'gray.100'}
        borderRadius="lg"
        padding="4"
        w="100%"
        maxW={{ base: '90vw', sm: '90vw', lg: '50vw', xl: '40vw' }}
        alignItems="stretch"
      >
        {todos.map(todo => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton onClick={()=>deleteTodo(todo.id)} icon={<FaTrash />} isRound={true} />
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default TodoList;
