import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        const {valueArray,assignValue} = this.props
        const MaxScore = valueArray.length
        const matched = valueArray.filter((item)=>{
            return item.matched===true
        })
        
        if(MaxScore===matched.length && MaxScore > 0){
            alert('congratulations')

            setTimeout(()=>{
                assignValue()
                // const newArray = valueArray.map((item)=>{
                //     item.matched=false
                // } 
                // )
                // this.setState({valueArray:newArray})
            },1000)
        }
        return (
            <div className='score'>
                {matched.length}/{MaxScore}
            </div>
        )
    }
}

