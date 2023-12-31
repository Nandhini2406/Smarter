package com.smarter;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
//import com.facebook.react.modules.core.PermissionAwareActivity;
//import com.facebook.react.modules.core.PermissionListener;
//import io.invertase.firebase.crashlytics.ReactNativeFirebaseCrashlyticsNativeHelper;
//import com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
// import org.devio.rn.splashscreen.SplashScreen;
// import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnativepagerview.PagerViewPackage;

import java.util.Arrays;
import java.util.List; 


public class MainActivity extends ReactActivity {

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        // SplashScreen.show(this);
        super.onCreate(null);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Smarter";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());  
  }

//@Override
 protected List<ReactPackage> getPackages() {
   return Arrays.<ReactPackage>asList(
       new MainReactPackage(),
      //  new SplashScreen(),
       new LinearGradientPackage(),
       new PagerViewPackage()

   );
 }
}
