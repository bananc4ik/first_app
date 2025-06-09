import react from "react";
import Filter from '../../images/itemDetailPage/Filter.svg'
const Faqs = () => {
    return(
        <div className="container-fluid">

            <div className="row">

                <div>
                    <h2>All Reviews</h2>

                    <div>
                        <button><img src={Filter} alt="" /></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Faqs;