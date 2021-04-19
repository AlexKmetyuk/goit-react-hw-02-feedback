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

    addFeedback = event => {
        this.setState((prevState) => ({
            [event.target.name] : prevState[event.target.name] + 1
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

        const { good, neutral, bad } = this.state;

        return (
        <div>
            <FeedbackOptions addFeedback={this.addFeedback}/>
                <h3>Statistics</h3>

                {neutral + bad + good > 0
                    ?
                    <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
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