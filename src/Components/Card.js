export default function Card(props) {
    return (
        <div className="card shadow p-4 m-4 w-50">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}