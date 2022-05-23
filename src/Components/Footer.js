import React from 'react';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png';
import Insta from '../Assets/Insta.png';
import Twitter from '../Assets/Twitter.png';
import Facebook from '../Assets/Facebook.png';

import {Link} from 'react-router-dom';


export default function Footer() {
    const Adress =[ {
        Logo:Logo,
        ParagraphOne:'Ladipo Omotesho Cole Street, Off Adewunmi Adebimpe Drive,Lekki Phase 1, Lekki - Epe Expressway Lagos P.O Box 71166 Victoria Island   Nigeria',
        FirstContact:'Primary Section (+234) 01 3426109',
        SecondContact:'Secondary Section (+234) 704 442 7923',
    }];

    const UseFul =[ 
        {title:'NAWA', link:'/' },
        {title:'Elara Study centre', link:'/' },
        {title:'Opus dei', link:'/' },
        {title:'wavecrest study centre', link:'/' },
        {title:'roseville school ', link:'/' },
        {title:'whitesands  school ', link:'/' },
     ];

     const Follow =[ 
        {Img:Facebook, link:'/' },
        {Img:Insta, link:'/' },
        {Img:Twitter, link:'/' },
        
       
     ];
  return (
    <FooterSection>
      <div className='col-1'>
          {Adress.map((add, index)=>{
              return(
                  <div key={index}>
                        <img src={add.Logo} alt="" />
                        <p>{add.ParagraphOne}</p>
                        <div>
                            <p>{add.FirstContact}</p>
                            <p> {add.SecondContact}</p>
                        </div>
                  </div>
              )
          })}
      </div>
      <div className='col-2'>
            <Header>Useful Links</Header>

              {UseFul.map((use, index)=>{
                  return(
                      <FooterLinks to={use.link}  key={index}>
                          {use.title}
                      </FooterLinks>
                  )
              })

              }
      </div>
      <div className='col-3'>
            <Header>Follow us</Header>
            <div className='social'>
                {Follow.map((follow, index)=>{
                    return(
                        <FollowLinks to={follow.link}  key={index}>
                            <img src={follow.Img} alt="social links" /> 
                        </FollowLinks>
                    )
                })

                }

            </div>

              

      </div>
    </FooterSection>
  )
}


const FooterSection = styled.section`
    display:grid;
    grid-template-columns: 1fr  1fr  1fr;
    gap:4rem;
    background:#0a545f;
    padding:40px 80px;
    overflow-x:hidden ;
    .col-1{


        p{
            font-size:clamp(.6rem, -0.875rem + 8.333vw, 1.2rem);
            color:#fff ;
        }
    }

    .col-2{
        display: flex;
        flex-wrap: wrap;

        a{
            width:50% ;
            color:#fff ;
            text-decoration:none ;
            font-size:clamp(1rem, -0.875rem + 8.333vw, 1.2rem);
            font-weight:400;
        }
    }

    .col-3{
            display: flex;
            flex-direction:column ;
            position:relative ;

            .social{
            width:100% ;
            position:relative ;
            display:flex ;
            gap:2rem;
            
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display:grid;
        grid-template-columns:repeat(1, 1fr);
        gap:4rem; 
        padding:20px 10px;

        .col-1{
            img{
                width:80%;
            }
        }
    }
`

const Header = styled.header`
    position:relative ;
    display:flex ;
    width:100% ;
    color:#fff ;
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.7rem);
    font-weight:900 ;
`;

const FooterLinks = styled(Link)`
        display:grid;
        grid-template-columns: 1fr  1fr  ;

        
`;

const FollowLinks = styled(Link)`
  
  img{
      height:50px ;
      width:50px;
      object-fit:contain ;
  }

`;