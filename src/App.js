import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import NavItem from "./Components/Navigation/NavItem";
import Footer from "./Components/Footer";
import GlassCard from "./Components/GlassCard";
import {useState} from "react";
import ContactForm from "./Components/ContactForm";
import { welcomeButton, welcomeText } from './texts/welcome';
import { aboutUsButton, aboutUsText } from './texts/aboutUs';

function App() {

    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('eng')
    const links = lang === "eng" ? ["Welcome", "About Us", "Contact Us"] : ["Witamy", "O Nas", "Napisz Do Nas"];
    const ids = links.map((link) => link.replace(/ /g, ""))
    return (
        <div data-theme={theme} className={"bg-background"}>
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

            <GlassCard id={ids[0]} lang={lang} title={links[0]} buttonText={welcomeButton(lang)}>
                    {welcomeText(lang)}
            </GlassCard>

            <GlassCard lang={lang} id={ids[1]} title={links[1]} buttonText={aboutUsButton(lang)} photo={"https://picsum.photos/id/1005/300/200"}>
                <p>
                    {aboutUsText(lang)}
                </p>
            </GlassCard>
            <ContactForm lang={lang} id={ids[2]} title={links[2]}/>
            <Footer lang={lang} links={links}/>

        </div>
    );
}

export default App;
