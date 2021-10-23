export default function ContactForm(props) {
    return (
        <div id={props.id} className="hero min-h-screen bg-background">
            <div className="flex-col justify-center hero-content lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 text-5xl font-bold text-neutral-content">
                        {props.title}
                    </h1>
                    <p className="mb-5 text-neutral-content">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                    <div className="card-body text-neutral-content">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Topic</span>
                            </label>
                            <input type="text" placeholder="topic" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea h-24 textarea-bordered" placeholder="Your message" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="button" value="Send" className="btn btn-primary text-primary-content hover:bg-secondary hover:text-secondary-content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}