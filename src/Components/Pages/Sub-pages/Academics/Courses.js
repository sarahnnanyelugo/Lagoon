import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './Acaitems';
// import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function Courses() {
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
                  <h2>Courses</h2>
              </span>

              <div className='lists'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>SELECT A SCHOOL LEVEL</h2>
                            </td>
                        </tr>
                          <tr>
                            <td>
                                  <label>
                                        <p>SCHOOL LEVEL</p>
                                        <input list="classes" placeholder='choose' name="myBrowser" />  
                                  </label>   
                              <datalist id="classes">
                                  <option value=" Primary" to='/' />
                                  <option value=" Secondary" />
                              </datalist>
                            </td>
                          </tr>
                    </tbody>
                </table>
                
                
              </div>
              
                
                
                  
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h4>
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
              margin: 5rem 0 ;
              
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

              .lists{

                table{
                    width:100% ;
                    border-collapse:collapse;
                    tbody{

                      tr{
                        text-align:left ;
                        vertical-align:center ;
                        align-items:center ;
                        
\                        &:first-child{
                          background:#d9d9d9;
                        }
                        &:last-child{
                          height:10rem ;
                        }
                        
                        td{
                          border:2px solid #000 !important;
                          padding-left: 5rem;
                          label{


                            p{
                              padding:0 ;
                              margin: 10px 0 ;
                              font-style:italic;
                              font-size:18px ;
                              align-items:center ;
                            }

                            input{
                              height: 30px;
                              width: 15%;
                              position:relative ;
                              &::after{
                                content:'hiuwejijw>' ;
                                position:absolute ;
                                right:0 ;
                              }

                              &::placeholder{
                                color:#000 ;
                                font-size:18px ;
                                text-transform:uppercase ;
                                vertical-align:center ;
                                align-self:center ;
                                padding-left:10px;
                              }
                            }
                          }
                        }
                      }
                    }
                }
              }
           
   }



   
   
  }


 

`