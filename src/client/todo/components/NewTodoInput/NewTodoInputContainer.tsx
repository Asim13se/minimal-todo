import React, {useState} from 'react';
import NewTodoInput from './NewTodoInput';
import useIsNewTodoInputVisible from '../../hooks/useIsNewTodoInputVisible';
import {OnTitleChange} from '../../types/OnTitleChange';
import {OnDueDateChange} from '../../types/OnDueDateChange';

function NewTodoInputContainer() {
  const {isNewTodoInputVisible, setIsNewTodoInputVisible} =
    useIsNewTodoInputVisible();
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
  const handlePressSave = () => {
    handleClose();
  };
  return (
    <NewTodoInput
      isVisible={isNewTodoInputVisible}
      onClose={handleClose}
      title={title}
      onTitleChange={handleTitleChange}
      onPressSave={handlePressSave}
      dueDate={dueDate}
      onDueDateChange={handleDueDateChange}
      onClearDueDate={handleClearDueDate}
    />
  );
}

export default NewTodoInputContainer;
