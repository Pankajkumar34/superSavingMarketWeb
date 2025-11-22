
import React from 'react';
import "./shopping.css"
const StatementHistory = () => {
    return (
        <>
            <div className="container py-3">

                {/* <!-- Top dotted line --> */}
                <div className="top-line"></div>

                {/* <!-- Title --> */}
                <h3 className="text-center fw-bold">Shopping History</h3>

                {/* <!-- Cards Row --> */}
                <div className="row text-center mt-3 g-3">
                    <div className="col-6">
                        <div className="stats-card">
                            <h3 className="fw-bold">4000₹</h3>
                            <p className="m-0">Total Expend</p>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="stats-card">
                            <h3 className="fw-bold">130₹</h3>
                            <p className="m-0">In Month Expend</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Recent History --> */}
                <h5 className="text-center fw-semibold mt-4">Recent History</h5>

                {/* <!-- Search box --> */}
                {/* <!-- Search box --> */}
                <div className="position-relative mt-2">
                    <input type="text" className="form-control search-box" placeholder="Search by date"
                        style={{ paddingLeft: "20px", paddingRight: "45px" }} />

                    {/* <!-- Search Icon --> */}
                    <span style={{
                        position: "absolute",
                        right: "18px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "20px",
                        cursor: "pointer"
                    }}>🔍</span>
                </div>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Cost</th>
                                <th>More..</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/25</td>
                                <td>Mon</td>
                                <td>07:59</td>
                                <td>40₹</td>
                                <td><span className="show-btn">Show</span></td>
                            </tr>
                            <tr>
                                <td>17/10/25</td>
                                <td>Tue</td>
                                <td>10:59</td>
                                <td>413₹</td>
                                <td><span className="show-btn">Show</span></td>
                            </tr>
                            <tr>
                                <td>23/03/25</td>
                                <td>Fri</td>
                                <td>08:10</td>
                                <td>25₹</td>
                                <td><span className="show-btn">Show</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </>
    )
}

export default StatementHistory;