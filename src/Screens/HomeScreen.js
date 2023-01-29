import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

import {
  useLazyGetApartmentsQuery,
} from '../Services/Apartments';
import {navigate} from '../Navigators/utils';
import {useTheme} from '../Hooks';
import {Brand, SKEmptyData} from '../Components';

const HomeScreen = () => {
  const {Gutters, Layout} = useTheme();

  const [
    getApartments,
    {
      data,
      isLoading: isGetLoading,
      isSuccess: isGetSuccess,
      isFetching: isGetFetching,
      isError: isGetError,
      error: getError,
    },
  ] = useLazyGetApartmentsQuery({refetchOnMountOrArgChange: true});

  useEffect(() => {
    getApartments();
  }, [getApartments]);

  let renderItem = item => {
    return (
      <View style={styles.card}>
        <Image style={styles.avatar} source={{uri: item?.sellerProfileUrl}} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>{item?.sellerName}</Text>
          <Text style={styles.phone}>phone : {item?.sellerPhonenumber}</Text>
          <TouchableOpacity
            style={styles.followButton}
            onPress={() => {
              navigate('ApartmentDetails', {item});
            }}>
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (isGetLoading) {
    return (
      <View style={[Layout.fill, Layout.colCenter]}>
        <ActivityIndicator
          color={'green'}
          size={'large'}
          style={[Gutters.largeVMargin]}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.brandView}>
        <Brand height={100} />
      </View>
      <FlatList
        style={styles.apartmrntList}
        data={[data]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => {
          return item?.data?.id;
        }}
        renderItem={item => renderItem(item?.item?.data)}
        ListHeaderComponent={() => (
          <Text style={styles.headerText}>List of Apartments</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footerText}>
            Thanks for your interested to our Apartments
          </Text>
        )}
        ListEmptyComponent={<SKEmptyData />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brandView: {
    alignContent: 'center',
    alignItems: 'center',
  },
  apartmrntList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 35,
    marginVertical: 10,
  },
  card: {
    shadowColor: '#00000021',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    height: 30,
    color: '#008080',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    height: 30,
    alignSelf: 'center',
    color: '#696969',
  },

  avatar: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderRadius: 68,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  followButton: {
    height: 35,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 100,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#696969',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#696969',
  },
});

export default HomeScreen;
