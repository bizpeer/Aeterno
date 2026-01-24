import { Hero } from '../components/sections/Hero';
import { BrandStory } from '../components/sections/BrandStory';
import { Science } from '../components/sections/Science';

export function Home() {
    return (
        <div className="bg-BRAND-deepBlue">
            <Hero />
            <BrandStory />
            <Science />
        </div>
    );
}
