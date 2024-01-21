'use client';
import React from 'react';

type CardProps = {
    title: string;
    period: string;
    list?: string[];
};

export type TimelineProps = {
    data: CardProps[];
};

export default function Timeline({ data }: TimelineProps) {
    return (
        <div className="grid grid-cols-2 gap-20">
            {data.map((props) => (
                <Card key={props.title} {...props} />
            ))}
        </div>
    );
}

function Card({ title, period, list }: CardProps) {
    return (
        <article>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-slate-500 italic mb-3">{period}</p>
            {list?.map((text) => (
                <p key={text} className="font-semibold leading-loose">{`● ${text}`}</p>
            ))}
        </article>
    );
}
