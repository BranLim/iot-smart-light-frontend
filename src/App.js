import './App.css';
import React from 'react';
import {Container} from '@material-ui/core';
import {Header} from "./components/Header";
import {ControlPanelContent} from "./components/ControlPanelContent"

function App() {
    return (
        <Container maxWidth="md">
            <Header/>
            <ControlPanelContent/>
        </Container>
    );
}

export default App;
