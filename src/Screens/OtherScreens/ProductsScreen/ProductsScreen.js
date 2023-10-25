import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import {styles} from './styles';
import {fetchData} from '../../../Redux/actions/productsAction';
import {useNavigation} from '@react-navigation/native';

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  console.log('data', products);

  useEffect(() => {
    console.log('Dispatching fetchData');
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({item}) => {
    // console.log('Item:', item);
    return (
      <TouchableOpacity
        style={{elevation: 1}}
        onPress={() => {
          navigation.navigate('ProductDetailScreen', {item});
        }}>
        <View style={styles.container}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.prize}>${item.price}</Text>
            <Text style={styles.rate}>{item.rating.rate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => {
    // console.log('Key for item:', item.id);
    return item.id;
  };

  return (
    <GradientBackground>
      <FlatList
        data={products}
        renderItem={renderItem}
        style={styles.flatlist}
        keyExtractor={keyExtractor}
      />
    </GradientBackground>
  );
};

export default ProductsScreen;
