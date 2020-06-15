import React from "react"

const Cards = ({ details }) => {
    return(
        <div class="col-md-6">
            <div class="card mb-6 box-shadow thumbnail">
                 <label class="universal-font">{details.repository}</label>
                <img class="card-img-top" src={details.image} alt="Thumbnail [100%x150]"></img>
                    <div class="card-body">
                        <p class="universal-font text-center">{details.description}</p>
                        <a class="universal-font text-center" href={details.link}>{details.repository}</a>
                        <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
            </div>
        </div>
    )


}

export default Cards;

