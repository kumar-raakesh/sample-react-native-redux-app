import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart, Path, Grid} from 'react-native-svg-charts';
// import  from 'react-native-vector-icons/MaterialIcons';

const ROW_HEIGHT = 80;
/**
 * Example component
 */

export default function Example(props) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    props.actions.example();
  }, []);

  const tabItem = ['Cryptoassets', 'Exanchages', 'Sectors'];
  const Items = [
    'USD',
    'SORT BY RANK',
    '%(24h)',
    'TOP 100',
    '%(24h)',
    'TOP 100',
    'SORT BY RANK',
    '%(24h)',
  ];
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <View styles={styles.container}>
      <View style={styles.navbar}>
        {tabItem.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setActiveTab(index);
            }}>
            <Text
              style={[
                styles.navbarText,
                {opacity: activeTab == index ? 1 : 0.5},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.star}>
            <Icon size={22} name={'star'} color={'#000'} />
          </View>
          {Items.map((item, index) => (
            <View style={styles.horizontalList} key={index}>
              <Text style={{color: '#000'}}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 4}}>
        <View style={styles.listContainer}>
          <View style={styles.coinType}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>
          <View style={styles.company}>
            <Text style={styles.primaryText}>Bitcoin</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.companyDesc}>
                <Text style={styles.secondarySmall}>1</Text>
              </View>
              <Text style={styles.secondarySmall}>BTC</Text>
              <Icon size={18} name={'caret-down'} color={'red'} />
              <Text style={styles.secondarySmall}>9.46%</Text>
            </View>
          </View>
          <View style={styles.graphSection}>
            <View style={{width: '90%'}}>
              <LineChart
                style={{height: 80}}
                data={data}
                svg={{stroke: 'rgb(77, 255, 136)'}}
                contentInset={{top: 10, bottom: 10}}></LineChart>
            </View>
          </View>
          <View style={styles.priceSection}>
            <View>
              <Text style={styles.primaryBold}>Bitcoin</Text>
              <Text style={styles.secondaryText}>mCap $1.01r</Text>
            </View>
          </View>

          <View style={styles.starSection}>
            <Icon size={13} name={'star'} color={'red'} />
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.coinType}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>
          <View style={styles.company}>
            <Text style={styles.primaryText}>Bitcoin</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.companyDesc}>
                <Text style={styles.secondarySmall}>1</Text>
              </View>
              <Text style={styles.secondarySmall}>BTC</Text>
              <Text> </Text>
              <Icon size={18} name={'caret-up'} color={'green'} />
              <Text style={styles.secondarySmall}>9.46%</Text>
            </View>
          </View>
          <View style={styles.graphSection}>
            <View style={{width: '90%'}}>
              <LineChart
                style={{height: 80}}
                data={data}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 10, bottom: 10}}></LineChart>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: '28%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.primaryBold}>Bitcoin</Text>
              <Text style={styles.secondaryText}>mCap $1.01r</Text>
            </View>
          </View>

          <View style={styles.starSection}>
            <Icon size={13} name={'star'} color={'red'} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 1000,
    width: '100%',
    backgroundColor: 'pink',
  },
  navbar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  listContainer: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    height: 140,
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  navbarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  horizontalList: {
    height: 30,
    paddingHorizontal: 12,
    // paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E0FFFF',
    marginLeft: 6,
  },
  star: {
    height: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#E0FFFF',
    marginLeft: 6,
  },
  company: {
    height: ROW_HEIGHT,
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  companyDesc: {
    height: 16,
    width: 24,
    backgroundColor: '#E0FFFF',
    borderRadius: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  primaryBold: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
  },
  secondaryText: {
    fontWeight: '200',
    fontSize: 14,
    color: '#000',
    opacity: 0.6,
  },
  secondarySmall: {
    fontWeight: '200',
    fontSize: 12,
    color: '#000',
    opacity: 0.6,
    marginLeft: 2,
  },

  graphSection: {
    height: ROW_HEIGHT,
    width: '24%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starSection: {
    height: ROW_HEIGHT,
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  coinTypes: {
    height: ROW_HEIGHT,
    width: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceSection: {
    height: 80,
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
