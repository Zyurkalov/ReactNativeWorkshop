import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Colors, Fonts, Gaps, Padding, Radius } from "../../shared/tokens";
import { Input } from "../../shared/UI-kit/Input";

export default function Welcome() {
    return (
        <View style={styles.page}>
            <Image
                source={require("../../shared/images/logotype.png")}
                resizeMode="contain"
                style={styles.logotype}
            ></Image>
            <View style={styles.form}>
                <Input placeholder="Email"></Input>
                <Input isPassword placeholder="Password"></Input>
                <Pressable style={[styles.formBlock, styles.formBlock_button]}>
                    <Text style={styles.buttonText}>Войти</Text>
                </Pressable>
            </View>
            <Text style={styles.link}>Восстановить пороль</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: Gaps.g50,
        width: "100%",
    },
    form: {
        width: "100%",
        paddingHorizontal: Padding.p54,
        gap: Gaps.g16,
    },
    logotype: {
        width: 200,
        marginRight: Padding.p12,
    },
    title: {
        fontSize: 30,
        color: Colors.white,
    },
    link: {
        fontSize: Fonts.f18,
        color: Colors.link,
    },
    formBlock: {
        height: 58,
        borderRadius: Radius.r10,
    },
    formBlock_input: {
        paddingLeft: Padding.p26,
        backgroundColor: Colors.violetDark,
        fontSize: Fonts.f16,
    },
    formBlock_button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    buttonText: {
        paddingBottom: 5,
        color: Colors.white,
        fontSize: Fonts.f18,
    },
});
