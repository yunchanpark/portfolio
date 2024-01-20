import React from 'react';

export type SubTitleProps = {
    text: string;
};

export default function SubTitle({ text }: SubTitleProps) {
    return <h3 className="text-lg mb-6 font-semibold">{text}</h3>;
}
