import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState({
        email : '',
        password : '',
    })

    const [isSubmiting, setIsSubmiting] = useState(false)

    const submit = () => {

    }

    return (
        <SafeAreaView className={"h-full"}>
            <ScrollView>
                <View className={"w-full justify-center min-h-[80vh] px-4 my-6"}>
                    <Text className="text-2xl text-black text-semibold mt-10 font-semibold">
                        Registration
                    </Text>

                    <FormField
                        title = "Email"
                        value = {form.email}
                        handleChangeText={(e) => setForm( { ...form, email: e})}
                        otherStyles ="mt-7"
                        keyboardType="email-address"
                        placeholder= "e.g. user@example.com"
                    />

                    <FormField
                        title = "Password "
                        value = {form.password}
                        handleChangeText={(e) => setForm( { ...form, password: e})}
                        otherStyles ="mt-5"
                        placeholder= "e.g. qwerty12345!?"
                    />

                    <FormField
                        title = "Repeat password"
                        value = {form.password}
                        handleChangeText={(e) => setForm( { ...form, password: e})}
                        otherStyles = "mt-3"
                        placeholder= "e.g. qwerty12345!?"
                    />

                    <CustomButton
                        title = "Sign Up!"
                        handlePress = {() => router.push('/second-sign-up')}
                        containerStyles = "mt-7"
                        textStyles="text-white"
                        isLoading={isSubmiting}
                    />

                    <View className = "justify-center pt-5 flex-row gap-2">
                        <Text className = "text-lg text-gray-100">
                            Already have an account?
                        </Text>
                        <Link href={'/sign-in'} className= "text-lg font-semibold text-secondary">Sign In!</Link>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp
