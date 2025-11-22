import React from "react";
import "./saving.css"
const SavingAmount = () => {
    return (
        <>
            <div className="container py-4">

                <h3 className="text-center fw-bold mb-4">Saving Amount</h3>

                <div className="row g-3">

                    {/* <!-- Total Saving --> */}
                    <div className="col-6">
                        <div className="saving-card">
                            <h2>4000₹</h2>
                            <p>Total Saving</p>
                        </div>
                    </div>

                    {/* <!-- Saving Balance --> */}
                    <div className="col-6">
                        <div className="saving-card">
                            <h2>40.8₹</h2>
                            <p>Saving Balance</p>
                        </div>
                    </div>

                </div>

                <div className="mt-3">
                    <button className="btn-save">Click to Withdrawal Your Saving</button>
                </div>

                <h6 className="text-center mt-4 fw-semibold">Recent Saving Amount</h6>

                <div className="table-responsive mt-2">
                    <table className="table mb-0">
                        <thead className="fw-semibold">
                            <tr>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Saving</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12/08/25</td>
                                <td>Mon</td>
                                <td>08:23AM</td>
                                <td>30₹</td>
                            </tr>
                            <tr>
                                <td>22/10/25</td>
                                <td>Tue</td>
                                <td>10:23PM</td>
                                <td>3₹</td>
                            </tr>
                            <tr>
                                <td>10/09/25</td>
                                <td>Wed</td>
                                <td>18:23PM</td>
                                <td>20₹</td>
                            </tr>
                            <tr>
                                <td>02/18/25</td>
                                <td>Fri</td>
                                <td>09:23AM</td>
                                <td>150₹</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default SavingAmount;