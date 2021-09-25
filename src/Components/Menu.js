export default function Menu(props) {
    return (
        <div className="py-4 artboard artboard-demo bg-base-200">
            <ul className="menu py-3 shadow-lg bg-base-100 rounded-box">
                <li className="menu-title">
      <span>
            {props.title}
          </span>
                </li>
                {props.children}
            </ul>
        </div>
    )
}