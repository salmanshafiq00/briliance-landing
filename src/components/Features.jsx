import analyticsImage from '../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg';
import dataVizImage from '../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg';
import planImage from '../assets/images/services/plan-your-schedules.jpeg';
import FeatureCard from './FeatureCard';

function Features() {
    
    return (
        <>
            <div
                className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
            >
                {
                    features.map((card, index) => (
                        <FeatureCard 
                            key={index} 
                            title={card.title} 
                            description={card.description} 
                            imageUrl={card.imageUrl} />
                    ))
                }               
            </div>
        </>
    );
}
export default Features;

const features = [
    {
        title: 'Plan your schedules',
        description: 'Streamline customer subscriptions and billing with automated scheduling tools.',
        imageUrl: planImage,
    },
    {
        title: 'Analytics & insights',
        description: 'Transform your business data into actionable insights with real-time analytics.',
        imageUrl: analyticsImage,
    },
    {
        title: 'Collaborate seamlessly',
        description: 'Keep your team aligned with shared dashboards and collaborative workflows.',
        imageUrl: dataVizImage,
    },
];