import React from "react"
import Gallery from "./Gallery";
import { gallerydata } from "./data";
import Titles from "./components/Titles";

class App extends React.Component {
    string = "Gallery";
    paragraf = "This gallery has different photos. You can view photos cats, goats and parks."
    render() {
        return (<div>
            <Titles className="main-title">
            <h1>{this.string}</h1>
            </Titles>
            <p className="typewriter">{this.paragraf}</p>
            <Gallery data={gallerydata} />
        </div>)
    }
}

export default App