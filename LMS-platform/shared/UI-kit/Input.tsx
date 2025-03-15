import {
    Pressable,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import { Colors, Fonts, Padding, Radius } from "../tokens";
import { useState } from "react";
import EyeOpenedIcon from "../images/convertored/EyeOpened";
import EyeClosedIcon from "../images/convertored/EyeClosed";

export function Input({
    isPassword,
    style,
    ...props
}: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <View style={style}>
            <TextInput
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {isPassword && (
                <Pressable
                    onPress={() => setIsPasswordVisible((state) => !state)}
                    style={styles.eyeIcon}
                >
                    {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: Padding.p26,
        borderRadius: Radius.r10,
        fontSize: 16,
        color: Colors.gray,
        fontFamily: Fonts.regular,
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: Padding.p20,
        paddingVertical: Padding.p18,
    },
});
