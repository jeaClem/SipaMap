package com.sipamap;

import com.facebook.react.ReactActivity;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import com.mapbox.mapboxsdk.Mapbox;
import com.mapbox.mapboxsdk.maps.MapView;
import com.mapbox.mapboxsdk.maps.Style;

public class MainActivity extends ReactActivity {
  @Override
      super.onCreate(savedInstanceState);
    Mapbox.getInstance(this, "pk.eyJ1IjoiamVhbmV1d2lpIiwiYSI6ImNrMGZiZ2UzNTA3ZHIzbHJ4dGFuOTVrZ20ifQ.cfuWhG9KqbOAPgAm77BcEg");
    setContentView(R.layout.activity_main);
    mapView = findViewById(R.id.mapView);
    mapView.onCreate(savedInstanceState);
    mapView.getMapAsync(new OnMapReadyCallback() {
      @Override
      public void onMapReady(@NonNull MapboxMap mapboxMap) {
        mapboxMap.setStyle(Style.MAPBOX_STREETS, new Style.OnStyleLoaded() {
          @Override
          public void onStyleLoaded(@NonNull Style style) {

            // Map is set up and the style has loaded. Now you can add data or make other map adjustments


          }
        });
      }
    });
  }
  
  @Override
  public void onStart() {
    super.onStart();
    mapView.onStart();
  }

  @Override
  public void onResume() {
    super.onResume();
    mapView.onResume();
  }

  @Override
  public void onPause() {
    super.onPause();
    mapView.onPause();
  }
  
  @Override
  public void onStop() {
    super.onStop();
    mapView.onStop();
  }
  
  @Override
  public void onLowMemory() {
    super.onLowMemory();
    mapView.onLowMemory();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    mapView.onDestroy();
  }

  @Override
  protected void onSaveInstanceState(Bundle outState) {

     
     
     
      /**
       * Returns the name of the main component registered from JavaScript.
       * This is used to schedule rendering of the component.
      
      @Override
      protected String getMainComponentName() {
          return "SipaMap";*/
      }
  } 

