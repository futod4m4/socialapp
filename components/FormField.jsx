import {View, Text, TextInput, TouchableOpacity, Image, Pressable} from 'react-native'
import React, {useState} from 'react'
import {icons} from "../constants";

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props}) => {
    const [showPassword, setshowPassword] = useState(false);



    return (
    <View className= {`space-y-2 ${otherStyles}`}>
            <Text className = "text-base text-gray-100 font-medium">{title}</Text>

            <View className="w-full h-16 px-4 bg-gray-200 border-2 border-secondary rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                className="flex-1 text-black font-semibold text-base"
                placeholder = {placeholder}
                placeholderTextColor={"grey"}
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' &&!showPassword}
                keyboardType = {keyboardType}
                />

                {title === 'Password' &&(
                    <Pressable onPress={() => setshowPassword(!showPassword)}>
                    <Image
                    source = {!showPassword ? icons.showPass : icons.unShowPass}
                    tintColor = "black"
                    className = "w-8 h-8"
                    resizeMode= "contain"
                    />
                    </Pressable>
                    )}
            </View>
        </View>
    )
}
export default FormField
