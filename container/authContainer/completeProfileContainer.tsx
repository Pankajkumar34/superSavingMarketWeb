
"use client"

import react, { useState } from 'react';
import "./completeProfile.css";
import { Steps1, Steps2, Steps3 } from './steps';


interface FamilyMember {
    mobile: string;
}

const CompleteProfileContainer = () => {
  const [step, setStep] = useState<number>(1);
  const [familyList, setFamilyList] = useState<FamilyMember[]>([
    { mobile: "" },
  ]);

  const nextStep = (n: number) => setStep(n);

  const addFamily = () => {
    setFamilyList((prev) => [...prev, { mobile: "" }]);
  };

  const updateFamily = (index: number, value: string) => {
    setFamilyList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, mobile: value } : item))
    );
  };

  const removeFamily = (index: number) => {
    setFamilyList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-4">
      {/* Progress Bar */}
      <div className="d-flex mb-4 gap-2">
        <div className={`progress-step ${step === 1 ? "active" : ""}`}>Step 1</div>
        <div className={`progress-step ${step === 2 ? "active" : ""}`}>Step 2</div>
        <div className={`progress-step ${step === 3 ? "active" : ""}`}>Step 3</div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
       <Steps1 nextStep={nextStep}/>
      )}

      {/* STEP 2 */}
      {step === 2 && (
       <Steps2 nextStep={nextStep}/>
      )}

      {/* STEP 3 */}
      {step === 3 && (
       <Steps3 familyList={familyList} addFamily={addFamily} updateFamily={updateFamily} removeFamily={ removeFamily} nextStep={nextStep}/>
      )}
    </div>
  );
};
export default CompleteProfileContainer;