import "./HomePage.css";
import icon from "../../logo.svg";

import React from 'react';

class Homepage extends React.Component {
    render(){
        return (

            <section className={"Home"}>
                <div className={"description"}>
                    <div>
                        <h1> NFT Dutch Auction</h1>
                    </div>

                    <div>
                        <p>
The term “Dutch auction” stems from the auction style used in 17th century Holland's tulip markets. The bulbs were wildly popular, and the marketplace for them had been chaotic. The exchange decided that the best way to sell the tulip bulbs was to do it quickly in as few bids as possible—while still getting the best price possible.</p>
                    </div>

                    <div className={"buttons"}>
                        <button className="btn"><a href="#DeployContract">Deploy</a></button>
                        <button className="btn"><a href="#InteractWithContract">Buy</a></button>
                    </div>
                </div>

               
            </section>

        );
    }

}

export default Homepage; 

