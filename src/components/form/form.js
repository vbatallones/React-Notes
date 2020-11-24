
import './form.scss';

function Form({handleRoute, handleList, handleChange, method, url, body}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        let options = { method };
        if (body) options.body = body;
        console.log(body)
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data)

        handleList({
            count: body.length,
            results: data,
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="url-form">
                <label>HTTP:</label>
                <input type="text" name="url" onChange={handleChange} />
                <input type="submit" value="Route Me" />
            </div>

            <div className="route-form">
                <input type="button" onClick={handleRoute} value="GET" />
                <input type="button" onClick={handleRoute} value="POST" />
                <input type="button" onClick={handleRoute} value="PUT" />
                <input type="button" onClick={handleRoute} value="DELETE" />
            </div>
            <textarea className="result-area" onChange={handleChange} name="body" rows="10" cols="30"/>
        </form>
    )
}


export default Form