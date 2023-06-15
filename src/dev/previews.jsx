import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import UserList from "../pages/UserList";
import Register from "../pages/Register";
import Login from "../pages/Login";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/UserList">
                <UserList/>
            </ComponentPreview>
            <ComponentPreview path="/Register">
                <Register/>
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews