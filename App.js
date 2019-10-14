import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {PaperAppBar} from './components/AppBar';

const App = () => {
  return (
    <>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PaperAppBar />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default App;
