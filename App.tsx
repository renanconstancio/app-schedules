import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// import { Text } from "react-native";
// import { HScreen } from "./src/components/h-screen";

// export default function App() {
//   return (
//     <HScreen>
//       <Text>Helo</Text>
//     </HScreen>
//   );
// }

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Home } from "./src/screens/home";
// import { About } from "./src/screens/about";

// const Tab = createBottomTabNavigator();

// function Tabs() {
//   return (
//     <Tab.Navigator initialRouteName="Home">
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="About" component={About} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }
