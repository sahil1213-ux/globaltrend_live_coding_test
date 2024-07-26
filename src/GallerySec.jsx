import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ConstantImageInfo} from './constants';

const GallerySec = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {ConstantImageInfo.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => showModal(item)}>
          <Text>{item.image}</Text>
        </TouchableOpacity>
      ))}

      {selectedItem && (
        <Modal visible={modalVisible} transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              margin: 50,
              padding: 20,
            }}>
            <Text
              style={styles.cancelStyle}
              onPress={() => setModalVisible(false)}>
              X
            </Text>
            <Text>{selectedItem.image}</Text>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    width: '45%',
    height: 100,
    margin: 5,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelStyle: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GallerySec;
