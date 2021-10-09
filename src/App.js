import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import NavItem from "./Components/Navigation/NavItem";
import Footer from "./Components/Footer";
import GlassCard from "./Components/GlassCard";
import {useState} from "react";
import Welcome from "./Components/Welcome";
import ContactForm from "./Components/ContactForm";

function App() {

    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('eng')
    const links = lang === "eng" ? ["Welcome", "About Us", "Contact Us"] : ["Witamy", "O Nas", "Napisz Do Nas"];
    const ids = links.map((link) => link.replace(/ /g, ""))
    return (
        <div data-theme={theme} className={"bg-base-200"}>
            <NavBar 
                lang={lang} 
                changeLang={() => setLang(lang === "eng" ? "pl" : "eng")} 
                theme={theme}
                changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
                brand={"EdulaX"}
            >
                {links.map((link) => (
                    <NavItem href={"#" + link.replace(/ /g, "")}>{link}</NavItem>
                ))}
            </NavBar>

            <Welcome id={ids[0]} lang={lang}/>
            <GlassCard lang={lang} id={ids[1]} title={links[1]} buttonText={lang === "eng" ? "Click Me" : "Kliknij mnie"}>
                <p>
                    {
                        lang === "eng" ?
                            `Lorem ipsum dolor sit amet sapien vitae eros cursus sed, luctus a, 
                            dolor. Fusce ullamcorper sem vestibulum id, porttitor risus. Sed 
                            vehicula sit amet, est. Duis mauris lacus et massa. Duis luctus, 
                            pellentesque sapien. Etiam dapibus vitae, bibendum a, lacinia lacus. 
                            Curabitur urna felis, in accumsan at, cursus lectus, viverra arcu, 
                            dapibus eu, commodo `
                            :
                            `Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. 
                            Nazywał się raczéj jako jenerał Dąbrowski z Wizgirdem 
                            dominikanie z nich brylant, niby zakryty od płaczącej matki p
                            od las drogi i damy spały we zbożach i pan Rejent. - krzyknął 
                            pan dla tylu, tak mędrsi fircykom oprzeć się ziemi. Podróżny 
                            stanął w cyfrę powiązany płotek połyskał się pan Sędzia, a
                             często bez trzewika była i światem.`
                    }
                </p>
            </GlassCard>
            <ContactForm lang={lang} id={ids[2]}/>
            <Footer lang={lang} links={links}/>

        </div>
    );
}

export default App;
