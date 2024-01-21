import GithubIcon from '@/assets/icons/Github';
import LinkedIn from '@/assets/icons/LinkedIn';
import React from 'react';

export type SocialMediaProps = {
    socialMediaButtons: {
        type: 'GitHub' | 'LinkedIn';
        href: string;
    }[];
    email?: string;
};

export default function SocialMedia({ socialMediaButtons }: SocialMediaProps) {
    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {socialMediaButtons.map(({ type, href }) => (
                <li key={type + href} className="mr-5 text-xs">
                    <a
                        className="block hover:text-slate-200"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${type} (opens in a new tab)`}
                        title={type}
                        href={href}
                    >
                        <span className="sr-only">GitHub</span>
                        {type === 'GitHub' ? <GithubIcon /> : type === 'LinkedIn' ? <LinkedIn /> : null}
                    </a>
                </li>
            ))}
        </ul>
    );
}
