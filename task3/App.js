import React from "react"
import {View, Text, SafeAreaView} from 'react-native'
import ScaledSheet from 'react-native-scaled-sheet'
import store from './src/store/root.reducer'
import {Provider} from 'react-redux'
import Comments from './src/components/comments/'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Comments />
      </SafeAreaView>
    </Provider>
  )
};

export default App;


const styles = ScaledSheet.create({
     container: {
       flex: 1,
     }
})
