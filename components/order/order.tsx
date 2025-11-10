import React from "react";


const Order: React.FC = () => {
    return(
        <>
         <div className="order_card">
                  <div className="card">
                    <div className="card-body">
                      <div className="top-status">
                        <h5>ORDER# 00000</h5>
                        {/* Add your SVG status steps here */}
                        <ul>
                          <li className="active">
                            <span>Pending</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-4">
                    <div className="card-body p-0 table-responsive">
                      <h4 className="p-3 mb-0">Product Description</h4>
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>Description</th>
                            <th></th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                alt="product"
                                width="80"
                              />
                            </th>
                            <td>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Dolorem, facilis.
                            </td>
                            <td>₹100 X 2</td>
                            <td>
                              <strong>₹200</strong>
                            </td>
                            <td>
                              <span className="badge badge-warning">PENDING</span>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <span>Status:</span>{" "}
                              <span className="badge badge-success">PAID</span>
                            </th>
                            <td>
                              <span className="text-muted">Total Price</span>
                              <strong>₹200</strong>
                            </td>
                            <td>
                              <span className="text-muted">Total Paid</span>
                              <strong>₹200</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
        </>
    )
}

export default Order