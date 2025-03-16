import { StyleSheet, Text, View, StatusBar } from "react-native";
import Welcome from "./widget/welcome/welcomePage";
import { Colors } from "./shared/tokens";

export default function App() {
    return (
        <View style={styles.container}>
            <Welcome></Welcome>
            <StatusBar
                backgroundColor={Colors.black}
                barStyle="light-content"
            />
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
