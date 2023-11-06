import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeArea from './src/components/CustomSafeArea';
import Routes from './src/routes';

export default function App() {
  return (
    <CustomSafeArea>
      <Routes />
      {/* 
      <View style={{
        backgroundColor: '#F24C3D',
        height: 20,
      }}>
        <Text style={{
          color: '#fff'
        }}> Header
        </Text>
      </View>
      <View style={{
        backgroundColor: "#22A699",
        padding: 20,
        flex: 1,
      }}>
        <Text style={{
          color: "#fff"
        }}> Content
        </Text>

      </View>
       */}
    </CustomSafeArea>
  );
}