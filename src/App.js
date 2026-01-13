import React from "react"
import Image from "./components/Image"
import logo from "./img/cat1.jpg"
import logo1 from "./img/cat2.jpg"
import logo2 from "./img/cat3.jpg"
import logo3 from "./img/cat4.jpg"
import logo4 from "./img/animal1.jpg"
import logo5 from "./img/animal2.jpg"
import logo6 from "./img/animal3.jpg"
import logo7 from "./img/park1.jpg"
import logo8 from "./img/park2.jpg"
import logo9 from "./img/park3.jpg"
import logo10 from "./img/park4.jpg"
import logo11 from "./img/park5.jpg"
import logo12 from "./img/park6.jpg"
import logo13 from "./img/park7.jpg"
import logo14 from "./img/park8.jpg"
import logo15 from "./img/park9.jpg"
import logo16 from "./img/park10.jpg"
import logo17 from "./img/park11.jpg"
import logo18 from "./img/park12.jpg"
import logo19 from "./img/park13.jpg"
import logo20 from "./img/park14.jpg"
import logo21 from "./img/park15.jpg"
import logo22 from "./img/park16.jpg"
import logo23 from "./img/park17.jpg"
import logo24 from "./img/park18.jpg"
import logo25 from "./img/park19.jpg"
import logo26 from "./img/park20.jpg"
import logo27 from "./img/park21.jpg"
import logo28 from "./img/park22.jpg"
import logo29 from "./img/park23.jpg"
import logo30 from "./img/park24.jpg"
import logo31 from "./img/park25.jpg"
import logo32 from "./img/park26.jpg"
import logo33 from "./img/park27.jpg"
import logo34 from "./img/park28.jpg"

class App extends React.Component {
    string = "Gallery"
    paragraf = "This gallery has different photos. You can view photos cats, goats and parks."
    string1 = "Cats"
    string2 = "Goats"
    string3 = "Parks"
    render() {
        return (<div>
            <h1>{this.string}</h1>
            <p>{this.paragraf}</p>
            <h2>{this.string1}</h2>
            <Image image={logo} />
            <Image image={logo1} />
            <Image image={logo2} />
            <Image image={logo3} />
            <h3>{this.string2}</h3>
            <Image image={logo4} />
            <Image image={logo5} />
            <Image image={logo6} />
            <h4>{this.string3}</h4>
            <Image image={logo7} />
            <Image image={logo8} />
            <Image image={logo9} />
            <Image image={logo10} />
            <Image image={logo11} />
            <Image image={logo12} />
            <Image image={logo13} />
            <Image image={logo14} />
            <Image image={logo15} />
            <Image image={logo16} />
            <Image image={logo17} />
            <Image image={logo18} />
            <Image image={logo19} />
            <Image image={logo20} />
            <Image image={logo21} />
            <Image image={logo22} />
            <Image image={logo23} />
            <Image image={logo24} />
            <Image image={logo25} />
            <Image image={logo26} />
            <Image image={logo27} />
            <Image image={logo28} />
            <Image image={logo29} />
            <Image image={logo30} />
            <Image image={logo31} />
            <Image image={logo32} />
            <Image image={logo33} />
            <Image image={logo34} />
        </div>)
    }
}

export default App