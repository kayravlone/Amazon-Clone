import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    
  },
  row:{
    flexDirection:'row',
  },
  image: {
    flex: 3,
    height: 150,
    resizeMode: 'contain',
    borderRadius:10
  },
  title: {
    fontSize: 18,
  },
  ratingsContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rigtContainer: {
    padding: 10,
    width: '100%',
    flex: 4,
  },
  star:{
    margin:2
  },
  oldPrice:{
    fontSize:12,
    fontWeight:'normal',
    textDecorationLine:'line-through'
  },
  quantityContainer:{
    margin:5
  }
});
