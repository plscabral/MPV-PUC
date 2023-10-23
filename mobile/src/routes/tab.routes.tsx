import { Image, Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import { Rss, NotePencil } from 'phosphor-react-native';

// screens
import { Feed } from '../screens/Feed';
import { Terms } from '../screens/Terms';
import { Details } from '../screens/Details';

// colorss
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: colors.blue950,
        paddingTop: Platform.OS === "android" ? 18 : 0,
        borderTopWidth: 0
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0
      },
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: "bold"
      },
      tabBarActiveTintColor: colors.blue500,
      tabBarInactiveTintColor: colors.gray300,
      headerShown: false
    }}>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => <Rss size={28} color={focused ? colors.blue500 : colors.gray300} />,
          tabBarLabel: "Feed"
        }}
      />

      <Tab.Screen
        name="terms"
        component={Terms}
        options={{
          tabBarIcon: ({ focused }) => <NotePencil size={28} color={focused ? colors.blue500 : colors.gray300} />,
          tabBarLabel: "Termos"
        }}
      />

      <Tab.Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Tab.Navigator>
  )
}
