import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Backdrop from '../Assets/Backdrop.png'
export default function Join() {

    const Apply = [
        {
            Join:'Inquire',
            link:'/'
        },
        {
            Join:'Apply',
            link:'/'

        },
        {
            Join:'Visit us',
            link:'/'
        }
    ]

  return (
    <JoinCov>
        <Bacdrop>
            <div className='join-us'>
                <h4>Join Us</h4>
            </div>
            <div >
                <ul className=' apply-list'>
                    {Apply.map((app, index) =>{
                        return(
                            <li key={index}>
                                <Link to={app.link}>
                                    {app.Join}
                                </Link>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        </Bacdrop>
    </JoinCov>
  )
}




const Bacdrop = styled.div`
    position:relative ;
    width:100% ;
    height:100% ;
    display:flex ;
    flex-direction:column ;
    align-items: center;
    gap: 17rem;
    background-image: url(${Backdrop});
    background-repeat:no-repeat ;
    background-size:cover ;
    background-attachment: fixed;
    /* filter: brightness(60%); */
    -webkit-filter: brightness(70%);
    .join-us{
        width: 60% ;
        margin: 0 auto ;
        z-index:10 ;
        text-align:center ;
        h4{
            color:#fff ;
            padding:20px 0 ;
            font-size:clamp(1.7rem, 6vw, 1.9rem);
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
    }

    .apply-list{
        list-style:none ;
        padding: 0;
        display: grid;
        grid-template-columns: 300px 300px 300px;
        grid-gap: 10px 100px;
        transition: all 7s  linear ;

        li{
            border:2px solid #fff;
            padding:20px ;
            text-align:center ;

            a{
                color:#fff ;
                text-decoration:none ;
                font-size:clamp(1.3rem, 6vw, 1.5rem) ;
            };
            &:hover{
                transform:scale(1.2)
            }
        }

    }



`

const JoinCov = styled.section`
        height:40rem;
        position:relative;

        
`