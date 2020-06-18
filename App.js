
import React from 'react';
import Core from './core';
import Modules from './src/modules';
import { modules as modulesConfig } from './src/modules/config';

let modulesObject = {}
Modules.forEach(module => {
    if (modulesConfig[module.name] === 1) {
        const newModule = { [module.name]: module.component }
        modulesObject = { ...modulesObject, ...newModule }
    }
})


const App = () => {
    return <Core Modules={modulesObject} />
};

export default App;
