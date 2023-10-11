import React, {useRef, useState} from 'react';
import {View, Text, Image, Dimensions, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {styles} from './styles';
import images from '../../../Assets/Images';

const WelcomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const _carousel = useRef();

  const navigation = useNavigation();

  const loginButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };
  const SignupButtonPressed = () => {
    navigation.navigate('SignupScreen');
  };

  const width = Dimensions.get('window').width;
  const data = [
    {
      id: 1,
      title: 'Welcome to Smarter',
      image: images.Settings,
      description: `Get ready to experience a smarter way of creativiy! Streamline communication, share files, and achieve more together."`,
    },
    {
      id: 2,
      title: 'Education, Learning, Career',
      image: images.Welcome,
      description:
        'Invest in your future with Smarter. Access a wealth of resources for education, skill-building, and career advancement. ',
    },
    {
      id: 3,
      title: 'Creativity Nexus',
      image: images.TeamWork,
      description:
        'Unleash your creativity and bring your ideas to life with Smarter. Explore a world of inspiration and turn your thoughts into reality.',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.images} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={{margin: '6%'}}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <CustomButton text="Get Started" onPress={SignupButtonPressed}  />
        <View style={{flexDirection: 'row', margin: '2%'}}>
            <Text style={styles.text}>Already have a Account?</Text>
            <CustomButton text="Login" type="Tertiary" />
          </View>
      </View>
    );
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Carousel
          loop={true}
          data={data}
          renderItem={_renderItem}
          width={width}
          pagingEnabled
          paginationStyle={{activeColor: 'red', inactiveColor: 'white'}}
          onSnapToItem={index => setActiveIndex(index)}
        />
        {/* <View>
          <Pagination activeDotIndex={activeIndex} dotsLength={3} carouselRef={_carousel} dotStyle={{
            width: 15,
            backgroundColor: 'orange',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            backgroundColor: 'gray',
          }}/>
        </View> */}
      </View>
    </GradientBackground>
  );
};

export default WelcomeScreen;
