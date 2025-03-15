import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from "react-native";
import { Colors, Fonts, Gaps, Radius, Margin } from "../../shared/token";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
    return (
        <View style={styles.screenContainer}>
            <StatusBar />
            <ImageBackground
                source={require("../../shared/images/image-3.jpg")}
                resizeMode="cover"
                style={styles.backgroundImage}
            ></ImageBackground>

            <View style={styles.content}>
                <LinearGradient
                    colors={["transparent", Colors.black]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.2 }}
                    style={styles.content__gradient}
                >
                    <Text style={styles.content__title}>
                        Одно из самых вкусных кофе в городе!
                    </Text>
                    <Text style={styles.content__subtitle}>
                        Свежие зёрна, настоящая арабика и бережная обжарка
                    </Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.button__text}>Начать</Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-start",
        height: "70%",
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        // height: "80%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    content__gradient: {
        width: "100%",
        // height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: Margin.m20,
    },
    content__title: {
        width: 300,
        color: Colors.white,
        fontSize: Fonts.f34,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: Margin.m8 / 2,
    },
    content__subtitle: {
        width: 300,
        color: Colors.gray,
        fontSize: Fonts.f14,
        textAlign: "center",
        marginBottom: Margin.m24,
        lineHeight: 22,
    },
    button: {
        width: 315,
        height: 65,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r16,
        justifyContent: "center",
        alignItems: "center",
    },
    button__text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontWeight: "600",
        paddingBottom: 5,
    },
});
