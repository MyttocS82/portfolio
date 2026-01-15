import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

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
                    Vous pouvez filtrer les projets selon les compétences mobilisées.
                </p>
            </header>

            {/* Composant interactif */}
            <ProjectsClient />

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
