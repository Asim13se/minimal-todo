import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import TodoList from './TodoList';
import {OnPressTodoItem} from '../types/OnPressTodoItem';
import {TodoListPageProps} from '../TodoListPage';
import {OnPressTodoItemCheckbox} from '../types/OnPressTodoItemCheckbox';
import TodoListQuery from '../../../queries/TodoListQuery';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../../../../common/styling/Colors';
import useTodoList from '../../../hooks/useTodoList';
import ErrorMessage from '../../../../common/components/messages/ErrorMessage';
import {useTranslation} from 'react-i18next';
import graphQLClient from '../../../../common/graphQL/graphQLClient';
import toggleTodoCompletionMutation from '../../../mutations/toggleTodoCompletionMutation';
import useSelectedTodo from '../../../hooks/useSelectedTodo';

type Props = {
  navigation: TodoListPageProps['navigation'];
};

function TodoListContainer(props: Props) {
  const {t} = useTranslation();
  const {
    data,
    error: fetchError,
    loading: isFetching,
  } = useQuery(TodoListQuery);
  const {todoList, setTodoList} = useTodoList();
  const {setSelectedTodo} = useSelectedTodo();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    if (isFetching || fetchError) return;
    setTodoList(data.todoList);
    setIsLoading(false);
    setError(null);
  }, [setTodoList, data, isFetching, fetchError]);
  useEffect(() => {
    if (!fetchError) return;
    setIsLoading(false);
    setError(fetchError);
  }, [fetchError]);
  const handlePressItem: OnPressTodoItem = todo => {
    setSelectedTodo(todo);
  };
  const handlePressItemCheckbox: OnPressTodoItemCheckbox = async todo => {
    const newDoneAtValue = todo.doneAt ? '' : new Date().toISOString();
    await graphQLClient.mutate({
      mutation: toggleTodoCompletionMutation(todo.id, newDoneAtValue),
    });
    const newTodoList = todoList.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          doneAt: newDoneAtValue,
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };
  if (isLoading) {
    return (
      <ActivityIndicator
        size={'large'}
        style={styles.spinner}
        color={Colors.spinner}
      />
    );
  }
  if (error) {
    return (
      <ErrorMessage
        style={styles.errorMessage}
        message={t('TodoListPage.fetchErrorMessage')}
      />
    );
  }
  return (
    <TodoList
      todoList={todoList}
      onPressItem={handlePressItem}
      onPressItemCheckbox={handlePressItemCheckbox}
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 100,
    alignSelf: 'center',
  },
  errorMessage: {
    marginTop: 70,
    alignSelf: 'center',
  },
});

export default TodoListContainer;
