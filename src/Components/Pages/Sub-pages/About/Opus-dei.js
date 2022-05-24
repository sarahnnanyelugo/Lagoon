import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'

export default function OpusDei() {
  return (
    <Container>
    <div className='placeholder'>
        <img src={Backdrop} alt="placeholder" />
      <div className='overlay'>

      </div>
    </div>
    <div className='content'>
      <header>OPUS DEI</header>
        <div>
          <h4>he Lagoon School is the first project of the Nigerian
Association for Women`s Advancement (NAWA), a not-
for-profit and non-governmental educational and social
trust dedicated to investing in the girl child for the
good of the societ</h4>
        </div>
        <div>
          <p>The Lagoon School is open to girls of all cultural,
religious and ethnic backgrounds. Our educational
model is based on our mission statement: Partnership
with parents to give an all-round education to each
child based on the dignity of the human person,
integrity, leadership qualities and academic
excellence.
</p>
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
    }
  }

  .content{
    display:grid ;
    grid-template-columns:repeat(2,1fr)

  }


  header{
    grid-column:1/3 ;
    text-align:center;
    color:red ;
    font-size:2rem;
    margin-top:30px;

  }

`