import React, {FC, useState} from "react"
import { useDispatch } from "react-redux"
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import {addComment} from '../../store/comments/comments.reducer'

const AddComments: FC = () => {
    const [message, setMessage] = useState<string>('')
    const dispatch = useDispatch();
    const addNewComment = (msg: string) => {
        const id = Math.floor(Date.now() + Math.random() * 1000000)
        return (dispatch(addComment({id, comment: msg, subcomments: []})), setMessage(''))
    }


  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Type your comment"
        value={message}
        onChangeText={(text) => setMessage(text)}
        />
      <TouchableOpacity style={styles.button} onPress={() => addNewComment(message)}>
          <Text style={{color: 'white', textAlign: 'center'}}>Add new comment</Text>
      </TouchableOpacity>
    </View>
  )
};

export default AddComments;


const styles = ScaledSheet.create({
     container: {
         marginTop: 25,
         alignItems: 'center',
         width: '100%',
     },
     input: {
         padding: 25,
         width: '90%',
         height: 75,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)'
     },
     button: {
         width: '90%',
         marginVertical: 10,
         borderRadius: 5,
         padding: 15,
         backgroundColor: 'rgba(159, 175, 144,1)'
     }
})
