import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlayerScreen from './screens/Player'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      {[1,2,3,4,5].map(item => {
        return (
          <TouchableOpacity 
            key={item}
            onPress={() => {
              navigation.navigate('PlayerScreen');
            }}
          >
            <Text style={{ paddingTop: 5 }}>
              Podcast: {item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

function DiscoveryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Discovery!</Text>
    </View>
  );
}

// ===================================================================================================

const PodcastsStack = createStackNavigator();
function PodcastsTabStack() {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
      <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </PodcastsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={PodcastsTabStack} />
      <Tab.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
