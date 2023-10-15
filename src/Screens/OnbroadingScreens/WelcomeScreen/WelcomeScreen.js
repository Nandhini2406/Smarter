import React, {useRef, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
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

  const nextSlide = () => {
    console.log("Next Button Pressed");
    console.log(_carousel.current);
    const newIndex = activeIndex + 1;
    if (newIndex < data.length) {
      _carousel.current.next(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const skipToLastSlide = () => {
    console.log("skip Button Pressed");
    // console.log(_carousel.current.next());
    _carousel.current.scrollTo(data.length - 1);
    setActiveIndex(data.length - 1);
  };

  const _renderItem = ({item, index}) => {
    const isLastSlide = index === data.length - 1;

    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.images} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={{margin: '6%'}}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        {isLastSlide ? (
          <>
            <CustomButton text="Get Started" onPress={SignupButtonPressed} />
            <View style={{flexDirection: 'row', margin: '2%'}}>
              <Text style={styles.text}>Already have a Account?</Text>
              <CustomButton text="Login" type="Tertiary" onPress={loginButtonPressed}/>
            </View>
          </>
        ) : (
          <>
            <CustomButton text="Next" onPress={nextSlide} />
            <CustomButton
              text="Skip"
              type="Tertiary"
              onPress={skipToLastSlide}
            />
          </>
        )}
      </View>
    );
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Carousel
        ref={_carousel}
        loop={false}
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
