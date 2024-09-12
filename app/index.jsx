import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View} from 'react-native';
import {Redirect, router, Router} from "expo-router";
import { icons } from "../constants/index"
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import {color} from "nativewind/dist/tailwind/native/color";

export default function App() {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className='w-full justify-center items-center h-full px-4 min-h-[85vh]'>

                <CustomButton title = "Continue with email"
                              handlePress = {() => router.push('/sign-in')}
                              containerStyles = "w-full mt-7"
                              textStyles="text-white"
                />

            </View>
            </ScrollView>

            <StatusBar backgroundColor={'#FFFFFF'} style={'light'}/>
        </SafeAreaView>
    );
}

