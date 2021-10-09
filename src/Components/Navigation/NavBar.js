export default function NavBar(props) {
    return (

        <div className="sticky top-0 z-50 bg-base-200 navbar shadow-lg text-neutral-content rounded">
            <div className="px-2 mx-2 navbar-start">
                <span className="font-bold text-primary text-2xl font-bold">
                    {props.brand}
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    {props.children}
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={props.changeLang} className="btn btn-primary">{props.lang === 'eng' ? "PL" : "EN"}</button>
            </div>
        </div>
    )
}
