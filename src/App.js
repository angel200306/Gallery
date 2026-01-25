import React from "react"
import Gallery from "./Gallery";
import { gallerydata } from "./data";

class App extends React.Component {
    string = "Gallery";
    paragraf = "This gallery has different photos. You can view photos cats, goats and parks."
    render() {
        return (<div>
            <h1>{this.string}</h1>
            <p>{this.paragraf}</p>
            <Gallery data={gallerydata} />
        </div>)
    }
}

export default App