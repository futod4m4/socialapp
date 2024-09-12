import {StyleSheet, Text, View} from 'react-native'
import { Stack } from "expo-router";
import React from 'react'
import { useFonts } from 'expo-font'

const RootLayout = () => {



    return (
        <Stack>
            <Stack.Screen name={"index"} options={{headerShown : false}}></Stack.Screen>
            <Stack.Screen name={"(auth)"} options={{headerShown : false}}></Stack.Screen>
            <Stack.Screen name={"(tabs)"} options={{headerShown : false}}></Stack.Screen>
        </Stack>
    )
}
export default RootLayout
const styles = StyleSheet.create({})
