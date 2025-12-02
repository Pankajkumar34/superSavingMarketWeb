import { ThreeDots } from "react-loader-spinner";
import "./loader.css"
const Spinner = () => {
    return (
       <div className="d-flex justify-content-center">
         <ThreeDots
            visible={true}
            height="30"
            width="30"
            color="#ffffffff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
       </div>
    )
}

export default Spinner;