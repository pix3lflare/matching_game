import React from 'react'
import TopNav from './TopNav'
import Content from './Content'


export default class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard'>

                <TopNav 
                theme='light'
                />

                <Content 
                theme='light'
                />
            </div>
        )
    }
}