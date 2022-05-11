import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../Assets/Background.png'





export default function Hero() {
  return (
   <Section>
       <BackgroundCover>
           <img src={Background} alt="" />
            <video src='../Assets/video-1.mp4' autoPlay loop muted />
       </BackgroundCover>
       <BackgroundContent>
            <div className='ContentCover'>
                <div className='Info'>
                    <label htmlFor="/">The Lagoon school</label>
                    <div className='comment'>Setting Standards For <br /> <Link to={'/'}>Long Term</Link> Student Success</div>
                </div>
                <div className='Play'>
                    <div className="playButton"></div>
                    <label htmlFor="/">WATCH VIDEO TOUR</label>
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
`