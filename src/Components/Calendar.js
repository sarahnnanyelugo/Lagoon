import React from 'react';
import styled from 'styled-components';
import Cover from '../Assets/Cover.png';
import Inter from '../Assets/Interhouse.png'


export default function Calendar() {

    const EventDates =[
        {
            date:'27 April',
            ceremony:'World Book Day'
        },
        {
            date:'05 May',
            ceremony:'Art Day'
        },
        {
            date:'27 May',
            ceremony:'Children’s Day'
        }
    ]

    const EventContent =[
        {
            holder:Inter,
            header:'Primary section Interhouse Sports',
            date:'3/10/2022',
            ceremony:'lore dolore magna aliqua. Ut enim ad minim consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, veniam,'
        },
        {
            holder:Cover,
            header:'Primary section Interhouse Sports',
            date:'3/10/2022',
            ceremony:'lore dolore magna aliqua. Ut enim ad minim consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, veniam,'
        }
    ]

  return (
    <CalendarSection>
        <Events>
            <div className='upcoming'>
                <h4>Recent Posts</h4>
            </div>
            {EventContent.map((ent, index)=>{
                return(
                    <div className='content' key={index}>
                        <div className='holder-img'>
                            <img src={ent.holder} alt="holder" />
                        </div>
                        <div className='pesp'>
                            <h4>{ent.header}</h4>
                            <label >{ent.date}</label>
                            <p>{ent.ceremony}</p>
                        </div>
                    </div>
                )
            })}
        </Events>
        <Dates>
            <div className='upcoming'>
                <h4>UPCOMING EVENTS</h4>
            </div>
                {EventDates.map((duty, index)=>{
                    return(
                       <div className='arrange' key={index}>
                           <div className='date'>{duty.date}</div>
                           <div className='comment'>{duty.ceremony}</div>
                       </div>
                    )
                })}
                <button>View Calendar</button>
        </Dates>
    </CalendarSection>
  )
}


const CalendarSection = styled.section`
    display:grid ;
    grid-template-columns:1fr 500px ;
    width:85% ;
    margin:7rem auto ;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display:grid ;
        grid-template-columns:1fr  ;
    }
`

const Events = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .upcoming{

h4{
    color: #ff000070;
    font-size: clamp(1.3rem,6vw,1.5rem);
    position: relative;

    &::before{
        content: '';
        border-bottom: 5px solid red;
        width: 9rem;
        position: absolute;
        bottom: 0;
        top: 30px;
    }
}
}
    .content{
        display:grid ;
        grid-template-columns: 400px 1fr ;
        grid-gap:2rem;

        .holder-img{
            height:300px ;

            img{
                height:100% ;
                width:100% ;
                object-fit:cover ;
                border-radius:20px ;

            }

        }

        .pesp{

            h4{
                color:red ;
                font-size:1.3vw;
                margin:0 0 10px 0 ;
            }

            label{
                color:rgba(0, 0, 0,0.5) ;
            }

            p{
                font-size:clamp(1.3rem, 6vw,1.3rem);
            }
        }
        
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .content{
        display:grid ;
        grid-template-columns: repeat(1,1fr) ;
        grid-gap:2rem;

        .holder-img{
            height:300px ;

            img{
                height:100% ;
                width:100% ;
                object-fit:cover ;
                border-radius:20px ;

            }

        }

        .pesp{

            h4{
                color:red ;
                font-size:4.5vw;
                margin:0 0 10px 0 ;
            }

            label{
                color:rgba(0, 0, 0,0.5) ;
            }

            p{
                font-size:clamp(1.3rem, 6vw,1.3rem);
            }
        }
        
    }
    }
`

const Dates = styled.div`
    padding-left: 20%;
    position:relative ;
    .upcoming{

        h4{
            color: #ff000070;
            font-size: clamp(1.3rem,6vw,1.5rem);
            position: relative;

            &::before{
                content: '';
                border-bottom: 5px solid red;
                width: 9rem;
                position: absolute;
                bottom: 0;
                top: 30px;
            }
        }
    }

    .arrange{
        display:grid;
        grid-template-columns: 80px 1fr;
        grid-gap: 40px;
        margin-top:40px;
        padding-left: 30px;
        z-index:10 ;
        &::before{
            content: '';
            height: 27%;
            border-left: 2px solid #000;
            position: absolute;
            margin-top: -31px;
            left: 11rem;
            z-index: -10;
        }

        .date{
            height:100px ;
            display:flex ;
            width:100% ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;
            border:3px solid #000 ;
            font-size: 23px;
            text-align: center;
            background-color:#fff ;
        }

        .comment{
            height:100px ;
            display:flex ;
            width:100% ;
            flex-direction:column ;
            justify-content:center ;
            align-items:flex-start ;
            font-size:clamp(1.3rem, 6vw,1.5rem);

        }
    }

    button{
        width:10rem ;
        font-size:20px;
        height:40px ;
        background-color:red;
        border:none ;
        font-weight:900;
        padding:10px ;
        color:#fff ;
        margin-top:5rem;

        &:hover{
            cursor: pointer;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {

        padding-left: 2%;
        .arrange{
        display:grid;
        grid-template-columns: 80px 1fr;
        grid-gap: 40px;
        margin-top:40px;
        padding-left: 30px;
        z-index:10 ;
        &::before{
            content: '';
            height: 27%;
            border-left: 2px solid #000;
            position: absolute;
            margin-top: -31px;
            left: 22%;
            z-index: -10;
        }}
    }
`