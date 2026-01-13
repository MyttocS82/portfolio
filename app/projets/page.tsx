import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Projets | Portfolio Michelon Scott',
    description:
        'Projets réalisés en BUT Informatique – données, BI, intelligence artificielle et développement',
};

export default function ProjectsPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">

            {/* Header */}
            <header className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Projets</h1>
                <p className="text-gray-600 max-w-4xl mx-auto">
                    Cette page présente une sélection de projets réalisés dans le cadre de
                    mon BUT Informatique et de mes expériences professionnelles.
                    Ils illustrent concrètement mes compétences en bases de données,
                    Business Intelligence et analyse de données.
                </p>
            </header>

            {/* Grille de projets */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Projet Open Food Facts */}
                <article
                    className="bg-white border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Exploitation des données Open Food Facts
                        </h2>

                        <p className="text-gray-700 text-sm">
                            Projet académique centré sur l’exploitation de données alimentaires
                            issues de la base Open Food Facts, depuis la préparation des données
                            jusqu’à leur analyse et leur valorisation.
                        </p>

                        <ul className="text-sm text-gray-600 list-disc list-inside">
                            <li>Nettoyage et transformation des données (KNIME)</li>
                            <li>Analyse et visualisation sous Power BI</li>
                            <li>Modèle de prédiction du NutriScore</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Data
              </span>
                            <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                BI
              </span>
                            <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                IA
              </span>
                        </div>
                    </div>
                </article>

                {/* Projet Stage ATR */}
                <article
                    className="bg-white border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Stage ATR – Gestion de base de données
                        </h2>

                        <p className="text-gray-700 text-sm">
                            Stage réalisé chez ATR dans un contexte industriel, portant sur la
                            conception et la gestion d’une base de données destinée au suivi
                            d’équipements cabine.
                        </p>

                        <ul className="text-sm text-gray-600 list-disc list-inside">
                            <li>Analyse du besoin métier</li>
                            <li>Conception et administration de la base de données</li>
                            <li>Développement d’une application de gestion</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Base de données
              </span>
                            <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                Projet professionnel
              </span>
                        </div>
                    </div>
                </article>

                {/* Projet Nuit de l’Info */}
                <article
                    className="bg-white border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Nuit de l’Info 2025
                        </h2>

                        <p className="text-gray-700 text-sm">
                            Participation à l’événement national de développement collaboratif
                            « Nuit de l’Info », consistant à répondre à une problématique
                            imposée dans un temps limité.
                        </p>

                        <ul className="text-sm text-gray-600 list-disc list-inside">
                            <li>Développement d’un site web en TypeScript</li>
                            <li>Travail en équipe et gestion du temps</li>
                            <li>Utilisation de Git et GitHub</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                                Développement web
                            </span>
                            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                                Travail en équipe
                            </span>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://nuit-info-2025-delta.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm font-medium text-blue-600 hover:underline"
                            >
                                Voir le site →
                            </a>
                        </div>

                    </div>
                </article>

            </section>

            {/* Lien compétences */}
            <section className="text-center pt-8">
                <p className="text-gray-600">
                    Ces projets sont directement liés aux compétences détaillées dans la
                    section{' '}
                    <a
                        href="/competences"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Compétences
                    </a>.
                </p>
            </section>

        </section>
    );
}
