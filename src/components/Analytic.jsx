import React from 'react'
import styled from 'styled-components'
import { BsCreditCard } from "react-icons/bs";

function Analytic() {
    return (
        <Section >
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <BsCreditCard />
                    </div>
                    <div className="action">
                            <h4>Premium</h4>
                    </div>
                </div>
                <div className="transfer">
                    <h6>4562 1122 4595 7852</h6>
                </div>
                <div className="money">
                <h5>Abdul Aziz</h5>
                    <h3>Master Card</h3>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                    <BsCreditCard />
                    </div>
                    <div className="action">
                            <h4>Gold</h4>
                    </div>
                </div>
                <div className="transfer">
                    <h6>4562 1122 4595 7852 </h6>
                </div>
                <div className="money">
                <h5>Abdul Aziz</h5>
                    <h3>Master Card</h3>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                    <BsCreditCard />
                    </div>
                    <div className="action">
                            <h4>Silver</h4>
                    </div>
                </div>
                <div className="transfer">
                    <h6>4562 1122 4595 7852</h6>
                </div>
                <div className="money">
                    <h5>Abdul Aziz</h5>
                    <h3>Master Card</h3>
                </div>
            </div>
        </Section>
    )
}

export default Analytic
const Section = styled.section `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    .analytic {
        justify-content: space-between;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        background-color: #06cdfe;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 300px;
       
        .design{
            display: flex;
            align-items: center;
            color: white;
            
            .logo {
                background-color: #06cdfe;
                display: flex;
                justify-content: center;
                align-items: center;
               
                svg {
                    font-size: 2rem;
                }
            }
            .action {
                margin-left: 120px;
               svg{
                font-size: 1.5rem;
               }
            }

        }
        .transfer {
            margin-top: 20px;
            color: white;
        }
        .money {
            color: white;
            display: flex;
            margin-top: 20px;  
            h3{
                margin-left: 50px
            }
        }
    }
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        grid-template-columns: repeat(1, 1fr);
      }
`;