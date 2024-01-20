import React from 'react';

export type PeriodTextProps = {
    text: string;
};

export default function PeriodText({ text }: PeriodTextProps) {
    return <p className="text-slate-500 italic mb-3">{text}</p>;
}
