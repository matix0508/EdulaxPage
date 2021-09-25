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
    const [theme, setTheme] = useState('light')
    return (
        <div data-theme={theme}>
            <NavBar brand={"EdulaX"}>
                <NavItem href={"#Home"}>Home</NavItem>
                <NavItem href={"#AboutUs"}>About Us</NavItem>
                <NavItem href={"#Contact"}>Contact</NavItem>
            </NavBar>

            <Welcome />
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
            <GlassCard title={"Home"} buttonText={"Click Me"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
                eleifend lectus. Donec
                vehicula at velit posuere volutpat. Etiam quis elit sed dolor tristique placerat. Nullam bibendum tempus
                odio, ut convallis ex faucibus ut. Vivamus libero eros, rutrum vehicula dui sed, convallis faucibus
                nulla. Quisque erat felis, mollis ac imperdiet ac, aliquam venenatis mauris. Nam consectetur auctor
                efficitur.
            </GlassCard>
            <GlassCard title={"About Us"} buttonText={"Click Me"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
                eleifend lectus. Donec
                vehicula at velit posuere volutpat. Etiam quis elit sed dolor tristique placerat. Nullam bibendum tempus
                odio, ut convallis ex faucibus ut. Vivamus libero eros, rutrum vehicula dui sed, convallis faucibus
                nulla. Quisque erat felis, mollis ac imperdiet ac, aliquam venenatis mauris. Nam consectetur auctor
                efficitur.
            </GlassCard>


            <Footer links={["Home", "About Us", "Contact Us"]}/>

        </div>
    );
}

export default App;
