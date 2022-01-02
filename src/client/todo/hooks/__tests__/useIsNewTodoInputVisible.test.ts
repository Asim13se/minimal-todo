import {act, renderHook} from '@testing-library/react-hooks';
import useIsNewTodoInputVisible from '../../hooks/useIsNewTodoInputVisible';

it('initial state', () => {
  const {result} = renderHook(() => useIsNewTodoInputVisible());
  expect(result.current.isNewTodoInputVisible).toBe(false);
});
it('set isNewTodoInputVisible to true', () => {
  const {result} = renderHook(() => useIsNewTodoInputVisible());
  act(() => {
    result.current.setIsNewTodoInputVisible(true);
  });
  expect(result.current.isNewTodoInputVisible).toBe(true);
});
it('set isNewTodoInputVisible to false', () => {
  const {result} = renderHook(() => useIsNewTodoInputVisible());
  act(() => {
    result.current.setIsNewTodoInputVisible(false);
  });
  expect(result.current.isNewTodoInputVisible).toBe(false);
});
