import React from 'react';

export type TitleProps = {
    text: string;
};

export default function Title({ text }: TitleProps) {
    return (
        <h1 className="text-4xl font-bold mb-8">
            {text}
            <strong className="text-teal-500">.</strong>
            <div className={`w-full h-1 mt-10 bg-teal-500`} />
        </h1>
    );
}
