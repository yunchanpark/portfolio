import React from 'react';
import SocialMedia from './SocialMedia';
import Nav from './Nav';
import { profileData } from '@/constants/profile';

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24 max-lg:px-10 max-lg:py-10">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">박윤찬</h1>
                <Nav />
            </div>
            <div className="max-lg:mt-8">
                <p>{profileData.header.email}</p>
                <SocialMedia socialMediaButtons={profileData.header.socialMediaButtons} />
            </div>
        </header>
    );
}
