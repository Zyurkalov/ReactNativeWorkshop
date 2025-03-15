import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./widget/welcome/welcomePage";
import { Colors } from "./shared/tokens";

export default function App() {
    return (
        <View style={styles.container}>
            <Welcome></Welcome>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        alignItems: "center",
        justifyContent: "center",
        // paddingBottom: 20,
    },
});
