import React from 'react'
import styled from 'styled-components';
import ExploreOne from '../Assets/ExploreOne.png'
import ExploreTwo from '../Assets/ExplaoreTwo.png'

export default function Welcome() {
    const Message = [
        {
            Heading :'Welcome to the Lagoon School',
            Paragraph1:"The Lagoon School aims at investing in the N igerian girl child for the good of the society. W e have both  primary and secondary sections. O ur school has a reputation of high moral and academic standards. W e have  been able to achieve these through our mission : ‘ partnership with the parents to give an all-round education to the students, based on the dignity of the human person, integrity, leadership qualities and academic excellence ’ and our vision : ‘ Christian I dentity ’ ",
            Button:"READ MORE FROM MRS ISEBOR MARGARET| THE SCHOOL HEAD"
        }
    ];

    const Mission = [
        {
            Heading :'Mission',
            Paragraph1:"Partnership with parents to give an  all-round education to each   student, based on Christian  principles, with emphasis on the  dignity of the human person, integrity, leadership qualities and  academic excellence.",
            
        },
        {
            Heading :'Vission',
            Paragraph1:"To see every Lagoon student equipped with an integral education which enables her to play her unique role in the home,  work place and the larger society ",
        },
        {
            Heading :'Core values',
            Paragraph1:"<ol> <li>hello</li></ol> ",
        }

    ];


    const Explore =[
        {
            Image:ExploreOne,
            Section:'Primary Section',
            Reciept:'Reception to Year 6'
        },
        {
            Image:ExploreTwo,
            Section:'Primary Section',
            Reciept:'Reception to Year 6'
        }
    ]




  return (
    <Section>
        {Message.map((msg,index) =>{
            return(
                <div className="school" key={index}>
                    <div className="intro">
                        
                        <h4>{msg.Heading}</h4>
                        <p>{msg.Paragraph1}</p>
                        <button>{msg.Button}</button>
                    </div>
                </div>
            )
        })

        }
        
        <Vision>
            <div className='box-container'>
                {Mission.map((mission, index) =>{
                    return(
                           <div className='box'  key={index}>
                                <h4>{mission.Heading}</h4>
                                <p>{mission.Paragraph1}</p>
                            </div>
                    )
                } )}    
            </div>
        </Vision>
        
        <ExploreCov>
                <div className='heading'>
                    <h4>Explore more</h4>
                </div>
                <div className='expcov'>
                    {Explore.map((exp, index)=>{
                        return(
                            <div key={index}>
                                <img src={exp.Image} alt="" />
                                    <h6>{exp.Section}</h6>
                                    <p>{exp.Reciept}</p>
                            </div>
                        )
                    })
                        
                    }
                </div>
        </ExploreCov>
    </Section>
  )
}


const Section = styled.section`


    .school{
        margin-top:5rem ;

        .intro{
            display:flex ;
            flex-direction:column;
            text-align:center ;
            justify-content:center ;
            width:80% ;
            margin:0 auto ;

            h4{
                font-size:clamp(2rem, 10vw, 2.5rem) ;
                color:#f63a32 ;
                margin: 10px auto;
                width: 80%;
                border-top:3px solid #f63a32;
                padding-top:1rem ;
                border-bottom:3px solid #f63a32;
                padding-bottom:1rem ;
                /* &::before{
                    content: '';
                    border-top: 3px solid #f63a32;
                    width: 60rem;
                    height: 2px;
                    margin-left: -8%;
                    position: absolute;
                    margin-top:-20px;
                }
                &::after{
                    content: '';
                    border-bottom: 3px solid #f63a32;
                    width: 52%;
                    height: 2px;
                    margin-left: -43%;
                    position: absolute;
                    margin-top: 63px;
                } */
            }

            p{
                font-size:clamp(1.5rem, 6vw, 1.7rem ) ;
                line-height:40px;
            }

            button{
                padding:20px ;
                width:70% ;
                margin:0 auto ;
                font-size:clamp(1.5rem, 6vw, 1.7rem ) ;
                border:0;
                background-color:#f63a327d;
                color:#fff ;
                font-family:monseratSemi;
                transition: all 1.5s ease linear ;
                &:hover{
                    background-color:#f63a32;
                    cursor: pointer;
                }
            }
           
        }
    }
`

const Vision = styled.div`


    .box-container{
        display:flex ;
        justify-content:space-between;
        width:80%;
        margin:8rem auto;
        .box{
            border:2px solid #f63a32;
            border-radius:5px;
            width:30% ;
            max-width:400px ;
            text-align:center ;
            padding:10px ;
            h4{
                font-size:clamp(1rem ,6vw, 1.9rem )
            }

            p{
                text-align:center ;
                font-size:clamp(1.5rem,6vw,1.7rem )
            }
        }
    }

`

const ExploreCov = styled.div`
    width:80% ;
    margin:0 auto ;
    text-align:center ;

.expcov{
    color:red ;
    display: flex ;
   

    div{
        display:flex ;
        flex-direction:column ;
        text-align:center ;
        justify-content:center ;
    }
}
`