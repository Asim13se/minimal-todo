import React, {useState} from 'react';
import TodoInput from './TodoInput/TodoInput';
import useIsNewTodoInputVisible from '../hooks/useIsNewTodoInputVisible';
import {OnTitleChange} from '../types/OnTitleChange';
import {OnDueDateChange} from '../types/OnDueDateChange';
import {Todo} from '../../../shared/todo/models/Todo';
import UUID from 'pure-uuid';
import graphQLClient from '../../common/graphQL/graphQLClient';
import addTodoMutation from '../mutations/addTodoMutation';
import useTodoList from '../hooks/useTodoList';

function NewTodoInputContainer() {
  const {isNewTodoInputVisible, setIsNewTodoInputVisible} =
    useIsNewTodoInputVisible();
  const [isLoading, setIsLoading] = useState(false);
  const {todoList, setTodoList} = useTodoList();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const resetFields = () => {
    setTitle('');
    setDueDate(null);
  };
  const handleClose = () => {
    setIsNewTodoInputVisible(false);
    resetFields();
  };
  const handleTitleChange: OnTitleChange = newTitle => {
    setTitle(newTitle);
  };
  const handleDueDateChange: OnDueDateChange = date => {
    setDueDate(date);
  };
  const handleClearDueDate = () => {
    setDueDate(null);
  };
  const handlePressSave = async () => {
    setIsLoading(true);
    try {
      const todo: Todo = {
        id: new UUID(4).toString(),
        title,
        dueDate: dueDate?.toISOString() || '',
      };
      await graphQLClient.mutate({
        mutation: addTodoMutation(todo),
      });
      setTodoList([...todoList, todo]);
      handleClose();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TodoInput
      isVisible={isNewTodoInputVisible}
      onClose={handleClose}
      title={title}
      onTitleChange={handleTitleChange}
      onPressSave={handlePressSave}
      dueDate={dueDate}
      onDueDateChange={handleDueDateChange}
      onClearDueDate={handleClearDueDate}
      isLoading={isLoading}
    />
  );
}

export default NewTodoInputContainer;
