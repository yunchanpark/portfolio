'use client';
import React, { useCallback, useEffect, useState } from 'react';

export default function MouseEffectContainer() {
    const [move, setMove] = useState({
        x: 0,
        y: 0,
    });

    const handleMousemove = useCallback((e: MouseEvent) => {
        setMove({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMousemove);

        return () => {
            document.removeEventListener('mousemove', handleMousemove);
        };
    }, [handleMousemove]);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 "
            style={{
                background: `radial-gradient(50px at ${move.x}px ${move.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        />
    );
}
