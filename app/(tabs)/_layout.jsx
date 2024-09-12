import {View, Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect} from "expo-router";
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className = "items-center justify-center gap-2">
            <Image
            source = {icon}
            resizeMode = "contain"
            tintColor = {color}
            className={"w-6 h-6"}
            />
        </View>
    )
}


const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor : "#FCBB6B",
            tabBarStyle : {
                borderTopWidth : 1,
                height : 85
            }
        }}>
            <Tabs.Screen
                name = "homepage"
                options={{
                    title: 'Home',
                    headerShown : false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                        icon = {icons.home}
                        color = {color}
                        name = "Home"
                        focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "search"
                options={{
                    title: 'Search',
                    headerShown : false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.searchLogo}
                            color = {color}
                            name = "Home"
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "messages"
                options={{
                    title: 'Messages',
                    headerShown : false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.messages}
                            color = {color}
                            name = "Home"
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "work"
                options={{
                    title: 'Work',
                    headerShown : false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.workLogo}
                            color = {color}
                            name = "Home"
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "profile"
                options={{
                    title: 'Profile',
                    headerShown : false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.profileLogo}
                            color = {color}
                            name = "Home"
                            focused = {focused}
                        />
                    )
                }}
            />
        </Tabs>
    )
}
export default TabsLayout
