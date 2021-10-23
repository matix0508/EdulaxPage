export default function Menu(props) {
    return (
        <div className="py-4 rounded-none artboard artboard-demo bg-background">
            <ul className="menu py-3 shadow-lg bg-background">
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