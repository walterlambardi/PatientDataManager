# Patients Manager App

### How to run the application

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Dependencies

### SplashScreen
- react-native-bootsplash

### Navigation
- react-navigation/native
- react-navigation/native-stack
- react-native-safe-area-context
- react-native-screens

### Error Boundary
- react-error-boundary

### Icons
- react-native-vector-icons

### UI Library
- react-native-paper

### Asyncstorage
- @react-native-async-storage/async-storage

### State manager
- react-redux
- redux-persist
- @reduxjs/toolkit

### Debug
- react-native-flipper
- redux-flipper

### Validate forms
- react-hook-form
- yup

### Date formats
- date-fns

### Environments
- react-native-config

### Flatlist Rendering
- @shopify/flash-list