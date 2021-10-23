export default function NavBar(props) {
    return (

        <div className="sticky top-0 z-50 bg-neutral navbar shadow-lg text-background-content rounded">
            <div className="px-2 mx-2 navbar-start">
                <span className="font-bold text-neutral-content text-2xl font-bold">
                    {props.brand}
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    {props.children}
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={props.changeTheme} className="btn btn-secondary">{props.theme === "light" ? "Dark Mode" : "Light Mode"}</button>
                <button onClick={props.changeLang} className="btn btn-primary text-primary-content hover:bg-secondary hover:text-secondary-content ">{props.lang === 'eng' ? "PL" : "EN"}</button>
            </div>
        </div>
    )
}
