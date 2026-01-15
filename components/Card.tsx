import {ReactNode} from 'react';

type CardProps = {
    title: string;
    children: ReactNode;
    footer?: ReactNode;
};

export default function Card({title, children, footer}: CardProps) {
    return (
        <article
            className="
        group
        bg-white
        border border-slate-200
        rounded-2xl
        p-6
        shadow-sm
        transition-all duration-300
        hover:shadow-xl
        hover:-translate-y-1
      "
        >
            {/* Titre */}
            <h2 className="relative pl-4 text-lg font-semibold mb-4 text-slate-800">
                <span className="absolute left-0 top-1 h-6 w-1 rounded-full bg-blue-600"/>
                {title}
            </h2>

            {/* Contenu */}
            <div className="space-y-4 text-slate-600 text-sm">
                {children}
            </div>

            {/* Footer optionnel */}
            {footer && (
                <div className="pt-6 mt-6 border-t border-slate-100">
                    {footer}
                </div>
            )}
        </article>
    );
}
