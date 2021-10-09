export default function Footer(props) {
    return (
        <footer className=" p-10 footer bg-primary border-base-300 shadow-lg text-base-content footer-center">
            <div className="text-primary-content grid grid-flow-col gap-4">
                {props.links.map((name) => (<a href={"#" + name.replace(/ /g, "")} className="link link-hover">{name}</a>))}
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href={"https://www.facebook.com/EdulaX.io"} className={"fa fa-facebook text-base-200"}>

                    </a>
                    <a href={"/"} className={"fa fa-twitter text-base-200"}>

                    </a>
                    <a href={"https://www.linkedin.com/company/edulax/"} className={"fa fa-linkedin text-base-200"}>

                    </a>
                </div>
            </div>
            <div>
                <p className={"text-primary-content"}>Copyright © 2021 - All right reserved by edulax.io</p>
            </div>
        </footer>
    )
}
