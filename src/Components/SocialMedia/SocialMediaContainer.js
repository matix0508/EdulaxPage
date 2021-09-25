export default function SocialMediaContainer(props) {
    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Social Media Icons</h2>

                    <div className="flex flex-wrap justify-center gap-2">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}