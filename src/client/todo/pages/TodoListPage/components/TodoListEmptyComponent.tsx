import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import PrimaryTextStyle from '../../../../common/styling/PrimaryTextStyle';
import NewTodoButton from '../../../components/NewTodoButton';

function TodoListEmptyComponent() {
  const {t} = useTranslation();
  return (
    <View style={styles.view}>
      <Text style={styles.message}>
        {t('TodoListPage.emptyTodoListMessage')}
      </Text>
      <NewTodoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginHorizontal: 30,
  },
  message: {
    ...PrimaryTextStyle,
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 30,
  },
});

export default TodoListEmptyComponent;
