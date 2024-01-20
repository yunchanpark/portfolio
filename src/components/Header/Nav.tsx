import { NAV_MENU } from '@/constants/profile';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16">
                {NAV_MENU.map((label) => (
                    <li key={label} className="mb-3">
                        <Link key={label} href={`#${label}`} className="text-xl text-gray-400 hover:text-white">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
