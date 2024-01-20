'use client';

import React from 'react';
import Image from 'next/image';
import applekorea from '@/assets/images/applekorea.png';
import googleplay from '@/assets/images/googleplay.png';
import home from '@/assets/images/home.png';

export type UnderscoreTextProps = {
    text: string;
    links?: {
        icon: 'home' | 'apple' | 'android';
        href: string;
    }[];
};

export default function UnderscoreText({ text, links }: UnderscoreTextProps) {
    return (
        <div className="flex items-center gap-3 mt-8 mb-5">
            <h2 className="text-2xl font-bold underline mr-3">
                <span>{text}</span>
            </h2>
            {links?.map(({ icon, href }) => (
                <Image
                    key={icon + href}
                    className="cursor-pointer"
                    src={icon === 'home' ? home : icon === 'apple' ? applekorea : googleplay}
                    alt="홈페이지"
                    style={{ width: 32, height: 32 }}
                    onClick={() => window.open(href)}
                />
            ))}
        </div>
    );
}
