

export default function GlassCard(props) {
    return (
        <div className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
            <div className="card glass lg:card-side text-neutral-content">
                <figure className="p-6">
                    <img src={props.photo || "https://picsum.photos/id/1005/300/200"} className="rounded-lg shadow-lg" />
                </figure>
                <div className="max-w-md card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className={"text-black"}>{props.children}</p>
                    <div className="card-actions">
                        <button className="btn glass rounded-full text-black">{props.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}