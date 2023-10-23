import { createStackNavigator } from '@react-navigation/stack';

// screens
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { TabRoutes } from './tab.routes';

// hooks
import { useAuth } from "../hooks/useAuth";

const Stack = createStackNavigator();

export function StackRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      )}
    </Stack.Navigator>
  )
}
