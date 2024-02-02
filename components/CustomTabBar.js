// components/CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', paddingBottom: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 5 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}
          >
            {options.tabBarIcon && (
              <FontAwesomeIcon name={options.tabBarIcon} size={24} color={isFocused ? '#c4302b' : '#888'} />
            )}
            <Text style={{ color: isFocused ? '#c4302b' : '#888', fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
