import Link from 'next/link';

export default function HomePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

            {/* Hero */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Bonjour, je suis <span className="text-blue-600">Scott Michelon</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Étudiant en BUT Informatique, spécialisé en Administration, Gestion et
                    Exploitation des Données (AGED), avec un fort intérêt pour les bases de
                    données, la Business Intelligence et l’intelligence artificielle.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Me contacter
                    </Link>
                    <Link
                        href="/cv"
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                    >
                        Voir mon CV
                    </Link>
                </div>
            </section>

            {/* À propos */}
            <section className="space-y-4 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold">À propos</h2>
                <p className="text-slate-600">
                    Je m’intéresse particulièrement à la conception et à l’optimisation de
                    bases de données, à l’analyse et à la valorisation des données via des
                    outils de Business Intelligence, ainsi qu’aux applications de
                    l’intelligence artificielle dans le traitement de données.
                </p>
            </section>

            {/* Compétences */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">Compétences clés</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        'Bases de données',
                        'SQL',
                        'Modélisation de données',
                        'Business Intelligence',
                        'Analyse de données',
                        'Python',
                        'IA & Data Science',
                        'Git'
                    ].map(skill => (
                        <div
                            key={skill}
                            className="p-4 bg-white rounded-lg shadow-sm border text-sm md:text-base"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projets */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">Projets</h2>
                <p className="text-center text-slate-600 max-w-3xl mx-auto">
                    Mes projets académiques et personnels portent principalement sur la
                    gestion de bases de données, l’analyse de données et la mise en place
                    de solutions orientées décisionnel et intelligence artificielle.
                </p>
                <div className="text-center">
                    <Link
                        href="/projets"
                        className="text-blue-600 hover:underline"
                    >
                        Voir tous les projets →
                    </Link>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">Travaillons ensemble</h2>
                <p className="text-slate-600">
                    Je suis ouvert aux opportunités de stage, d’alternance ou de projet en
                    lien avec les données, la BI ou l’intelligence artificielle.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Me contacter
                </Link>
            </section>

        </section>
    );
}
