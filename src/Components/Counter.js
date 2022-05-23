import React from 'react';
import styled from 'styled-components';
import CounterImg from '../Assets/Counter.png'
import Feather from '../Assets/Insta.png'
import Confrence from '../Assets/Confrence.png'
import Faith from '../Assets/Faith.png'
import Inter from '../Assets/Interhouse.png'


export default function Counter() {

    const Ratio =[
        {   icon: Feather,
            numbers:'300',
            label:'GRADUATES'
        },
        {   icon: Feather,
            numbers:'1 : 1',
            label:'STUDENT MENTOR RATIO'
        },
        {   icon: Feather,
            numbers:'800',
            label:'ENROLLMENT'
        },
        {   icon: Feather,
            numbers:'25',
            label:'AVERAGE CLASS SIZE'
        }

    ]

    const Believe =[
        {place:Confrence, sub:'ACADEMIC EXCELLENCE'},
        {place:Faith, sub:'FAITH'},
        {place:Inter, sub:'PARENT PARTNERSHIP'},
    ]

  return (
    <CounterCov>
        <div className='numbers'>
            <img src={CounterImg} alt="" />
            <div className='bg'>
                <div className='overlayimg'>
                    {Ratio.map((rte, index)=>{
                        return(
                            // <div className='cont' key={index}>
                            //         <div>
                            //             <img src={rte.icon} alt="" /> 
                            //         </div>
                            //          <div>
                            //             <p>{rte.numbers}</p>
                            //          </div>
                            //         <div>
                            //             <label htmlFor="">{rte.label}</label>
                            //         </div>
                            // </div>
                            <table key={index}>
                                    <tbody>
                                        <tr> 
                                            <td>   <img src= {rte.icon}alt="" />   </td>
                                        </tr>
                                        <tr> 
                                            <td> <p>{rte.numbers}</p> </td>
                                        </tr>
                                        <tr> 
                                            <td> <label htmlFor="">{rte.label} </label> </td>
                                        </tr>
                                    </tbody>
                                    
                            </table>
                        )
                    })

                    }
                </div>
            </div>
            
        </div>
        <div className='photos'>
            <div className='check'>
                    {Believe.map((bil,index) =>{
                    return(
                        <div className='evenst' key={index}>
                            <img src={bil.place} alt="" /> 
                            <div className='cover'>
                                <p>{bil.sub}</p> 
                            </div>
                        </div>
                    )
                })}
            </div>
                
            
        </div>
    </CounterCov>
  )
}


const CounterCov = styled.section`
    position:relative ;
    height: 55rem;


    .numbers{
        position: relative;
        height: 45rem;

        img{
            object-fit:cover ;
            height:100% ;
            width:100% ;
        }

        .bg{
            background-color:rgba(0,0,0,0.5) ;
            position:absolute ;
            top: 0;
            right: 0;
            left: 0;
            bottom:0 ;

        .overlayimg{
            display: grid;
            grid-template-columns:repeat(4, 1fr) ;
            justify-content: space-between;
            width: 80%;
            margin:0 auto ;
            align-items: center;

            table{


                tr{


                    td{
                        color:#fff ;
                        text-align:center ;
                        vertical-align:text-top ;
                        height: 100px;

                        img{
                            height:150px ;
                            width:150px ;
                        }
                        p{
                            font-size: 3rem;
                            font-weight: 900;

                        }
                        label{
                            font-size:2rem ;
                        }
                    }
                }
            }
        }

    }


    }

    .photos{
        display:flex ;
        justify-content:center ;
        position: relative;
        right: 0;
        left: 0;
        bottom: 200px;

        .check{
            display:grid ;
            grid-template-columns:repeat(3, 1fr) ;
            gap: 10rem;

            .evenst{
                width: 400px ;
                height:370px ;
                position:relative ;

                img{
                    height:100% ;
                    width:100% ;
                    object-fit:cover;
                }

                .cover{
                    background-color:rgba(0,0,0,0.3) ;
                    position:absolute ;
                    height:100% ;
                    width:100% ;
                    top:0 ;
                    vertical-align: center;

                    p{
                        position:absolute ;
                        bottom:0 ;
                        left:20px ;
                        color:#fff ;
                        font-size:20px ;
                    }
                }

    }

        }
        
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {


        display:none ;
    }
    
`