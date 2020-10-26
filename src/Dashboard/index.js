import React from 'react'
import TopNav from './TopNav'
import Content from './Content'
import {ThemeContext} from './theme_context'


export default class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            theme: 'dark'
        }
    }

    updateTheme = (theme) => {
        this.setState({theme})
    }

    render(){
        const {theme} = this.state

        return(
            <ThemeContext.Provider value={{
                theme,
                updateTheme: this.updateTheme,
            }}>
                <div className='dashboard'>
                    <TopNav/>
                    <Content/>
                </div>
            </ThemeContext.Provider>
        )
    }
}