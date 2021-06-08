import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const BookItem = (props) => {

  const { name, price, tagline, image } = props.book;

  return (
    <View style={styles. bookContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        {/* <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {price}
          {' '}
          <Text style={styles.subtitle}>
            {tagline}
          </Text>
        </Text> */}
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={name}
          onPress={() => {
            console.warn("Book details was showing");
          }}
        />

        <StyledButton
          type="secondary"
          content={price}
          onPress={() => {
            console.warn("Price was showing");
          }}
        />
      </View>

    </View>
  );
};

export default BookItem;
