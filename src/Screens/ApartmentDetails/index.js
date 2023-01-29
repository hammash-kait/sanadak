import React from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import {SKEmptyData} from '../../Components';

const Index = props => {
  let mediaItems = props.route.params.item.media;
  let renderItem = item => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item?.imageThumbUrl}} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={mediaItems}
        horizontal={false}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={item => renderItem(item.item)}
        scrollEventThrottle={50}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<SKEmptyData />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
  },

  /******** card **************/
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

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 5,
    height: 200,
    width: '100%',
  },
});

export default Index;
