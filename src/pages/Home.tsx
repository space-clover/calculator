// Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Calculator_card from "../components/Calculator_card"


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejercicios ionic 4 calculadora </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <Calculator_card/>
      </IonContent>
    </IonPage>
  );
};

export default Home;