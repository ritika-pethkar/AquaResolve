import {Pressable, StyleSheet, Text, TextInput, View, Image, Button, SafeAreaView} from 'react-native';
import TopBar from '../components/TopBar.js';
import BottomBar from '../components/BottomBar.js';
import newIcon from '../assets/new.png';
import {useNavigation} from "@react-navigation/native";

function AccountPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
        <TopBar />
            <View style={styles.container}>
                <Text style={styles.greeting}>Account</Text>
                <Text style={styles.problemContainerTitle}>Manage your account here</Text>
            </View>
        <BottomBar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 105,
        margin: 15,
        marginTop: 24,
        width: '100%',
        height: '100%',
    },
    greeting: {
        fontSize: 22,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 30,
    },
    problemContainer: {
        width: '92%',
        height: '60%',
        padding: 10,
        paddingLeft: 15,
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    problemContainerTitle: {
        color: '#888',
        fontFamily: 'Poppins-Regular',
        marginBottom: 4,
        paddingLeft: 30,
    },
    textInput: {
        height: 100,
        backgroundColor: '#e7e6e6',
        width: '90%',
        borderRadius: 14,
        padding: 16,
        fontFamily: 'Poppins-Regular',
    },
    cameraButton: {
        height: 30,
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 14,
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    cameraImage: {
        opacity: .4,
        marginBottom: 20,
    },
    cameraText: {
        opacity: .5,
        fontSize: 12,
    },
    buttonStyle: {
        width: '90%',
        height: 50,
        backgroundColor: '#2A6F97',
        borderRadius: 40,
        flex: .08,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    }
});

export default AccountPage;