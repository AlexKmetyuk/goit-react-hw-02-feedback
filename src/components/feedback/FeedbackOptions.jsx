
export default function FeedbackOptions({ addBad, addGood, addNeutral }) {
    return (
    <div>
        <button className="btn" onClick={addGood}>Good</button>
        <button className="btn" onClick={addNeutral}>Neutral</button>
        <button className="btn" onClick={addBad}>Bad</button>
    </div>)
}