import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FormControl,
  Input,
  VStack,
  Button,
  Heading,
  Box,
  Center,
} from "native-base";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SignInScreen");
    console.log("Button was clicked!");
  };

  return (
    <View style={styles.container}>
      <Center>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input variant="underlined" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input variant="underlined" type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input variant="underlined" type="password" />
            </FormControl>
            <Button mt="2" onPress={handleSignUp}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterScreen;
