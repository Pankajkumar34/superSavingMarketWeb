

import "./withdrawal.css";
const WithdrawalContainer = () => {
    return (
        <>
            <div className="container py-3">
                {/* Title */}
                <h1
                    style={{
                        textAlign: "center",
                        fontWeight: 700,
                        marginBottom: "10px",
                        fontSize: "1rem",
                    }}
                >
                    Withdrawal Amount
                </h1>

                {/* Cards Row */}
                <div
                    className="d-flex mt-3 mb-3"
                    style={{ gap: "10px", alignItems: "center", justifyContent: "space-between" }}
                >

                    {/* Card 1 */}
                    <div
                        className="flex-fill"
                        style={{
                            borderRadius: "18px",
                            padding: "12px",
                            boxShadow: "0 8px 22px rgba(20,20,40,0.08)",
                            textAlign: "center",
                            background: "linear-gradient(135deg,#eef2ff,#e6fff6)",
                        }}
                    >
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1 }}>
                            5,300₹
                        </div>
                        <small
                            style={{
                                marginTop: "3px",
                                display: "block",
                                color: "#6c6c6c",
                                fontSize: ".77rem",
                                fontWeight: 500,
                            }}
                        >
                            Total Withdrawal
                        </small>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="flex-fill"
                        style={{
                            borderRadius: "18px",
                            padding: "12px",
                            boxShadow: "0 8px 22px rgba(20,20,40,0.08)",
                            textAlign: "center",
                            background: "linear-gradient(135deg,#f6e9ff,#eaf3ff)",
                        }}
                    >
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1 }}>
                            650₹
                        </div>
                        <small
                            style={{
                                marginTop: "3px",
                                display: "block",
                                color: "#6c6c6c",
                                fontSize: ".77rem",
                                fontWeight: 500,
                            }}
                        >
                            Withdrawable Amount
                        </small>
                    </div>

                    {/* Card 3 CTA */}
                    <div
                        className="flex-fill"
                        role="button"
                        tabIndex="0"
                        style={{
                            borderRadius: "18px",
                            padding: "12px",
                            boxShadow: "0 8px 22px rgba(20,20,40,0.08)",
                            textAlign: "center",
                            background: "linear-gradient(135deg,#eef2ff,#e6fff6)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "12px",
                                background: "linear-gradient(135deg,#a17df5,#6fd3ff)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 6px 18px rgba(105,88,255,0.12)",
                                color: "white",
                                marginBottom: "3px",
                            }}
                        >
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7 10l5-5 5 5"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <small style={{ marginTop: "2px", color: "#111", fontSize: ".8rem" }}>
                            Payout
                        </small>
                    </div>

                </div>

                {/* Recent Title */}
                <div
                    style={{
                        textAlign: "center",
                        margin: "18px 0 10px",
                        fontSize: "1rem",
                        fontWeight: 600,
                    }}
                >
                    Recent Withdrawal Amount
                </div>

                {/* Table */}
                <div className="table-responsive">
                    <table className="table table-borderless align-middle">
                        <thead style={{ background: "#f8f9fa" }}>
                            <tr>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th className="text-end">Deposited</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                                <td>12/08/25</td>
                                <td>Mon</td>
                                <td>08:23AM</td>
                                <td className="text-end">300₹</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default WithdrawalContainer;