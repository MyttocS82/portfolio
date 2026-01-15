'use client';

import { useState } from 'react';

/* =========================
   Types
========================= */

type Project = {
    title: string;
    description: string;
    details: string[];
    tags: string[];
    link?: string;
};

/* =========================
   Données projets
========================= */

const projects: Project[] = [
    {
        title: 'Exploitation des données Open Food Facts',
        description:
            'Projet académique centré sur l’exploitation de données alimentaires issues de la base Open Food Facts.',
        details: [
            'Nettoyage et transformation des données avec KNIME',
            'Analyse et visualisation sous Power BI',
            'Conception d’un modèle de prédiction du NutriScore',
        ],
        tags: ['Data', 'BI', 'IA', 'Travail en équipe'],
    },
    {
        title: 'Stage ATR – Gestion de base de données',
        description:
            'Stage réalisé chez ATR dans un contexte industriel, portant sur la conception et la gestion d’une base de données.',
        details: [
            'Analyse du besoin métier',
            'Conception et administration de la base de données',
            'Développement d’une application de gestion',
        ],
        tags: ['Data', 'Base de données', 'Projet professionnel'],
    },
    {
        title: 'Nuit de l’Info 2025',
        description:
            'Participation à l’événement national de développement collaboratif « Nuit de l’Info ».',
        details: [
            'Développement d’un site web en TypeScript',
            'Travail en équipe et gestion du temps',
            'Utilisation de Git et GitHub',
        ],
        tags: ['Développement web', 'Travail en équipe'],
        link: 'https://nuit-info-2025-delta.vercel.app/',
    },
];

/* =========================
   Styles des tags
========================= */

const tagStyles: Record<string, string> = {
    Data: 'bg-blue-100 text-blue-700',
    BI: 'bg-green-100 text-green-700',
    IA: 'bg-purple-100 text-purple-700',
    'Base de données': 'bg-indigo-100 text-indigo-700',
    'Projet professionnel': 'bg-yellow-100 text-yellow-700',
    'Développement web': 'bg-red-100 text-red-700',
    'Travail en équipe': 'bg-gray-100 text-gray-700',
};

/* =========================
   Tags disponibles
========================= */

const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
);

/* =========================
   Composant Client
========================= */

export default function ProjectsClient() {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filteredProjects = activeTag
        ? projects.filter((project) => project.tags.includes(activeTag))
        : projects;

    return (
        <>
            {/* Filtres */}
            <section className="flex flex-wrap justify-center gap-3">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`px-4 py-2 rounded-full border text-sm transition
            ${
                        activeTag === null
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    Tous
                </button>

                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-4 py-2 rounded-full border text-sm transition
              ${
                            activeTag === tag
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </section>

            {/* Grille de projets */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <article
                        key={project.title}
                        className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition"
                    >
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">{project.title}</h2>

                            <p className="text-gray-700 text-sm">
                                {project.description}
                            </p>

                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                {project.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`px-3 py-1 text-xs rounded-full ${
                                            tagStyles[tag] ?? 'bg-gray-100 text-gray-700'
                                        }`}
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>

                        {project.link && (
                            <div className="pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    Voir le site →
                                </a>
                            </div>
                        )}
                    </article>
                ))}
            </section>
        </>
    );
}
