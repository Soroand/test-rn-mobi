import React, {FC, useState} from "react"
import {View, Text, TouchableOpacity,TextInput} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import {mainSubcomment, replySubcomment} from '../../store/comments/comments.reducer'
import { useDispatch } from "react-redux"

interface Props {
    setReply: (arg: boolean) => void,
    item: {
        id: number,
        comment: string,
    },
    sub?: boolean,
}

const Reply = (props: Props) => {
    const [message, setMessage] = useState<string>('')
    const dispatch = useDispatch();
    const action = props.sub ? replySubcomment : mainSubcomment
    const re = props.sub ? props.item.comment : null
    const addMainSubcomment = () => {
        const id = Math.floor(Date.now() + Math.random() * 1000000)
        return (dispatch(action({parentId: props.item.id, id, comment: message, re})), setMessage(''), props.setReply(false))
    }
  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
        placeholder="Reply comment"
        value={message}
        onChangeText={(item) => setMessage(item)}
        />
      <View style={styles.btnGroup}>
          <TouchableOpacity onPress={() => addMainSubcomment()}>
            <Text style={styles.submitBtn}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setReply(false)}>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};

export default Reply;


const styles = ScaledSheet.create({
     container: {
         marginTop:5,
         width: '100%',
     },
     input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        padding:15
     },
     btnGroup:{
         display: 'flex',
         flexDirection: 'row',
        width: '90%',
     },
     submitBtn:{
             marginTop: 8,
       textTransform: 'uppercase',
       fontSize: 10,
       fontWeight: 'bold',
        marginRight: 15,
        color: 'rgba(37, 142, 166,1)'
     },
     cancelBtn:{
         marginTop: 8,
       textTransform: 'uppercase',
       fontSize: 10,
       fontWeight: 'bold',
        marginRight: 15,
        color: 'rgba(216, 17, 89,1)'
     }
})
