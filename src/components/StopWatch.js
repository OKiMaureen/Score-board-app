import React, {Component} from 'react'

export default class StopWatch extends Component {
    state= {
        isRunning: false ,
        elapsedTime: 0,
        prevTime: 0,
    }

    componentDidMount(){
        this.intervalId = setInterval(() => this.tick(), 100)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    tick = () => {
        if (this.state.isRunning){
            const now = Date.now()
            this.setState(prevState =>{
                return {
                    prevTime: now,
                    elapsedTime: prevState.elapsedTime + (now-this.state.prevTime)
                }
            })
        }
        

    }

    handleStopWatch =()=>{
        this.setState(prevState => {
            return {
                isRunning: !prevState.isRunning
            }
        })
        if(!this.isRunning){
            this.setState({
                prevTime: Date.now() 
            });
        }
    }

    handleReset =() =>{
        this.setState({
            elapsedTime:0,
        });

    }
    
    render (){
        let seconds = Math.floor(this.state.elapsedTime/1000)
        return (
            <div className="stopwatch">
                <h2>Stop Watch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopWatch}>{this.state.isRunning? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
