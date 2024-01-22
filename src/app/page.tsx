import MouseEffectContainer from '@/components/MouseEffectContainer';
import ViewGenerator from '../components/ViewItem/ViewGenerator';
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className="scroll-smooth bg-slate-900 lg:flex lg:justify-between lg:px-24 gap-4 relative text-white">
            <Header />
            <ViewGenerator />
            <MouseEffectContainer />
        </main>
    );
}
