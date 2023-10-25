import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import images from '../../Assets/Images';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={images.drawerImg} style={{height: 300, marginTop: -10}}>
      <TouchableOpacity>
        <Image source={images.appIcon} style={styles.userImg}></Image>
      </TouchableOpacity>
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    marginTop: 230,
    left: width / 2 - 130,
    // borderRadius: 45,
    // borderWidth: 4,
    // borderColor: 'white',
    // backgroundColor: 'white'
  },
  drawerListWrapper: {
    marginTop: 35,
  },
});
