
import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, Text, View, FlatList, Modal, Pressable } from 'react-native';


export default function App() {

  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText= (text) => {
    setItemText(text)
  }

  const addItemToState = () =>{
    setItems(oldArry =>[...oldArry, {id: Date.now(), value: itemText}])
    setItemText('')
}
const openModal = (item) => {
  setSelectedItem(item);
  setModalVisible(true);
};

const onCancelModal = () => {
  setModalVisible(!modalVisible);
};

const onDeleteModal = (id) => {
  setModalVisible(!modalVisible);
  setItems((oldArry) => oldArry.filter((item) => item.id !== id));
  setSelectedItem(null);
};
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer} >
     <TextInput
      placeholder= "Inserte Item"
       style={styles.text}
        onChangeText={onChangeText} 
        value={itemText}
     ></TextInput>
     <Button  title='Agregar'
     onPress={addItemToState}
     />
     </View>

     <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={styles.ItemContainer}
            onPress={() => {
              openModal(itemData.item);
            }}
          >
            <Text style={styles.Item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

<Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Item</Text>
            <Text style={styles.modalText}>
              ¿Quiere eliminar el item{" "}
              <Text >{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },
  text:{
    fontSize: 30,
    width: 200,
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,  
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
   
  },
  ItemContainer:{
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#ADD8E6',
    borderRadius: 20,
    width: '100%',
  },
 Item:{
  fontSize: 30,
  width: 200,
 },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor: "#c2f5f9",
  },
  buttonDelete: {
    backgroundColor: "#DC143C",
  },
  textStyle:{
    fontWeight:"bold"
  }
});
