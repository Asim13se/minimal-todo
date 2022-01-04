import React, {useEffect, useState} from 'react';
import TodoInput from './TodoInput/TodoInput';
import {OnTitleChange} from '../types/OnTitleChange';
import {OnDueDateChange} from '../types/OnDueDateChange';
import {Todo} from '../../../shared/todo/models/Todo';
import graphQLClient from '../../common/graphQL/graphQLClient';
import useTodoList from '../hooks/useTodoList';
import useSelectedTodo from '../hooks/useSelectedTodo';
import updateTodoMutation from '../mutations/updateTodoMutation';
import {OnPressDeleteTodo} from '../types/OnPressDeleteTodo';
import deleteTodoMutation from '../mutations/deleteTodoMutation';

function EditTodoInputContainer() {
  const {selectedTodo, setSelectedTodo} = useSelectedTodo();
  const {todoList, setTodoList} = useTodoList();
  const [title, setTitle] = useState(selectedTodo?.title || '');
  const [isLoading, setIsLoading] = useState(false);
  const initialDueDate = selectedTodo?.dueDate
    ? new Date(selectedTodo.dueDate)
    : null;
  const [dueDate, setDueDate] = useState<Date | null>(initialDueDate);

  useEffect(() => {
    setTitle(selectedTodo ? selectedTodo.title : '');
    setDueDate(selectedTodo?.dueDate ? new Date(selectedTodo.dueDate) : null);
  }, [selectedTodo, setSelectedTodo]);
  const resetFields = () => {
    setTitle('');
    setDueDate(null);
  };
  const handleClose = () => {
    setSelectedTodo(null);
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
  const handlePressDelete: OnPressDeleteTodo = async () => {
    try {
      await graphQLClient.mutate({
        mutation: deleteTodoMutation(selectedTodo!.id),
      });
      const todoIndex = todoList.findIndex(
        todo => todo.id === selectedTodo!.id,
      );
      const newTodoList = [...todoList];
      newTodoList.splice(todoIndex, 1);
      setTodoList(newTodoList);
      handleClose();
    } finally {
      setIsLoading(false);
    }
  };
  const handlePressSave = async () => {
    try {
      setIsLoading(true);
      const modifiedTodo: Todo = {
        ...selectedTodo!,
        title,
        dueDate: dueDate?.toISOString() || '',
      };
      await graphQLClient.mutate({
        mutation: updateTodoMutation(modifiedTodo),
      });
      const todoIndex = todoList.findIndex(
        todo => todo.id === selectedTodo!.id,
      );
      const newTodoList = [...todoList];
      newTodoList.splice(todoIndex, 1, modifiedTodo);
      setTodoList(newTodoList);
      handleClose();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TodoInput
      isVisible={Boolean(selectedTodo)}
      onClose={handleClose}
      title={title}
      onTitleChange={handleTitleChange}
      onPressSave={handlePressSave}
      dueDate={dueDate}
      onDueDateChange={handleDueDateChange}
      onClearDueDate={handleClearDueDate}
      onPressDelete={handlePressDelete}
      isLoading={isLoading}
    />
  );
}

export default EditTodoInputContainer;
