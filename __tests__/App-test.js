/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
/**  MOn CODE RAJOUTE/ compile (project(':mapbox-react-native-mapbox-gl')) {
  compile ('com.squareup.okhttp3:okhttp:3.6.0') {
      force = true
  }
} */