import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstanceConfig from "@/utils/axios.config";
import { useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/hooks";
import { loadUserThunk } from "@/lib/thunkApis/authThunks";
import { toast } from "react-toastify";
interface StepsProps {
  nextStep: (n: number) => void;

}

interface StepsProps3 {
  nextStep: (step: number, data: {
    firtName: string;
    lastName: string;
    profilePic: string;
    phoneNumber: string;
  }) => void;
  familyList: { mobile: string }[];
  updateFamily: (index: number, value: string) => void;
  removeFamily: (index: number) => void;
  addFamily: () => void;
}
export const Steps1 = () => {
  // const { user } = useContext(authContext)

  const {user,sessionExpired} = useAppSelector(state=>state.auth)
  const dispatch=useAppDispatch()
  const router = useRouter()
 const [stap1, setStap1] = useState({
  firstName: user?.firstName || "",
  lastName: user?.lastName || "",
  email: user?.email || "",
  profilePic: user?.profilePic || "http//image.com",
  phoneNumber: user?.phoneNumber || "",
})
  const handleChange = (e: any) => {
    const { value, name } = e.target
    setStap1((pre) => ({ ...pre, [name]: value }))
  }
  const addBasicDetailsHandle = async () => {
    try {
      const userId = localStorage.getItem("id")
      const response = await axiosInstanceConfig.post(`/complete-profile/${userId}`, stap1)
      console.log(response, "responseresponse")
      if (response.status == 200) {
        router.push("/complete-profile/contact-details")
      }
    } catch (error) {
      console.log(error, "==>")
    }
  }
useEffect(() => {
  dispatch(loadUserThunk());
}, [dispatch]);

useEffect(() => {
  if (!user) return;

  setStap1((prev) => ({
    ...prev,
    firstName: user.firstName ?? prev.firstName,
    lastName: user.lastName ?? prev.lastName,
    email: user.email ?? prev.email,
    profilePic: user.profilePic ?? prev.profilePic,
    phoneNumber: user.phoneNumber ?? prev.phoneNumber,
  }));
}, [user]);

console.log("===>",user)
  return (
    <>
      <div className="step-card">
        <h4 className="mb-3 text-primary fw-bold">Step 1: Basic Details</h4>

        <div className="mb-3">
          <label className="form-label fw-bold">Upload Photo</label>
          <input type="file" className="form-control" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">First Name</label>
            <input type="text" name="firstName" value={stap1.firstName} onChange={handleChange} className="form-control" placeholder="Enter First Name" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Last Name</label>
            <input type="text" className="form-control" placeholder="Enter Last Name" name="lastName" value={stap1.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Email</label>
            <input type="text" className="form-control" placeholder="Enter Email" name="email" value={stap1.email} onChange={handleChange} />
          </div>
          {/* <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Mobile Number</label>
              <input type="text" className="form-control" placeholder="Enter Mobile" />
            </div> */}

          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Verify Mobile Number</label>
            <input type="text" className="form-control" placeholder="Enter OTP" name="phoneNumber" value={stap1.phoneNumber}/>
          </div>
        </div>

        <button className="step-btn float-end" onClick={() => addBasicDetailsHandle()}>
          Next
        </button>
      </div>
    </>
  )
}

export const Steps2 = () => {
  const {user,sessionExpired} = useAppSelector(state=>state.auth)
  const dispatch=useAppDispatch()
    const router = useRouter()

  const [stap2, setStap2] = useState({
    villageCity: "",
    postOffice: "",
    district: "",
    policeStation: "",
    state: "",
    region: "",

  })
  const handleChange = (e: any) => {
    const { value, name } = e.target
    setStap2((pre) => ({ ...pre, [name]: value }))
  }
  const addContactDetails = async () => {
    try {
      const userId = localStorage.getItem("id")
    
      const response = await axiosInstanceConfig.post(`/complete-profile/${userId}`, {address:stap2,location:{
        locationName:"Chainpur",
        coordinates:[77.2090,28.6139]   //[lang, lat]
      }})
      console.log(response, "responseresponse")
      if (response.status == 200) {
        router.push("/complete-profile/term")
      }
    } catch (error) {
      console.log(error, "==>")
    }
  }
  useEffect(() => {
  dispatch(loadUserThunk());
}, [dispatch]);

useEffect(() => {
  if (!user) return;

  setStap2((prev) => ({
    ...prev,
    villageCity: user?.address?.villageCity,
    postOffice:user?.address?.postOffice,
    district:user?.address?.district,
    policeStation:user?.address?.policeStation,
    state:user?.address?.state,
    region:user?.address?.region,
  }));
}, [user]);
  return (
    <div className="step-card">
      <h4 className="mb-3 text-primary fw-bold">Step 2: Contact Details</h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Village/City</label>
          <input type="text" className="form-control" placeholder="Enter Village/City" name="villageCity" onChange={handleChange} value={stap2.villageCity} />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Post</label>
          <input type="text" className="form-control" placeholder="Enter Post Office" name="postOffice" onChange={handleChange} value={stap2.postOffice} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">District</label>
          <input type="text" className="form-control" placeholder="Enter District" name="district" onChange={handleChange} value={stap2.district} />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Police Station</label>
          <input type="text" className="form-control" placeholder="Enter Police Station" name="policeStation" onChange={handleChange} value={stap2.policeStation} />
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Secondary Mobile No.</label>
          <input type="text" className="form-control" placeholder="Enter Secondary Mobile" />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Whatsapp Number</label>
          <input type="text" className="form-control" placeholder="Enter WhatsApp Number" />
        </div>
      </div> */}

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">State</label>
          <input type="text" className="form-control" placeholder="Enter State" name="state" onChange={handleChange} value={stap2.state} />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Region</label>
          <input type="text" className="form-control" placeholder="Enter Region" name="region" onChange={handleChange} value={stap2.region} />
        </div>
      </div>

      <button className="step-btn" onClick={() => window.history.back()}>
        Back
      </button>

      <button className="step-btn float-end" onClick={()=>addContactDetails()} >
        Next
      </button>
    </div>
  )
}

export const Steps3 = () => {
   const {user,sessionExpired} = useAppSelector(state=>state.auth)
  const dispatch=useAppDispatch()
    const router = useRouter()

  const [isTerm, setIisTerm] = useState(false)
  const handleChange = (e: any) => {
   const { checked } = e.target;
   console.log(checked,"checked")
    setIisTerm(checked)
  }
  const addTermHandle = async () => {
    try {
      if(!isTerm){
        toast.error("Please check term")
        return
      } 
      const userId = localStorage.getItem("id")
    
      const response = await axiosInstanceConfig.post(`/complete-profile/${userId}`, {isTerm:isTerm})
      console.log(response, "responseresponse")
      if (response.status == 200) {
        router.push("/profile")
      }
    } catch (error) {
      console.log(error, "==>")
    }
  }
  useEffect(() => {
  dispatch(loadUserThunk());
}, [dispatch]);

useEffect(() => {
  if (!user) return;

  
}, [user]);
  return (
    // <div className="step-card">

    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Terms &amp; Conditions</h3>
            <p className="text-muted">Please read these terms carefully before using SuperSaving Market.</p>


            <div className="terms-box mb-3">
              <h5>1. Introduction</h5>
              <p>Welcome to SuperSaving Market. By using our services you agree to be bound by these Terms &amp; Conditions.</p>


              <h5>2. Account</h5>
              <p>You are responsible for keeping your account secure. Do not share your password. We are not liable for any loss caused by unauthorized access.</p>


              <h5>3. Orders &amp; Payments</h5>
              <p>All orders are subject to acceptance. Prices are shown in the checkout and may change. Payments are processed by our payment provider.</p>


              <h5>4. Shipping &amp; Returns</h5>
              <p>Shipping times vary. Returns are accepted within 7 days of delivery for most items unless otherwise stated.</p>


              <h5>5. Privacy</h5>
              <p>We collect and process personal data in accordance with our Privacy Policy.</p>


              <h5>6. Limitation of Liability</h5>
              <p>To the fullest extent permitted by law, SuperSaving Market's liability is limited to the value of the relevant order.</p>


              <h5>7. Changes</h5>
              <p>We may update these Terms from time to time. Continued use indicates acceptance of changes.</p>
            </div>


            <form id="termsForm" >
              <div className="form-check mb-3">
                <input className="form-check-input"  type="checkbox"  onChange={handleChange} id="acceptCheckbox" aria-describedby="acceptHelp" />
                <label className="form-check-label" htmlFor="acceptCheckbox">
                  I accept the <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Terms &amp; Conditions</a> of <span className="fw-bold">SuperSaving Market</span>.
                </label>
                <div id="acceptHelp" className="form-text">You must accept the terms before continuing.</div>
              </div>


              <div className="d-flex gap-2">
                <button type="button" id="submitBtn" className="step-btn float-end" onClick={addTermHandle}>Continue</button>
                <button type="button" className="btn btn-outline-secondary" id="cancelBtn">Cancel</button>
              </div>
            </form>


          </div>
        </div>


        <p className="text-center text-muted mt-3 small">By continuing you agree to our <a href="#">Privacy Policy</a> and acknowledge our <a href="#">Return Policy</a>.</p>
      </div>
    </div>
    // </div>
  )
}