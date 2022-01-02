import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import TodoDueDate, {TodoDueDateStyles} from '../TodoDueDate';
import {StyleSheet} from 'react-native';

describe('TodoDueDate', () => {
  it('renders null when the dueDate prop is null', () => {
    const dueDate = null;
    const {toJSON} = render(<TodoDueDate dueDate={dueDate} />);
    expect(toJSON()).toEqual(null);
  });
  it('renders UI when the dueDate prop is not null', () => {
    const dueDate = new Date('2022-04-15T07:30:00.000Z');
    const {getByTestId} = render(<TodoDueDate dueDate={dueDate} />);
    expect(getByTestId('TodoDueDate_text_testID').children[0]).toEqual(
      'Apr 15, 2022, 10:30 AM',
    );
  });
  it('does not render clear button when not passing onPressClear prop', () => {
    const dueDate = new Date();
    const {queryByTestId} = render(<TodoDueDate dueDate={dueDate} />);
    expect(queryByTestId('TodoDueDate_clear_button_testID')).toEqual(null);
  });
  it('does render clear button when passing onPressClear prop', () => {
    const dueDate = new Date();
    const handlePressClear = () => {};
    const {getByTestId} = render(
      <TodoDueDate dueDate={dueDate} onPressClear={handlePressClear} />,
    );
    expect(getByTestId('TodoDueDate_clear_button_testID')).not.toEqual(null);
  });
  it('should be red when the due date is passed the current time', () => {
    const dueDate = new Date('2011-10-05T14:30:00.000Z');
    const {getByTestId} = render(
      <TodoDueDate dueDate={dueDate} isPastDueDate />,
    );
    expect(getByTestId('TodoDueDate_testID').props.style).toStrictEqual(
      StyleSheet.flatten([
        TodoDueDateStyles.touchable,
        TodoDueDateStyles.pastDueDateTouchable,
        {opacity: 1},
      ]),
    );
    expect(getByTestId('TodoDueDate_text_testID').props.style).toStrictEqual([
      TodoDueDateStyles.dueDateText,
      TodoDueDateStyles.pastDueDateText,
    ]);
  });
});
