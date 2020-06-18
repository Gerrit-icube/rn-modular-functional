
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import CoreModuleA from './CoreModuleA';

const Core = ({ Modules }) => {
    const [modules, setModules] = useState({})

    const coreModules = {
        "ModuleA": CoreModuleA
    };

    useState(() => {
        const moduleList = { ...coreModules, ...Modules }
        setModules(moduleList)
    }, []);

    // useEffect(() => {
    //     const moduleList = { ...coreModules, ...Modules }
    //     setModules(moduleList)
    // }, []);

    const renderModules = () => {
        let modulesToRender = []
        Object.keys(modules).map(module => {
            const ModuleToRender = modules[module];
            modulesToRender.push(ModuleToRender)
        })
        return modulesToRender.map((Module, index) => <Module key={index} />)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Core</Text>
            {Object.keys(modules).length && renderModules()}
        </View>
    );
};

export default Core;
