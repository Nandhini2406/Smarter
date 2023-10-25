import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import {styles} from './styles';
const ProductDetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <GradientBackground>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>Category: {item.category}</Text>
          <Text style={styles.description}>
            Description: {item.description}
          </Text>
          <Text style={styles.prize}>Price: ${item.price}</Text>
          <Text style={styles.rating}>
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </Text>
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default ProductDetailScreen;
