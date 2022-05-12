import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Background from '../Assets/Background.png'
import Video from '../Assets/video-1.mp4'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';



export default function Hero() {
  return (
   <Section>
       <BackgroundCover>
           {/* <img src={Background} alt="" /> */}
            <video src={Video} autoPlay loop muted />
       </BackgroundCover>
       <BackgroundContent>
            <div className='ContentCover'>
                <div className='Info'>
                    <label htmlFor="/">The Lagoon school</label>
                    <div className='comment'>Setting Standards For <br /> <Link to={'/'}>Long Term</Link> Student Success</div>
                </div>
                <div className='play'>
                    <div className='cover'>
                        <Button>
                            <FontAwesomeIcon icon={faPlayCircle} />
                        </Button>
                        <label htmlFor="/">WATCH VIDEO <br /> TOUR</label>
                    </div>
                </div>
            </div>
       </BackgroundContent>
   </Section>
  )
}


const Section = styled.section`
position:relative ;
`

const BackgroundCover = styled.div`
    height: 100vh;
    z-index:1;

    img{
        width: 100%;
        filter: brightness(60%);
        height: 100vh;
        object-fit: cover;
    }

    video{
        width: 100%;
        filter: brightness(60%);
        height: 100vh;
        object-fit: cover;
    }

`

const BackgroundContent = styled.div`
        display: flex;
        flex-direction: column;
        text-align:center ;
        justify-content:center ;
        position:absolute ;
        top:0 ;
        height:100% ;
        width:100% ;
        align-items:center ;
        z-index: 0;
       .ContentCover{
           text-align:center ;
           display:grid ;
           grid-template-columns: 1fr 44rem;
           width:90% ;
           margin: 0 auto ;
           justify-content:space-between ;

           .Info{
               display:flex;
               flex-direction:column;
               text-align:left ;
               gap:1rem;
               label{
                   font-size:clamp(2rem, 8vw, 2rem);
                   color:#fff;
                   text-transform:uppercase;
                   font-family:monseratSemi;

               }

               .comment{
                font-size:clamp(3rem, 10vw, 4rem);
                   color:#fff; 
                   font-weight:900px;
                   font-family:monseratSemi;
                   flex-wrap:wrap;
                   a{
                       margin:0 ;
                       padding:0 ;
                       width: 0;
                       color:#e21020 ;
                   }
               }
           }
       } 

       .play{
           display:flex ;
           flex-direction:column ;
           text-align:center ;
           justify-content:center ;

           .cover{
            display: flex;
            text-align: center;
            justify-content: center;
            gap: 2rem;
            align-items: center;

            label{
                color:#fff ;
                font-size:clamp(2rem, 8vw, 2rem);
                text-align:left ;

            }
           }
       }
`

const Button = styled.button`

       height:10rem ;
       width:10rem ;
       border-radius:100px;
       background-color:transparent ;
       border:2px solid #fff ;

       svg{
           height:5rem ;
           color:#fff ;
           cursor: pointer;
       }

`