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
            {EventContent.map((ent, index)=>{
                return(
                    <div className='content' key={index}>
                        <div className='holder-img'>
                            <img src={ent.holder} alt="holder" />
                        </div>
                        <div>
                            <h4>{ent.header}</h4>
                            <label >{ent.date}</label>
                            <p>{ent.ceremony}</p>
                        </div>
                    </div>
                )
            })}
        </Events>
        <Dates>
            <div>
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
            <div>
                <button>View Calendar</button>
            </div>
        </Dates>
    </CalendarSection>
  )
}


const CalendarSection = styled.section`
    display:grid ;
    grid-template-columns:1fr 500px ;
    width:80% ;
    margin:0 auto ;

`

const Events = styled.div`


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
        
    }

`

const Dates = styled.div`

    .arrange{
        display:grid;
        grid-template-columns: 80px 1fr;
        grid-gap: 40px;
        margin-top:40px;
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
        }

        .comment{
            height:100px ;
            display:flex ;
            width:100% ;
            flex-direction:column ;
            justify-content:center ;
            align-items:flex-start ;
        }
    }
`