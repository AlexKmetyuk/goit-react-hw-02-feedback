
export default function FeedbackOptions({ addFeedback }) {
    return (
    <div>
        <button className="btn" name="good" onClick={addFeedback}>Good</button>
        <button className="btn" name="neutral" onClick={addFeedback}>Neutral</button>
        <button className="btn" name="bad" onClick={addFeedback}>Bad</button>
    </div>)
}