'use client';

import { NAV_MENU, profileData } from '@/constants/profile';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function Nav() {
    const [currentLabel, setCurrentLabel] = useState(profileData.workspace[0].id);
    const offsetTopArray = useRef<number[]>([]);

    const handleScroll = useCallback(() => {
        let closestNumber = null;
        let minDifference = Infinity;
        let findIndex = 0;

        for (let i = 0; i < offsetTopArray.current.length; i++) {
            const currentNumber = offsetTopArray.current[i];
            const difference = Math.abs(window.scrollY - currentNumber);

            if (difference < minDifference) {
                minDifference = difference;
                closestNumber = currentNumber;
                findIndex = i;
            }
        }

        setCurrentLabel(profileData.workspace[findIndex].id);
    }, []);

    useEffect(() => {
        offsetTopArray.current = profileData.workspace.map(({ id }) => document.getElementById(id)?.offsetTop ?? 0);
        window.addEventListener('scrollend', handleScroll);

        return () => {
            window.removeEventListener('scrollend', handleScroll);
        };
    }, [handleScroll]);

    const handleClickMenu = (id: string) => {
        setCurrentLabel(id);
        window.scrollTo({
            top: document.getElementById(id)?.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16">
                {NAV_MENU.map((label) => (
                    <li key={label} className="mb-3 ">
                        <p
                            key={label}
                            className={`text-xl hover:text-white cursor-pointer ${
                                currentLabel === label ? 'text-white' : 'text-gray-400'
                            }`}
                            onClick={() => handleClickMenu(label)}
                        >
                            {label}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
