
"use client"

import react, { useState } from 'react';
import "./completeProfile.css";
import { Steps1, Steps2, Steps3 } from './steps';
import AllowLocationButton from '@/components/allowLocationButton/allowLocationButton';
import { addBasicDetails, addContactDetails } from '@/lib/redux/slice/completeProfileSlice';
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
interface FamilyMember {
  mobile: string;
}

const CompleteProfileContainer = () => {
  const dispatch = useDispatch();
  const userDetail = useAppSelector(state => state.complete_profile);
  const pathname= usePathname()
  console.log(userDetail, "profile")
  const [step, setStep] = useState<number>(1);
  const [familyList, setFamilyList] = useState<FamilyMember[]>([
    { mobile: "" },
  ]);


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
  const handleLocation = (data: any) => {
    console.log("Location fetched:", data);
  };
  return (
    <div className="container py-4">
      {/* Progress Bar */}
      <div className="d-flex mb-4 gap-2">
        <div className={`progress-step ${pathname === "/complete-profile" ? "active" : ""}`}>Step 1</div>
        <div className={`progress-step ${pathname === "/complete-profile/contact-details" ? "active" : ""}`}>Step 2</div>
        <div className={`progress-step ${pathname === "/complete-profile/term" ? "active" : ""}`}>Step 3</div>
      </div>
      <div>
        <AllowLocationButton onSuccess={handleLocation} />
      </div>
      {/* STEP 1 */}
      {/* {step === 1 && (
        <Steps1 nextStep={nextStep} />
      )} */}

      {/* STEP 2 */}
      {/* {step === 2 && (
        <Steps2 nextStep={nextStep} />
      )} */}

      {/* STEP 3 */}
      {/* {step === 3 && (
        <Steps3 familyList={familyList} addFamily={addFamily} updateFamily={updateFamily} removeFamily={removeFamily} nextStep={nextStep} />
      )} */}
    </div>
  );
};
export default CompleteProfileContainer;