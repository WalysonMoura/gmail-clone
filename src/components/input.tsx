
import { ReactNode } from "react"
import { View, TextInput, TextInputProps } from "react-native"
import { colors } from "@/styles/colors"
import React = require("react")

type InputProps = {
    children: ReactNode
}

function Input({children}:InputProps) {
    return(
        <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">{children}</View>
    )
}


function InputFild({...rest}:TextInputProps) {
    return(
<TextInput className="flex-1 font-normal text-base text-white" placeholder={colors.blue[600]} placeholderTextColor={colors.gray[400]} cursorColor={colors.blue[600]} {...rest}/>
    )
}


Input.Field = InputFild


export {Input}