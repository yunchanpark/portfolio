import React from 'react';

export type TitleProps = {
    text: string;
    description?: string;
};

export default function Title({ text, description }: TitleProps) {
    return (
        <h1 className="text-4xl font-bold mb-8">
            {text}
            <strong className="text-teal-500">.</strong>
            <p className="text-slate-500 italic text-base my-2">{description}</p>
            <div className={`w-full h-1 bg-teal-500`} />
        </h1>
    );
}
