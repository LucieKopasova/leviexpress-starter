import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setjourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setjourney(journeyData);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <h2>
        {journey
          ? `Nalezeno spojení s id ${journey.journeyId}`
          : 'Zatím nebylo nalezeno žádné spojení'}
      </h2>
    </main>
  );
};
