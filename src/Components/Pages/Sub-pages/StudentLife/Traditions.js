import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
// import { subRoute } from './Acaitems';
import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function Traditions() {
  // const currentPath = window.location.pathname;

  return (
    <Container>
      <div className='placeholder2'>
          <img src={Backdrop} alt="placeholder" />
        <div className='overlay'>
            {/* <ul>
                {subRoute?.map((sub, idx)=>{
                  return(
                      <li key={idx}>
                          <a className={sub.cName} href={sub.path}  
                          style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}>
                            {sub.title}
                          </a>
                      </li>
                  )
                  
                })
                }
              </ul> */}
        </div>
      </div>
      <div className='content'>
          <div className='first'>
              <span>
                  <h2>Lagoon Traditions</h2>
              </span>
             
                <h4>
                    Discover what it’s like to be an Lagoon Girl— a young woman who strives to develop her character,
                    intellect, and faith on her way to becoming a leader. Life at Lagoon is full of fun traditions that create a
                    vibrant community life and strengthen our students’ friendship and school pride. Over 20 years since the
                    school’s founding, these traditions continue to shape Lagoon's distinctive identity.
                </h4>
          </div>
          <div className='conimages'>
            {Trad.map(()=>{
              return(
                    <div className='service'>
                        <span>
                            <h2>ALL-SCHOOL SERVICEDAY</h2>
                        </span>
                        <div  className='holinds'>
                            <img src={Holder} alt="" />
                        </div>
                    </div>
              )
            })}
                
              <div className='alumni'>
                  <button>Meet an Alumni</button>
              </div>

          </div>
         
      </div>
    </Container>
  )
}


const Trad =[
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  }
]



const Container = styled.section`

  .placeholder2{
    height:37rem ;
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
        align-items:center ;
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
    grid-template-columns:repeat(1 1fr) ;
    gap:5rem;
    justify-content: center;

    .service{
      border:2px solid black ;
      padding:10px ;
      border-radius:20px ;

        &:nth-child(n+2){
          margin-top:20px
        }
      span{

        h2{
          font-weight:500;
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

      .holinds{
        width:80% ;
        margin:0 auto ;

        img{
          width:100% ;
          height:100% ;
          object-fit:cover ;
          }
      }
    }
    .alumni{
        justify-content:center ;
        display:flex ;

        button{
          color:#fff ;
          background-color:red;
          border:2px solid red ;
          padding:15px ;
          font-size:1.4rem ;
          transition:all .5s linear ;
          cursor: pointer;
          &:hover{
            color:red ;
            background-color:#fff ;
            border:2px solid red ;
          }
        }
    }
    
  }

   
   
  }


 

`