import React from 'react'
import TopNav from './TopNav'
import Content from './Content'


export default class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            theme: 'light'
        }
    }

    updateTheme = (theme) => {
        this.setState({theme})
    }

    render(){
        const {theme} = this.state

        return(
            <div className='dashboard'>
                <TopNav theme={theme} updateTheme={this.updateTheme}/>
                <Content theme={theme}/>
            </div>
        )
    }

}