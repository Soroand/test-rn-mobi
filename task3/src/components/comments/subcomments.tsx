import React, {FC, useState} from "react"
import {View, Text, TouchableOpacity} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import Reply from './reply'

interface Props {
    subcomments:[]
}
interface Subcomments {
    id: number,
    re: string,
    comment: string
}

const SubComments = (props: Props) => {
    const [reply, setReply] = useState<boolean>(false)
  const [replyId, setReplyId] = useState<number | null>(null)

  return (
    <View style={styles.container}>
      {props.subcomments.map((item: Subcomments) => {
            return (
            <View key={item.id} style={styles.subcomment}>
              <Text style={styles.comment}>{item.comment}</Text>
              {item.re && <Text style={styles.re}>{`RE: ${item.re}`}</Text>}
              <TouchableOpacity onPress={() => {setReply(!reply), setReplyId(item.id)}}activeOpacity={0.3}>
              {reply && (item.id === replyId) ? <Reply sub={true} item={item} setReply={setReply}/> : <Text style={styles.reply}>Reply</Text>}
            </TouchableOpacity>
            </View>
            )
          })}
    </View>
  )
};

export default SubComments;


const styles = ScaledSheet.create({
     container: {
         marginLeft: 15,
         padding: 10,
     },
     subcomment: {
        marginTop: 10
     },
     comment: {
         fontSize: 16,
     },
     re: {
        fontSize: 10,
        opacity: 0.5
     },
      reply:{
       marginTop: 8,
       textTransform: 'uppercase',
       fontSize: 10,
       fontWeight: 'bold',
       color: 'rgba(84, 159, 147,1)'
     }
})
