import Link from 'next/link';

export default function HomePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

            {/* Hero */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Bonjour, je suis <span className="text-blue-600">Scott Michelon</span>
                </h1>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                    Data • Business Intelligence • Intelligence Artificielle
                </p>

                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Étudiant en BUT Informatique, parcours Administration, Gestion et Exploitation des Données (AGED),
                    je m’intéresse particulièrement aux problématiques liées aux bases de données, à la Business
                    Intelligence, à l’analyse de données et à l'Intelligence Artificielle. <br/>
                    J’apprécie travailler sur des projets concrets, depuis la compréhension du besoin jusqu’à
                    l’exploitation des données pour en extraire de la valeur
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
                        {name: 'Bases de données', detail: 'Conception, optimisation, sécurité'},
                        {name: 'SQL', detail: 'Requêtes avancées, agrégations'},
                        {name: 'Modélisation', detail: 'MCD, MLD, schémas relationnels'},
                        {name: 'Business Intelligence', detail: 'Tableaux de bord, indicateurs'},
                        {name: 'Analyse de données', detail: 'Exploration, interprétation'},
                        {name: 'Python', detail: 'Traitement et analyse de données'},
                        {name: 'IA & Data Science', detail: 'Notions de ML, analyse prédictive'},
                        {name: 'Git', detail: 'Travail collaboratif'},
                    ].map(skill => (
                        <div
                            key={skill.name}
                            className="p-5 bg-white rounded-xl border shadow-sm
               transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="font-semibold">{skill.name}</h3>
                            <p className="text-sm text-slate-500 mt-1">{skill.detail}</p>
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
            <section
                className="text-center space-y-4 bg-slate-50 border rounded-2xl p-10 border-gray-300 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-semibold">Travaillons ensemble</h2>
                <p className="text-slate-600">
                    Je suis ouvert aux opportunités d’alternance ou de projet en
                    lien avec les données, la BI ou l’intelligence artificielle.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Me contacter
                </Link>
            </section>

            {/* Conclusion */}
            <section className="text-center space-y-4">
                <p className="text-sm text-slate-600 max-w-6xl mx-auto">
                    Ce portfolio a été réalisé dans le cadre de ma formation en BUT Informatique,
                    parcours Administration, Gestion et Exploitation des Données (AGED). Il présente
                    les compétences et projets que j’ai développés, et s’inscrit dans une démarche
                    de poursuite d’études en master, en alternance.
                </p>
            </section>

        </section>
    );
}
