import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import Holder from '../../../../Assets/ExplaoreTwo.png'
// import {Link} from 'react-router-dom';
import { subRoute } from './AboutItems';



export default function Welcome(props) {

  // const {menuArray} = props;

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
        {/* <header>Welcome to The Lagoon School</header> */}
          <div className='first'>
              <span>
                  <h2>WHY LAGOON?</h2>
              </span>
              <h4>
                The Lagoon School is open to girls of all cultural, religious and
                ethnic backgrounds. Our educational model is based on our
                mission statement: Partnership with parents to give an all-round
                education to each child based on the dignity of the human
                person, integrity, leadership qualities and academic excellence.
              </h4>
              <h4>
                  We help young women to become leaders who are called to
                  greatness. Every aspect of school life provides an occasion to
                  nurture the education of the whole person, including our
              </h4>
              <ul>
                  <li>rigorous and engaging liberal arts curriculum</li>
                  <li>outstanding faculty and staf</li>
                  <li>collaboration with parent</li>
                  <li>individualized mentoring progra</li>
                  <li>opportunities for spiritual growth</li>
                  <li>ethic of service and community outreach</li>
                  <li>family atmosphere and tradition</li>
                  <li>rich student lif</li>
                  <li>study abroad opportunitie</li>
                  <li>effort to do ordinary things extraordinarily well for love of God</li>
              </ul>

              <button>MEET A LAGOON STUDENT</button>
          </div>
          <div className='second'>
              <div className='img-hold'>
                  <img src={Holder} alt="placeHolder" />
              </div>
              <div className='cont-hold'>
                <span>
                      <h2>WHAT PARENTS ARE SAYING</h2>
                  </span>
                <p>"Where Girls are Called to Greatness' isn’t just a tagline or a
                    marketing tool, it is woven into the fabric of everything Montrose
                    does. The girls are constantly encouraged to be the best version
                    of themselves all the while with amazing support from teachers,
                    mentors, coaches, administration and their peers."</p>
              </div>

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
    display:grid ;
    grid-template-columns:repeat(2,1fr);
    width:90% ;
    margin:5rem auto 0 auto ;


   .first{
        span{

            h2{
              position:relative ;
              
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

   .second{


      .img-hold{
        display:flex ;
        justify-content:flex-end ;
        /* flex-direction:column ; */
        img{
          height:400px ;
          width: 500px;
        }

        

   }
  
  .cont-hold{
    span{

        h2{
          position:relative ;
          
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

        p{
          text-align: right;
          font-size: 1.1rem;
        }
  }
  
  }

    h4{
      font-size:1.1rem ;
      line-height:25px ;
      letter-spacing:1px ;
      font-weight:500 ;
    }
    ul{
      font-size:1.1rem ;
      line-height:25px ;
      letter-spacing:1px ;
      font-weight:500 ;
    }
  }


  /* header{
    grid-column:1/3 ;
    text-align:center;
    color:red ;
    font-size:2rem;
    margin-top:30px;

  } */

`