import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  bookContainer: {
    width: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },

  image: {
    width: '85%',
    height: '85%',
   
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;
