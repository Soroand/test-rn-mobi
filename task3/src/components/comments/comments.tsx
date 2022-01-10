import React, {FC, useState} from "react"
import {useSelector} from 'react-redux'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import SubComments from './subcomments'
import Reply from './reply'
import { boolean } from "yargs"

const MainComments: FC = () => {
  const comments = useSelector(state => state.comments.comments)
  const [reply, setReply] = useState<boolean>(false)
  const [replyId, setReplyId] = useState<number | null>(null)

  return (
      <FlatList
        data={comments}
        renderItem={({item}) => {
          return (
          <>
          <View key={item.id} style={styles.comment}>
            <Text style={{fontSize:16}}>{item.comment}</Text>
            <TouchableOpacity onPress={() => {setReply(!reply), setReplyId(item.id)}}>
              {reply && (item.id === replyId) ? <Reply item={item} setReply={setReply}/> : <Text style={styles.reply}>Reply</Text>}
            </TouchableOpacity>
            <SubComments subcomments={item.subcomments}/>
          </View>
        </>
        )
        }}
        keyExtractor={(item) => item.id}
      >

      </FlatList>

  )
};

export default MainComments;


const styles = ScaledSheet.create({
     container: {
       height:'100%'
     },
     comment: {
       borderWidth: 1,
       borderColor: 'rgba(0, 0, 0, 0.3)',
       padding: 10,
       marginBottom: 10,
     },
     reply:{
       marginTop: 5,
       textTransform: 'uppercase',
       fontSize: 10,
       fontWeight: 'bold',
       color: 'rgba(84, 159, 147,1)'
     }
    
})
