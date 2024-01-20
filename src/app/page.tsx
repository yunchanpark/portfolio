import MouseEffectContainer from '@/components/MouseEffectContainer';
import ViewGenerator from '../components/ViewItem/ViewGenerator';
import { profileData } from '../constants/profile';

export default function Home() {
    return (
        <main className="scroll-smooth bg-slate-900 lg:flex lg:justify-between lg:px-24 gap-4 relative">
            <MouseEffectContainer />
            {ViewGenerator(profileData)}
        </main>
    );
}
