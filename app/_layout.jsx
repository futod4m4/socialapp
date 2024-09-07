import {StyleSheet, Text, View} from 'react-native'
import { Stack } from "expo-router";
import React from 'react'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{headerShown : false}}></Stack.Screen>
        </Stack>
    )
}
export default RootLayout
const styles = StyleSheet.create({})
