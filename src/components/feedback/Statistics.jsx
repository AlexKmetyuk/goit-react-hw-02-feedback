export default function Statistics(props) {
    return (
        <>
            <ul>
                <li><span>Good: </span><span>{props.good}</span></li>
                <li><span>Neutral: </span><span>{props.neutral}</span></li>
                <li><span>Bad: </span><span>{props.bad}</span></li>
            </ul>
            <p>Total: {props.total}</p>
            <p>Positive feedback: {props.percentage}%</p>
        </>
    )
}