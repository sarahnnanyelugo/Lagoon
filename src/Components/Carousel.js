import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Confrence from '../Assets/Confrence.png'


function Carousel() {
    
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 100, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        };

        

  return (
    <>
      <Slider {...settings}>
            <SlickContent>
                <div className='cont'>
                    <div>
                        <label>ONLY AT LAGOON SCHOOL</label>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minimx
                            veniam, quis nostrud e ercitation  x ea
                            ullamco laboris nisi ut aliquip e
                            commodo consequat.
                        </p>
                    </div>
                    <div  className='image'>
                        <img src={Confrence} alt="" />
                        <h4>sabella Nweze</h4>
                    </div>
                </div>
                
            </SlickContent>
            <SlickContent>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit!</h4>

            </SlickContent>
           
      </Slider>
    </>
  )
}

export default Carousel


const SlickContent  = styled.div`
    .cont{
        display:grid ;
        grid-template-columns: 1fr 800px;
        width:90% ;
        margin:0 auto ;
    }

    .image{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: end;


        image{
            position: relative;
            object-fit: cover;
            width: 500px;
            height: 300px;
            border-radius: 20px;
        }
    }
`