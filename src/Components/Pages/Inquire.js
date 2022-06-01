import React from 'react'
import styled from 'styled-components';

export default function Inquire() {

    const Check =[
        {
            title:'Inquire',
            link:'/admission/admission-proceedure',
        },
        {
            title:'Apply',
            link:'/admission/apply-to-lagoon',
        },
        {
            title:'Visit Us',
            link:'/about/virtual-tour',
        }
    ]

  return (
    <List>
        {Check.map((check, idx)=>{
            return(
                <li key={idx}>
                    <a href={check.link}>{check.title}</a>
                </li>
            )
        })
            
        }
    </List>
  )
}


const List = styled.ul`
    display:flex ;
    width:90% ;
    justify-content:space-around ;
    list-style:none ;
    transition: all .5s linear ;
    li{
        border:2px solid red ;
        padding:10px 10px ;
        width:20% ;
        text-align:center ;
        cursor: pointer;
        &:hover{
            background-color:red ;
            
            a{
                color:#fff; 
            }
                

            }

        a{
            font-size: 22px;
            color:red ;
            font-weight:900 ;
            text-decoration:none;
            width:100% ;
            height:100% ;
            position:relative ;
            
        }
    }
    

`