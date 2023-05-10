import React, { useState } from "react";

import ModalAddQuestion from "./ModalAddQuestion";
import { Modal } from "formik";

const AddModal = (props) => {
// alert(props.modalVisible)
  return (
    <div >
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   props.setModalVisible(!props.modalVisible);
        // }}
      >
        <div >
          <div >
            <ModalAddQuestion
             setModalVisible={props.setModalVisible}
             modalVisible={props.modalVisible}
             item={props.item}
            />
            {/* <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </div>
        </div>
      </Modal>
      
    </div>
  );
};



export default AddModal;