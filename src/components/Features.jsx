import analyticsImage from '../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg';
import dataVizImage from '../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg';
import planImage from '../assets/images/services/plan-your-schedules.jpeg';
import FeatureCard from './FeatureCard';
import { featuresData } from '../data/featuresData';

function Features() {
    
    return (
        <>
            <div
                className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
            >
                {
                    featuresData.map((card, index) => (
                        <FeatureCard 
                            key={index} 
                            title={card.title} 
                            description={card.description} 
                            imageUrl={index === 0 ? planImage : index === 1 ? analyticsImage : dataVizImage} 
                        />
                    ))
                }               
            </div>
        </>
    );
}
export default Features;