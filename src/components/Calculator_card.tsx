// CalculatorComponent.tsx
import React, { useState } from 'react';
import { IonSelect, IonSelectOption, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';

const CalculatorComponent: React.FC = () => {
    const [num1, setNum1] = useState<number | string>('');
    const [num2, setNum2] = useState<number | string>('');
    const [operation, setOperation] = useState<string>('');
    const [result, setResult] = useState<number | string>('');

    const performCalculation = () => {
    if (num1 === '' || num2 === '' || operation === '') {
        setResult('Por favor, ingresa números y selecciona una operación.');
        return;
    }

    const n1 = parseFloat(num1 as string);
    const n2 = parseFloat(num2 as string);

    switch (operation) {
        case '+':
            setResult(n1 + n2);
            break;
        case '-':
            setResult(n1 - n2);
            break;
        case '*':
            setResult(n1 * n2);
            break;
        case '/':
            if (n2 === 0) {
            setResult('No se puede dividir por cero.');
            } else {
            setResult(n1 / n2);
            }
            break;
        default:
            setResult('Operación no válida.');
        }
    };

return (
        <IonCard>
            <IonCardContent>
                <IonInput
                type="number"
                placeholder="Número 1"
                value={num1}
                onIonChange={(e) => setNum1(e.detail.value!)}
                />
                <IonSelect
                placeholder="Operación"
                value={operation}
                onIonChange={(e) => setOperation(e.detail.value!)}
                >
                <IonSelectOption value="+">Suma</IonSelectOption>
                <IonSelectOption value="-">Resta</IonSelectOption>
                <IonSelectOption value="*">Multiplicación</IonSelectOption>
                <IonSelectOption value="/">División</IonSelectOption>
                </IonSelect>
                <IonInput
                type="number"
                placeholder="Número 2"
                value={num2}
                onIonChange={(e) => setNum2(e.detail.value!)}
                />
                <IonButton expand="full" onClick={performCalculation}>
                Calcular
                </IonButton>
                <div>Resultado: {result}</div>
            </IonCardContent>
        </IonCard>
    );
};

export default CalculatorComponent;
