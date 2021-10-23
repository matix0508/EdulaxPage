export function Card(props) {
    return (
        <div className="card shadow p-4 m-4 bg-neutral max-w-lg text-center">
            <div className="card-body">
                <h2 className="card-title text-neutral-content">{props.title}</h2>
                <div className={"text-neutral-content"}>{props.children}</div>
            </div>
        </div>
    )
}