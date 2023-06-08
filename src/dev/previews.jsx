import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import UserList from "../pages/UserList";
import Register from "../pages/Register";

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
        </Previews>
    )
}

export default ComponentPreviews