import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Switch,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import banner from './src/assets/banner_image.png';
import cupon1 from './src/assets/cupon1.png';
import cupon2 from './src/assets/cupon2.png';
import ApplePay from './src/assets/applePay.png';
import Card from './src/assets/card.png';
import Visa from './src/assets/visa.jpg';
import Mastercard from './src/assets/mastercard.jpg';

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const isDarkMode = useColorScheme() === 'light';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#ffffff' : '#0C0404',
  // };

  return (
    <SafeAreaView>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"

        // style={backgroundStyle}
      >
        <View style={styles.container}>
          <ImageBackground
            source={banner}
            resizeMode="cover"
            style={styles.header_image}>
            <View style={styles.icons}>
              <Icon name="phone" size={25} color="white" style={styles.image} />
              <Icon
                name="arrow-up-from-bracket"
                size={25}
                color="white"
                style={styles.image}
              />
              <Icon
                name="gratipay"
                size={25}
                color="#ff811a"
                style={styles.image}
              />
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.headerText}>Ground Tacos Bar</Text>

        <View style={styles.cupons}>
          <TouchableOpacity style={styles.cupon}>
            <View style={styles.cupon_desc}>
              <Image source={cupon1} />
              <View>
                <Text style={styles.cupon_text}>20% Cashback</Text>
                <Text style={styles.cupon_subtext}>after payment</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Icon name="square-plus" size={20} />
          <TouchableOpacity style={styles.cupon}>
            <View style={styles.cupon_desc}>
              <Image source={cupon2} />
              <View>
                <Text style={styles.cupon_text}>Apply offers</Text>
                <TouchableOpacity>
                  <Text style={styles.link}>View All</Text>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      width: 40,
                      alignSelf: 'flex-end',
                      backgroundColor: '#FF5F00',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.billAmount}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',
                  marginLeft: 15,
                  marginRight: 15,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                ENTER BILL AMOUNT
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 50,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 30,
                marginRight: 15,
                fontWeight: '400',
              }}>
              AED
            </Text>
            <Text style={{color: 'black', fontSize: 60}}>45</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              width: 85,
              alignSelf: 'center',
              marginLeft: 10,
              backgroundColor: '#DDDDDD',
            }}
          />
          <Text
            style={{
              color: '#5C5C5C',
              fontSize: 15,
              marginTop: 15,
              marginBottom: 10,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Proceed to cart for all offers
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: 15, marginLeft: 20, marginRight: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#AFAFAF'}} />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#AFAFAF',
                  marginLeft: 15,
                  marginRight: 15,
                  fontSize: 15,
                }}>
                BILL SUMMARY
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#AFAFAF'}} />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
            }}>
            <View style={styles.summary}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                Bill Amount
              </Text>
              <Text style={{color: '#000', fontWeight: '500'}}>AED 45</Text>
            </View>
            <View style={styles.summary}>
              <Text style={{color: '#457AE4'}}>Offer Discount</Text>
              <Text style={{color: '#457AE4'}}>- AED 5</Text>
            </View>
            <View style={styles.rebuxx}>
              <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Switch
                    trackColor={{false: '#15CC3B', true: '#767577'}}
                    thumbColor={isEnabled ? '#f6f6f6' : '#f6f6f6'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                      Use rebuxx
                    </Text>
                    <Text
                      style={{fontSize: 10, color: '#000', fontWeight: '300'}}>
                      Available rebuxx balance is 20.00
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 14,
                }}>
                <Image style={{marginRight: 5}} source={cupon1} />
                <Text style={{color: '#000', fontWeight: '500'}}>AED 20</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#AFAFAF',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        />

        <View style={styles.finalAmount}>
          <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
            To be Paid
          </Text>
          <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
            AED 20
          </Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: '#457AE4',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Earn 4 rebuxx into your wallet!
        </Text>
        <View style={{marginTop: 45, marginLeft: 20, marginRight: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#AFAFAF'}} />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#AFAFAF',
                  marginLeft: 15,
                  marginRight: 15,
                  fontSize: 15,
                }}>
                Payments methods
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#AFAFAF'}} />
          </View>
          <View style={styles.payment}>
            <View>
              <TouchableOpacity style={styles.paymentBox}>
                {/* <Icon
                  name="credit-card"
                  size={40}
                  color="black"
                  style={styles.paymentIcon}
                /> */}
                <Image style={styles.paymentIcon} source={Card} />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#000000',
                  fontWeight: 'bold',
                }}>
                Card
              </Text>
            </View>
            <View style={{width: 1, height: 75, backgroundColor: '#CDCDCD'}} />
            <View>
              <TouchableOpacity style={styles.paymentBox2}>
                <Image style={styles.paymentIcon2} source={ApplePay} />
              </TouchableOpacity>
              <Text style={{alignSelf: 'center', color: '#BCBCBC'}}>
                Apple Pay
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <TouchableOpacity style={styles.card}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                style={{marginLeft: 20, width: 40, height: 30}}
                source={Visa}
              />
              <Image
                style={{marginLeft: 8, width: 40, height: 30, marginRight: 20}}
                source={Mastercard}
              />
            </View>
            <Text
              style={{
                alignSelf: 'center',
                color: '#000',
                marginTop: 3,
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 15,
              }}>
              Link your card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>Pay now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
  },
  header_image: {
    flex: 1,
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  image: {
    marginLeft: 20,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 35,
    fontWeight: '900',
    marginTop: 5,
    marginLeft: 10,
    color: '#000',
  },
  cupons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cupon: {
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 5,
    width: 161,
    backgroundColor: '#F8F8F8',
    marginRight: 10,
    marginLeft: 10,
    elevation: 1,
  },

  cupon_desc: {
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cupon_text: {
    color: '#000',
    marginLeft: 10,
    fontWeight: '600',
  },
  cupon_subtext: {
    color: '#000',
    marginLeft: 10,
    fontWeight: '300',
    fontSize: 10,
  },
  link: {
    color: '#FF5F00',
    alignSelf: 'flex-end',
    marginLeft: 80,
    fontSize: 12,
  },
  billAmount: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    width: '85%',
    marginTop: 10,
    marginLeft: 30,
    padding: 10,
    elevation: 1,
  },
  summary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginRight: 15,
  },
  rebuxx: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  finalAmount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 35,
    marginLeft: 25,
  },
  payment: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  paymentBox: {
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#F6F6F6',
    borderWidth: 1.5,
    borderColor: '#15CC3B',
    marginRight: 15,
    marginLeft: 10,
    width: 152,
    height: 75,
  },
  paymentBox2: {
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#F6F6F6',
    borderWidth: 1.5,
    borderColor: '#CDCDCD',
    marginRight: 10,
    marginLeft: 15,
    width: 152,
    height: 75,
  },
  paymentIcon: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 45,
  },
  paymentIcon2: {
    marginTop: 15,
    // marginBottom: 20,
    // marginLeft: 35,
    width: 95,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // resizeMode: 'contain',
  },
  card: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#DBE2EA',
    paddingTop: 10,
    backgroundColor: '#ffffff',
    width: 150,
    marginLeft: 20,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#B0B0B0',
    width: 200,
    marginLeft: -25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});
