import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground'
import { fetchProductsUsingFetch } from '../../../Api/api'

const ProductsScreen = () => {

useEffect(() => {}, []);

  return (
    <GradientBackground>
    <View>
      <Text>ProductsScreen</Text>
    </View>
    </GradientBackground>
  )
}

export default ProductsScreen