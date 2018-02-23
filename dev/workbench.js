import React from "react";
import ReactDOM from "react-dom";

import { Example } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
                <Example label="Exemplo" />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

