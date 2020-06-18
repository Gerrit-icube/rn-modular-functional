import React from 'react';
import { View, Text } from 'react-native'

const ModuleA = () => {
    return (
        <View>
            <Text>Src Module A Text</Text>
        </View>
    );
}

export default {
    component: ModuleA,
    name: 'ModuleA'
};