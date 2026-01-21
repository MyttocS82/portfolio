'use client';

import {useState} from 'react';
import Card from '@/components/Card';

/* =========================
   Types
========================= */

type Project = {
    title: string;
    description: string;
    details: string[];
    tags: string[];
    role: string;
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
        role: 'analyse des données, conception et administration de base de données, nettoyage et transformation des données, conception de visualisations',
        tags: ['Data', 'BI', 'IA', 'Travail en équipe', 'Projet académique'],
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
        role: 'analyse du besoin, conception et administration de base de données, développement d’outils de production',
        tags: ['Base de données', 'Projet professionnel', 'Data', 'Analyse de données'],
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
        role: 'développement web, intégration frontend, collaboration en équipe et gestion du code source',
        tags: ['Développement web', 'Travail en équipe'],
        link: 'https://nuit-info-2025-delta.vercel.app/',
    },
    {
        title: 'R4.01 (API REST) – Gestion d’une équipe sportive',
        description:
            'Projet académique de conception et développement d’une API REST sécurisée pour la gestion d’une équipe sportive.',
        details: [
            'Conception d’une API REST en PHP',
            'Mise en place d’une authentification JWT',
            'Gestion des rôles et des droits d’accès',
            'Implémentation des opérations CRUD sur les données',
        ],
        role:
            'conception de l’architecture logicielle, développement backend, gestion de la sécurité et des accès',
        tags: ['API', 'Backend', 'Base de données', 'Projet académique', 'Travail en équipe'],
    },
    {
        title: 'SAE 3.01 – Exploitation et analyse de données décisionnelles',
        description:
            'Projet académique orienté données et décisionnel, visant à exploiter, analyser et restituer des données à des fins d’aide à la décision.',
        details: [
            'Analyse et préparation des données',
            'Conception d’indicateurs et de tableaux de bord',
            'Interprétation des résultats pour un usage décisionnel',
            'Travail en équipe et restitution écrite',
        ],
        role:
            'analyse des données, conception d’indicateurs, participation à la restitution et à la prise de décision',
        tags: ['Data', 'BI', 'Projet académique', 'Travail en équipe'],
    },
    {
        title: 'SAE 2.02 – Algorithmes de graphes et analyse de complexité',
        description:
            'Projet académique portant sur l’implémentation et la comparaison d’algorithmes de plus courts chemins dans des graphes pondérés.',
        details: [
            'Implémentation des algorithmes de Dijkstra et Bellman-Ford en Python',
            'Génération aléatoire de graphes pondérés',
            'Analyse expérimentale des temps de calcul et des complexités',
            'Étude du seuil de forte connexité des graphes orientés',
        ],
        role:
            'implémentation d’algorithmes, analyse de complexité, expérimentation et interprétation des résultats',
        tags: ['Algorithmique', 'Python', 'Projet académique', 'Analyse de données'],
    }

];

/* =========================
   Styles des tags
========================= */
const tagStyles: Record<string, string> = {
    // Données & décisionnel
    Data: 'bg-blue-50 text-blue-700 border border-blue-200',
    BI: 'bg-green-50 text-green-700 border border-green-200',
    'Analyse de données': 'bg-sky-50 text-sky-700 border border-sky-200',
    IA: 'bg-purple-50 text-purple-700 border border-purple-200',
    Algorithmique: 'bg-violet-50 text-violet-700 border border-violet-200',
    'Base de données': 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    API: 'bg-orange-50 text-orange-700 border border-orange-200',
    Backend: 'bg-amber-50 text-amber-700 border border-amber-200',
    Python: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'Travail en équipe': 'bg-slate-100 text-slate-700 border border-slate-200',
    'Projet académique': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    'Projet professionnel': 'bg-lime-50 text-lime-700 border border-lime-200',
    'Développement web': 'bg-red-50 text-red-700 border border-red-200',
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
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition
            ${
                        activeTag === null
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                >
                    Tous
                </button>

                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition
              ${
                            activeTag === tag
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </section>

            {/* Grille de projets */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        footer={
                            project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    Voir le site →
                                </a>
                            )
                        }
                    >
                        <p>{project.description}</p>

                        <ul className="list-disc list-inside">
                            {project.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>

                        <p className="text-sm text-slate-500">
                            <strong>Rôle :</strong> {project.role}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        tagStyles[tag] ?? 'bg-slate-100 text-slate-700 border border-slate-200'
                                    }`}
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </section>
        </>
    );
}
