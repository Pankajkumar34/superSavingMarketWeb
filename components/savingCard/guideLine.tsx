import react from 'react';
const Guideline: React.FC = () => {

    return (
        <>
            <div className="col-lg-6 col-md-12" style={{ fontFamily: "Poppins, sans-serif", fontSize: "10px" }}>
                <div className="card shadow-sm p-3 h-100">
                    <h5 className="text-primary fw-bold mb-2">Guideline:</h5>
                    <ul className="mb-2">
                        <li>This is your Saving Card provided by Super Saving Market.</li>
                        <li>This is only one time provided by the market.</li>
                        <li>It helps to buy items in the market.</li>
                        <li>It is the identity of the market.</li>
                        <li>You can buy more items from another platform with maximum saving.</li>
                        <li>For Download Card <a href="#">Click Here</a>.</li>
                        <li>For order the cards <a href="#">Click Here</a>.</li>
                    </ul>
                    <ul className="text-secondary small">
                        <li>यह आपका सेविंग कार्ड है जो सुपर सेविंग मार्केट द्वारा प्रदत्त किया गया है।</li>
                        <li>यह केवल एक बार ही प्रदान किया जाता है।</li>
                        <li>यह बाजार में वस्तुएं खरीदने में मदद करता है।</li>
                        <li>यह बाजार की पहचान है।</li>
                        <li>आप अधिक वस्तुएं छूट के साथ खरीद सकते हैं।</li>
                        <li>कार्ड डाउनलोड करने के लिए <a href="#">यहाँ क्लिक करें</a>।</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Guideline;