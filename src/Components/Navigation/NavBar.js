export default function NavBar(props) {
    return (

        <div className="shadow bg-base-200 drawer h-52">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col drawer-content">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="px-2 mx-2 text-primary">
        <span>
              {props.brand}
            </span>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu horizontal text-primary">
                                {props.children}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay" />
                    <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-primary">
                        {props.children}
                    </ul>
                </div>
        </div>
    )
}