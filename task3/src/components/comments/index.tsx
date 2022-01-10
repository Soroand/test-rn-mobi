import React, {FC} from "react"
import {View, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import MainComments from './comments'
import AddComments from './addComments'

const Comments: FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
            <Text style={styles.h1}>Comments</Text>
            <AddComments />
            <MainComments />
    </KeyboardAvoidingView>
  )
};

export default Comments;


const styles = ScaledSheet.create({
     mainContainer: {
        flex: 1,

     },
      h1: {
       textTransform: "uppercase",
       fontSize: 21,
       fontWeight: "bold",
       textAlign: "center",
       marginTop: 10,
     }
})
