export default function MenuItem(props) {
    return (
        <li onClick={props.onClick}>
                {props.children}
        </li>
    )
}