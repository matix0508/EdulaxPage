export default function MenuItem(props) {
    return (
        <li>
            <a onClick={props.onClick}>
                {props.children}
            </a>

        </li>
    )
}