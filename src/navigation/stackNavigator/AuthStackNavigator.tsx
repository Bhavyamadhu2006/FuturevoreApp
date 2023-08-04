import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../../screens/FirstScreen";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../../screens/SplashScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
