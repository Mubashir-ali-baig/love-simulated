import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const getTabIcon = (routeName: string, focused: boolean) => {
    const iconSize = 24;
    const iconStyle = {
      width: iconSize,
      height: iconSize,
      tintColor: focused ? "#BA435F" : "#8F5260",
    };

    const iconSources: { [key: string]: any } = {
      Dashboard: require("../../public/home_icon.png"),
      Contenders: require("../../public/contenders-icon.png"),
      Live: require("../../public/live-icon.png"),
      Vote: require("../../public/vote-icon.png"),
      Profile: require("../../public/profile-icon.png"),
    };

    const iconSource = iconSources[routeName];

    if (iconSource) {
      return (
        <Image source={iconSource} style={iconStyle} contentFit="contain" />
      );
    }

    // Fallback if icon not found
    return (
      <Text style={{ fontSize: 24, color: focused ? "#BA435F" : "#8F5260" }}>
        •
      </Text>
    );
  };

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = String(
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name
        );

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}
          >
            {getTabIcon(route.name, isFocused)}
            <Text
              style={[
                styles.tabLabel,
                { color: isFocused ? "#BA435F" : "#8F5260" },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#F0D1D8",
    borderTopWidth: 1,
    borderTopColor: "#E8C5CE",
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
});

export default CustomTabBar;
