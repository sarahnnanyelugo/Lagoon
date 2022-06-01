import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './Acaitems';
import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function PrimarySchool() {
  return (
    <Container>
      <div className='placeholder'>
          <img src={Backdrop} alt="placeholder" />
        <div className='overlay'>
            <ul>
                {subRoute?.map((sub, idx)=>{
                  return(
                      <li key={idx}>
                          <a className={sub.cName} href={sub.path}>
                            {sub.title}
                          </a>
                      </li>
                  )
                  
                })
                }
              </ul>
        </div>
      </div>
      <div className='content'>
          <div className='first'>
              <span>
                  <h2>Primary Section</h2>
              </span>
             
                <h4>
                    <mark>Laying the Groundwork. Strengthening the Foundation. Building the Bridge.</mark>
                          In the primary school,
                          girls develop curiosity, tenacity and intellectual carefulness. They research problems, brainstorm
                          solutions, create prototypes, test and revise.
                </h4>
          </div>
          <div className='conimages'>
                <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div>
                <div className='full'>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                          Small classes averaging 15 encourage a high level of rapport between students and teachers. Our
                          middle school faculty know how to tap and channel the intellectual energy and passion of middle
                          school girls.
                        </p>
                        <p>
                            During the primary school years, students gradually take ownership of their learning. They grow
                            in self-knowledge, build and value friendships, and come to understand their responsibility to
                            each other as well as to the wider community.
                        </p>
                        <p>
                            Our primary school curriculum sets girls up for success in our rigorous upper school college
                            preparatory, honors lists, while a wide variety of cocurricular activities allows them to explore and
                            develop interests.
                        </p>
                    </div>
                    
                </div>
                {/* <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={Holder} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                </div> */}
          </div>
         
      </div>
    </Container>
  )
}




const Container = styled.section`

  .placeholder{
    height:25rem ;
    position:relative ;

    img{
      width:100% ;
      height:100% ;
      object-fit:cover ;
    }

    .overlay{
      position:absolute ;
      top:0 ;
      background-color:rgba(0,0,0,0.5) ;
      width:100% ;
      height:100% ;
      ul{
        padding:0 ;
        list-style:none ;
        display:flex ;
        justify-content:center ;
        flex-wrap:wrap ;
        gap:2rem;
        /* height:100% ; */
        align-items:baseline ;
        position: absolute;
        bottom: 30%;
        width:100% !important;

        li{
          display:flex ;
          flex-direction:column ;
          /* height:70% ; */
          align-items:baseline ;
          justify-content:flex-end ;

          a{
            text-decoration:none ;
            font-size:1.5rem;
            color:#fff ;

            &:hover{
              color: red;
            }
          }
        }
      }
    }
  }

  .content{
    width:90% ;
    margin:5rem auto 0 auto ;
    display:flex ;
    flex-direction:column ;

   .first{
        span{

            h2{
              position:relative ;
              font-size:1.6rem ;

              
              &::before{
                content: '';
                border-bottom: 5px solid red;
                width: 5rem;
                position: absolute;
                bottom: 0;
                top: 30px;
              }
            }
            }
            h4{
                font-size:1.4rem ;
                line-height:25px ;
                letter-spacing:1px ;
                font-weight:500 ;
                font-weight:900 ;
              }
            button{
              width:100% ;
              /* height:4rem ; */
              font-size:1.2rem;
              padding:10px ;
              background-color:white;
              border:2px solid red ;
              color:red ;
            }
   }

  .conimages{
    display:grid ;
    grid-template-columns:repeat(3,20rem) ;
    /* gap:5rem; */
    justify-content: space-around;

    .full{
      grid-column:1/4;
      margin-top:5rem ;
      img{
        width:100% ;
      height:467px ;
      object-fit:cover ;
      }

      p{
        font-size:20px;
        font-weight:900;
      }
    }

    img{
      width:100% ;
      height:100% ;
      object-fit:cover ;
    }
  }

   
   
  }


 

`