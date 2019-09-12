// from::: App.js

//import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  };
  
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  

  //from ANDROID MANIFEST.XML
  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

  //Main Activity java:::Avant-Retouche:::
  package com.sipamap;

  import com.facebook.react.ReactActivity;
  
  public class MainActivity extends ReactActivity {
  
      /**
       * Returns the name of the main component registered from JavaScript.
       * This is used to schedule rendering of the component.
       */
      @Override
      protected String getMainComponentName() {
          return "SipaMap";
      }
  }
  

// J'ai rajouté :::le doc #Activity_main.xml dans le fichier #layout en #res ; avec le code suivant:
xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:mapbox="http://schemas.android.com/apk/res-auto"
tools:context=".MainActivity">

<com.mapbox.mapboxsdk.maps.MapView
android:id="@+id/mapView"
android:layout_width="match_parent"
android:layout_height="match_parent"
mapbox:mapbox_cameraTargetLat="40.73581"