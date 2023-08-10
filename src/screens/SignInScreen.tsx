import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  FormControl,
  Input,
  VStack,
  Button,
  Heading,
  Box,
  Center,
  HStack,
  Link,
  Text,
} from "native-base";

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("SplashScreen");
    console.log("Button was clicked!");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
    console.log("Button was clicked!");
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input variant="underlined" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input variant="underlined" type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forgot Password?
            </Link>
          </FormControl>
          <Button mt="2" onPress={handleSignIn}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm">I'm a new user. </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
              onPress={handleSignUp}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignInScreen;
