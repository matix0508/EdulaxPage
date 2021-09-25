export default function NavBar(props) {
    return (

        <div className="sticky top-0 z-50 navbar shadow-lg bg-neutral text-neutral-content">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">
                    {props.brand}
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    {props.children}
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={props.changeLang} className="btn btn-primary">{props.lang === 'eng' ? "Język Polski" : "English Version"}</button>
            </div>
        </div>
    )
}