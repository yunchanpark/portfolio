import React from 'react';

export type SkillsProps = {
    contents: string[];
};

export default function Skills({ contents }: SkillsProps) {
    return (
        <div className="flex my-7 gap-2 flex-wrap">
            {contents.map((text) => (
                <span key={text} className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full font-medium">
                    {text}
                </span>
            ))}
        </div>
    );
}
