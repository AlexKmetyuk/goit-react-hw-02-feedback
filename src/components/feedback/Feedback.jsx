import { Component } from 'react'
import './feedback.css'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from '../notification/Notification'

class Feedback extends Component {

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad
    }
    
    addGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }))
    }

    addNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1
        }))
    }

    addBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1
        }))
    }

    countTotalFeedback = () => {
        return this.state.neutral + this.state.bad + this.state.good
    }

    countPositiveFeedbackPercentage = () => {
        const percent = ((this.state.good / (this.state.neutral + this.state.bad + this.state.good)) * 100).toString()
        if (percent.length > 2) {
            return percent.substring(0,4)
        } else return percent
    }


    render() {
        return (
        <div>
            <FeedbackOptions addGood={this.addGood} addNeutral={this.addNeutral} addBad={this.addBad}/>
                <h3>Statistics</h3>

                {this.state.neutral + this.state.bad + this.state.good > 0
                    ?
                    <Statistics good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    percentage={this.countPositiveFeedbackPercentage()}
                    />
                    :
                    <Notification title={"No feedback given"} />
                }
                
        </div>)
    }
}

export default Feedback