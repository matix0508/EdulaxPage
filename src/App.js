import './App.css';
import SocialMediaContainer from "./Components/SocialMedia/SocialMediaContainer";
import Facebook from "./Components/SocialMedia/Facebook";
import Twitter from "./Components/SocialMedia/Twitter";
import LinkedIn from "./Components/SocialMedia/LinkedIn";
import GitHub from "./Components/SocialMedia/GitHub";
import NavBar from "./Components/Navigation/NavBar";
import NavItem from "./Components/Navigation/NavItem";
import Footer from "./Components/Footer";
import GlassCard from "./Components/GlassCard";
import {useState} from "react";
import MenuItem from "./Components/MenuItem";
import Menu from "./Components/Menu";
import Welcome from "./Components/Welcome";
import Card from "./Components/Card";
import Avatar from "./Components/Avatar";
import ContactForm from "./Components/ContactForm";

function Socials() {
    return (
        <SocialMediaContainer>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
            <GitHub/>
        </SocialMediaContainer>
    )
}

function App() {
    const links = ["Home", "About Us", "Contact Us"];
    const [theme, setTheme] = useState('light')
    return (
        <div data-theme={theme}>
            <NavBar brand={"EdulaX"}>
                {links.map((link) => (
                    <NavItem href={"#" + link.replace(/ /g, "")}>{link}</NavItem>
                ))}
            </NavBar>

            <Welcome />
            <GlassCard id={"AboutUs"} title={"About Us"} buttonText={"Click Me"}>
                <p>
                    Hello there again
                </p>
            </GlassCard>
            <ContactForm id={"ContactUs"} />
            <Menu title={"Theme"}>
                {[
                    'light', 'dark', 'cyberpunk', 'cupcake', 'bumblebee',
                    'emerald', 'corporate', 'synthwave', 'retro', 'valentine',
                    'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel',
                    'fantasy', 'wireframe', 'black', 'luxury', 'dracula'

                ].map((theme) => (
                    <MenuItem onClick={() => setTheme(theme)}>{theme}</MenuItem>
                ))}

            </Menu>
            <Footer links={links}/>

        </div>
    );
}

export default App;
