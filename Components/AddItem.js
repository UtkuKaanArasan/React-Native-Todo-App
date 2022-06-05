// React and React-Native components
import React, { useRef } from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Keyboard
} from "react-native";
import { useState } from "react";
// Dependendcies
import Icon from "react-native-vector-icons/dist/FontAwesome";

const AddItem = ({addItem}) => {

    const [userInput, setUserInput] = useState('')

    const inputRef = useRef()

    function onChange(textValue) {
        setUserInput(textValue)
    }

    function submitHandler() {
        addItem(userInput)
        Keyboard.dismiss()
        setUserInput('')
    }

    return (
        <View>
            <TextInput 
                ref={inputRef}
                style={styles.input} 
                placeholder='Add item...'
                onChangeText={onChange}
                value={userInput}
            />
            <TouchableOpacity style={styles.btn}>
                <Text onPress={submitHandler} style={styles.btnText}>
                    <Icon name='plus' size={20} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#5fad56',
        padding: 9,
        margin:5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign:'center',
    },
})

export default AddItem;