import React from 'react';

export type TextProps = {
    text: string;
};

export default function Text({ text }: TextProps) {
    return <p className="text-lg mb-6 text-slate-400">{text}</p>;
}
