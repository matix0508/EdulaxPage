export default function NavItem(props) {
    return (
        <li>
            <a href={props.href} className="rounded-btn">{props.children}</a>
        </li>
    )
}