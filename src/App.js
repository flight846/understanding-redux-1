import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";
import ButtonGroup from "./components/ButtonGroup";
import store from "./store";

class App extends Component {   
    render() {
        const tech = ["React", "Elm", "React Redux"]; 

        return [
            <HelloWorld key={1} tech={store.getState().tech} />,
            <ButtonGroup key={2} technologies={ tech } />
        ];
    }
}

export default App;