import Headers from "./Headers"

const Creation = ({creation}) => {
    return (
        <div className="col-md-6 col-lg-3 mx-0 mb-4">

            <div className="custom-card text-white">

                <img src={creation.img} className="card-img" alt={creation.id} />

                <div className="d-flex align-items-end custom-overlay">

                    <Headers 
                    header3={true}
                    hClassName='sect3-img-text ms-4 mb-4'
                    hText1={creation.htext1}
                    hText2={creation.hText2}/>

                </div>

            </div>

        </div>
    )
}

export default Creation
