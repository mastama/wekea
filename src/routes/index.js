import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Home Screen</Text>
            <Button 
            onPress={() => navigation.navigate("Details", {
                jumlahMahasiswa: 40,
                jumlahMahasiswi: 100,
            })} 
            title="Pergi ke halaman detail">
            </Button>
        </View>
    )
}

function DetailScreen({ route, navigation}) {
    const { jumlahMahasiswa, jumlahMahasiswi } = route.params;
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Detail Screen</Text>
            <Text>Jumlah Mahasiswa: {jumlahMahasiswa}</Text>
            <Text>Jumlah Mahasiswi: {jumlahMahasiswi}</Text>
            <Text>Total: {jumlahMahasiswa + jumlahMahasiswi}</Text>
            <Text>This app made by Mastama</Text>
            <Button onPress={() => navigation.goBack()} title='Kembali' />
        </View>
    )
}

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}