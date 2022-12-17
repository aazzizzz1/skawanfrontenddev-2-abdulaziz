import React from 'react'
import styled from 'styled-components'
// import apple from "../assets/avatar.jpg"
import { BiTransfer } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";

function Services() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Services</h4> 
          </div>
          <div> 
          <h6>View All</h6>    
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
                    <td><div className="logo">
                        <BsCreditCard />
                    </div></td>
                    <td><div className="logo">
                        <BsBank />
                    </div></td>
                    <td><div className="logo">
                        <GiTakeMyMoney />
                    </div></td>
                    <td><div className="logo">
                        <BiTransfer />
                    </div></td>
            </tr>
            <tr>
            <td >Card</td>
              <td >Finance</td>
              <td>Assurance</td>
              <td>Help</td>
            </tr>
            
            </table>
        </div>
        </div>
        </Section>
    )
}

export default Services
const Section = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        .logo{
        }
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;