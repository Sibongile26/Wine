import React, { useState } from 'react'
import '../components/Products.css'

function Products(props) {

    return (
        <>
            <div className="cards-container">

                {
                    props.item.map(menu => {
                        return (
                            <div key={menu.id} className='card' >
                                <img src={menu.image} className="card_img" />
                                <div className="card-body">
                                    <h5 className="card-title">{menu.name}</h5>
                                    <p className="card-text">{menu.price}</p>
                                    <button>AddtoCart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            

        </>


    )
}

export default Products