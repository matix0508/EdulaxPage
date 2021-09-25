export default function Welcome(props) {
    return (
        <div id={props.id} className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-primary-focus">
                        {props.lang === "eng" ? "Hello there" : "Witamy!"}
                    </h1>
                    <p className="mb-5 text-primary">{
                        props.lang === "eng" ?
                            `Lorem ipsum dolor sit amet mauris nibh porta ligula erat id
                            sapien dui a neque lorem, id nulla mi, nec mauris viverra est
                            sem, posuere vitae, ipsum. Mauris urna. Nullam id mi. Donec vitae
                            ipsum ullamcorper libero laoreet ultricies massa. Nunc justo non
                            mattis lectus luctus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec porta, metus at sagittis sed, eros. Mauris tempor et,
                            tristique id, pretium eros ac massa. Nulla consequat magna non nunc. Nulla congue.
                            Proin rhoncus nunc, ac ligula erat in massa. Nunc elementum. Morbi commodo.
                            Suspendisse nec tellus. Nulla eleifend tincidunt, risus suscipit sed, ornare elementum nulla.
                            Nullam libero et est sem, sed neque. Etiam dapibus nisl eros, rhoncus non, arcu. Cum sociis
                            natoque penatibus et mi. Cras aliquet. In pretium wisi. Morbi commodo. Curabitur egestas.
                            Vestibulum ante in augue. Aenean ut ante ipsum primis in nulla eu nisl. Donec eleifend placerat.
                            Curabitur condimentum nulla. Suspendisse justo arcu, in lacus diam eu nisl at ipsum sit amet
                            nunc eget dolor leo at sem. Quisque ornare varius, leo. In ultricies viverra fermentum
                            laoreet, est turpis libero, accumsan.`
                                :
                            `Początek traktatu czasu być moralna, a którym stworzenie wykonywać powinien być Istność mającą
                            wszelkie doskonałoście i przy tym razie wszelkie realności To tylko godność która z pobudki mogł
                            szkodę uczynić nieprzerwanej szczęśliwości. Przedstawmy sobie rzeczy, lecz przy tym zależy, że
                            to do gramatyki, Xenofonta i niepozwalać żadnego występku albo drugim przypadku bez nagrody lub
                            pobudkę, a wszakże Dobro był w obcowaniu tj. on w nim powiedzieć, że boleści przykrości plagi i
                            pewna ustawa. My też może to zgadzało z owym mniemanym szczęściem. Robota, trudności, praca,
                            fatyga, oczekiwany odpoczynek, usiłowanie wyłamać się też nieznamy dostatecznie końca druku.
                            Spodziewając się sam zaspokoić, lecz przy takim miejscu tak rozwinął, że często chwalebna
                            poczciwość i absolutną konieczność.`
                    }

                    </p>
                    <button className="btn btn-primary">{props.lang === "eng" ? "Get Started" : "Kliknij mnie"}</button>
                </div>
            </div>
        </div>
    )
}