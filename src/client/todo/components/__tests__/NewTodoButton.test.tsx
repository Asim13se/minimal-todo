import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';
import NewTodoButton from '../NewTodoButton';
import useIsNewTodoInputVisible from '../../hooks/useIsNewTodoInputVisible';

it('set isNewTodoInputVisible to true after press event', () => {
  const {result} = renderHook(() => useIsNewTodoInputVisible());
  const {getByTestId} = render(<NewTodoButton />);
  const button = getByTestId('NewTodoButton_testID');
  fireEvent.press(button);
  expect(result.current.isNewTodoInputVisible).toBe(true);
});
