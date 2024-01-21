'use client';

import React from 'react';
import Image from 'next/image';
import applekorea from '@/assets/images/applekorea.png';
import googleplay from '@/assets/images/googleplay.png';
import notion from '@/assets/images/notion.png';
import home from '@/assets/images/home.png';
import GithubIcon from '@/assets/icons/Github';

export type UnderscoreTextProps = {
    text: string;
    links?: {
        icon: 'home' | 'apple' | 'android' | 'notion' | 'github';
        href: string;
    }[];
};

export default function UnderscoreText({ text, links }: UnderscoreTextProps) {
    return (
        <div className="flex items-center gap-5 mt-8 mb-5">
            <h2 className="text-2xl font-bold underline mr-4">
                <span>{text}</span>
            </h2>
            {links?.map(({ icon, href }) =>
                icon === 'github' ? (
                    <span key={icon + href} className="cursor-pointer w-8 h-8" onClick={() => window.open(href)}>
                        <GithubIcon width={32} height={32} />
                    </span>
                ) : (
                    <Image
                        key={icon + href}
                        className={`cursor-pointer ${icon === 'notion' ? 'w-9 h-9' : 'w-8 h-8'}`}
                        src={icon === 'home' ? home : icon === 'apple' ? applekorea : icon === 'notion' ? notion : googleplay}
                        alt="홈페이지"
                        onClick={() => window.open(href)}
                    />
                ),
            )}
        </div>
    );
}
