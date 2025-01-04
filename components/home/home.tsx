import React from "react";
import { StyleSheet, Button, Text, View } from 'react-native';


const Home = ({ navigation }: any) => {
    return (
        <View style={styles.container} >
            <View style={styles.topStyle}></View>
            <Text style={styles.text} >This is Home page</Text>
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    topStyle: {
        height: 40,
        width: '100%',
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#191919',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
    },
});