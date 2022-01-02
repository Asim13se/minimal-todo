import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';
import useIsNewTodoInputVisible from '../../hooks/useIsNewTodoInputVisible';
import NewTodoFloatingButton from '../NewTodoFloatingButton';

it('set isNewTodoInputVisible to true after press event', () => {
  const {result} = renderHook(() => useIsNewTodoInputVisible());
  const {getByTestId} = render(<NewTodoFloatingButton />);
  const button = getByTestId('NewTodoFloatingButton_testID');
  fireEvent.press(button);
  expect(result.current.isNewTodoInputVisible).toBe(true);
});
