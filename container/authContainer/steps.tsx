import React from "react";
interface StepsProps {
    nextStep: (n: number) => void;
  
}

interface StepsProps3 {
    nextStep: (n: number) => void;
    familyList: { mobile: string }[];
    updateFamily: (index: number, value: string) => void;
    removeFamily: (index: number) => void;
    addFamily: () => void;
}
 export const Steps1 = ({nextStep}:StepsProps) => {
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
              <input type="text" className="form-control" placeholder="Enter First Name" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter Last Name" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Mobile Number</label>
              <input type="text" className="form-control" placeholder="Enter Mobile" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Verify Mobile Number</label>
              <input type="text" className="form-control" placeholder="Enter OTP" />
            </div>
          </div>

          <button className="step-btn float-end" onClick={() => nextStep(2)}>
            Next
          </button>
        </div>
        </>
    )
}

export const Steps2 = ({nextStep}:StepsProps) => {
    return (
         <div className="step-card">
          <h4 className="mb-3 text-primary fw-bold">Step 2: Contact Details</h4>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Village/City</label>
              <input type="text" className="form-control" placeholder="Enter Village/City" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Post</label>
              <input type="text" className="form-control" placeholder="Enter Post Office" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">District</label>
              <input type="text" className="form-control" placeholder="Enter District" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Police Station</label>
              <input type="text" className="form-control" placeholder="Enter Police Station" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Secondary Mobile No.</label>
              <input type="text" className="form-control" placeholder="Enter Secondary Mobile" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Whatsapp Number</label>
              <input type="text" className="form-control" placeholder="Enter WhatsApp Number" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">State</label>
              <input type="text" className="form-control" placeholder="Enter State" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Region</label>
              <input type="text" className="form-control" placeholder="Enter Region" />
            </div>
          </div>

          <button className="step-btn" onClick={() => nextStep(1)}>
            Back
          </button>

          <button className="step-btn float-end" onClick={() => nextStep(3)}>
            Next
          </button>
        </div>
    )
}

export const Steps3 = ({nextStep,updateFamily,familyList,removeFamily,addFamily}:StepsProps3) => {
    return (
        <div className="step-card">
          <h4 className="mb-3 text-primary fw-bold">Step 3: Family Members</h4>

          {/* List of family mobile numbers */}
          {familyList.map((item, index) => (
            <div className="mb-3" key={index}>
              <label className="fw-bold">Family Member Mobile No.</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Mobile Number"
                value={item.mobile}
                onChange={(e) => updateFamily(index, e.target.value)}
              />

              {familyList.length > 1 && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFamily(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button className="btn btn-outline-primary mb-3" onClick={addFamily}>
            + Add Family Member
          </button>

          <br />

          <button className="step-btn" onClick={() => nextStep(2)}>
            Back
          </button>

          <button className="step-btn float-end">Submit</button>
        </div>
    )
}