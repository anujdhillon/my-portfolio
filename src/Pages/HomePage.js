import React from 'react'
function HomePage({enterClick}){
    return (
        <div className="HomePage">
            <header className="hero">
                <h2 className="hero-text">
                    Hi, I am 
                    <span> Anuj Dhillon</span>
                </h2>
                <h5 className="direction-text">
                    Click the
                    <span> Button </span>
                    below to enter my realm.
                </h5>
                <p>(under construction)</p>
                    <div className="btnbig" onClick={enterClick}>
                        ENTER
                    </div>      
            </header>

        </div>
    )
}
export default HomePage;