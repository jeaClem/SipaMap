/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { StyleSheet,View,Text,} from 'react-native';
import Mapbox from './@react-native-mapbox-gl/maps';
import Button from './android/app/components/Button';

Mapbox.setAccessToken(
	'pk.eyJ1IjoicGFjdGVzcyIsImEiOiJjazBjNmsydmMweXJlM21wZTh6NGl4cml3In0.QtCHsu5sWL6tKXP6so4bbA'
);
//import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
            <View style={styles.container}>
              <Text></Text>
            </View>
          );
        }
    </Fragment>
  )
}

export default App;

