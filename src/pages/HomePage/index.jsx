import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';

/* 
Použijte komponentu JourneyDetail v komponentě HomePage na místě, kde se nyní vypisuje id nalezeného spoje. Komponenta se bude zobrazovat jenom tehdy, když ve stavu journey v komponentě HomePage je něco jiného než null. Ověřte, že se po vyhledání spojení na stránce zobrazí podrobnosti cesty s městy 1 až 4 (komponenta JourneyDetail zatím není napojená na reálná data). */

export const HomePage = () => {
  const [journey, setjourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setjourney(journeyData);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey ? <JourneyDetail journeydata={journey} /> : ''}
    </main>
  );
};
