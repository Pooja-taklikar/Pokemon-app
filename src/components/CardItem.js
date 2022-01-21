import React from 'react'

const CardItem = (props) => {

    let { title, description, imageUrl, HP, Attacks } = props;
    let source = "API";
    return (
        <div className="my-3 mx-3 " >
            <div className="card">
                <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/8RrRTXEgQTsdC2uogFsCwWxHmlQ=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69592408/pikachu_review_lead.0.jpg" : imageUrl} style={{ width: "250px", height: "300px", alignSelf: "center" }} className="card-img-top" alt="..." />


                <div className="card-body" style={{ textAlign: 'left' }}>
                    <p className="card-title"><strong>Name:</strong> {title}</p>
                    <p className="card-title"><strong>HP:</strong> {HP}</p>
                    <p className="card-text"><strong>Level:</strong>{description ? description : "Not Mentioned"}</p>
                    <p>
                        <strong>Attacks:</strong>
                        {Attacks.map((element) => {
                            return <h6>{element.name}</h6>
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem