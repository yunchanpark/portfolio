import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChannelTalk from '@/components/ChannelTalk';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '박윤찬 포트폴리오',
    description: '프론트엔드 개발자 포트폴리오',
    category: '프론트엔드 포트폴리오',
    keywords: ['프론트엔드', '개발자', '포트폴리오', '프론트엔드포트폴리오', '프론트엔드개발자'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth overflow-x-hidden bg-slate-900">
            <ChannelTalk />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
