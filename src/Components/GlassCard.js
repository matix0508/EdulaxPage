

export default function GlassCard(props) {
    return (
        <div id={props.id} className="flex items-center w-full px-4 py-10 card rounded-none bg-background">
            <div className="card lg:card-side text-neutral-content bg-neutral">
                {props.photo && (
                    <figure className="p-6">
                    <img alt="" src={props.photo} className="rounded-lg shadow-lg" />
                    </figure>
                )}
                
                <div className="max-w-md card-body">
                    <h2 className="card-title text-neutral-content">{props.title}</h2>
                    <p className={"text-neutral-content"}>{props.children}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary hover:bg-secondary text-primary-content">{props.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
