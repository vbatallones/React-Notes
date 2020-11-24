import './history.scss'
function History ({handleHistory, history}) {
    return (
        <ul>
        {history.map((list, i ) => {
            return <li className="history" onClick={() => handleHistory({routeMethod: list.routeMethod, url: list.url, response: list.response})} key={i}>{list.routeMethod} {list.url}</li>
        })}
        </ul>
    )
}

export default History