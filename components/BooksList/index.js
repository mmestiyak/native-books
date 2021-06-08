import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import BookItem from "../BookItem";

import styles from './styles';
import books from './books';

const BookList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => <BookItem book={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default BookList;
