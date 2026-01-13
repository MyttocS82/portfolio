import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Compétences | Portfolio Michelon Scott',
    description:
        'Compétences développées en BUT Informatique – parcours Administration, Gestion et Exploitation des Données (AGED)',
};

export default function SkillsPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">

            {/* Introduction */}
            <header className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Compétences</h1>
                <p className="text-gray-600 max-w-4xl mx-auto">
                    Les compétences présentées ci-dessous s’inscrivent dans le cadre du
                    Programme National du BUT Informatique, parcours{' '}
                    <strong>Administration, Gestion et Exploitation des Données (AGED)</strong>.
                    Elles sont détaillées afin de mettre en valeur les différents domaines
                    de mise en œuvre abordés au cours de ma formation et de mes projets.
                </p>
            </header>

            {/* Bloc 1 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">
                    Conception et administration des bases de données
                </h2>
                <p className="text-gray-700">
                    Je suis capable de concevoir, administrer et optimiser des bases de
                    données relationnelles en réponse à un besoin métier. Cette compétence
                    couvre la modélisation des données, l’écriture de requêtes SQL avancées
                    ainsi que la prise en compte des contraintes de performance, de sécurité
                    et d’intégrité.
                </p>

                <ul className="list-disc list-inside text-gray-700">
                    <li>Modélisation conceptuelle et logique des données</li>
                    <li>SQL avancé (requêtes complexes, agrégations)</li>
                    <li>Optimisation et cohérence des bases de données</li>
                    <li>Sécurité et gestion des accès</li>
                </ul>
            </section>

            {/* Bloc 2 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">
                    Exploitation, transformation et qualité des données
                </h2>
                <p className="text-gray-700">
                    J’ai développé des compétences liées à l’exploitation de données
                    hétérogènes, depuis leur collecte jusqu’à leur préparation pour
                    l’analyse. Cela inclut les étapes de nettoyage, de transformation
                    et d’intégration des données dans une logique de fiabilité et de qualité.
                </p>

                <ul className="list-disc list-inside text-gray-700">
                    <li>Collecte et intégration de données multiples</li>
                    <li>Nettoyage et préparation des données</li>
                    <li>Chaînes de traitement de type ETL</li>
                    <li>Contrôle et amélioration de la qualité des données</li>
                </ul>
            </section>

            {/* Bloc 3 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">
                    Analyse, visualisation et aide à la décision
                </h2>
                <p className="text-gray-700">
                    Je maîtrise les principes de la Business Intelligence permettant de
                    restituer les données sous forme de tableaux de bord et de
                    visualisations pertinentes. L’objectif est de transformer les données
                    en informations exploitables afin de faciliter la prise de décision.
                </p>

                <ul className="list-disc list-inside text-gray-700">
                    <li>Analyse de données à des fins décisionnelles</li>
                    <li>Création de tableaux de bord</li>
                    <li>Visualisation claire et adaptée aux utilisateurs</li>
                    <li>Interprétation et communication des résultats</li>
                </ul>
            </section>

            {/* Bloc 4 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">
                    Analyse avancée et intelligence artificielle
                </h2>
                <p className="text-gray-700">
                    J’ai été formé aux bases de l’analyse avancée des données et de
                    l’intelligence artificielle. Je suis capable d’appliquer des techniques
                    de machine learning et d’exploration de données sur des jeux de données
                    concrets afin d’en extraire de la connaissance.
                </p>

                <ul className="list-disc list-inside text-gray-700">
                    <li>Exploration et analyse avancée de données</li>
                    <li>Notions de machine learning</li>
                    <li>Analyse prédictive</li>
                    <li>Mise en œuvre d’algorithmes sur des cas concrets</li>
                </ul>
            </section>

            {/* Lien vers projets */}
            <section className="text-center pt-8">
                <p className="text-gray-600">
                    Ces compétences ont été mobilisées au travers de projets académiques
                    concrets, présentés dans la section{' '}
                    <a
                        href="/projets"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Projets
                    </a>.
                </p>
            </section>

        </section>
    );
}
