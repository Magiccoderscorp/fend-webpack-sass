function handleSubmit(event) {

    event.preventDefault()

    let formText = document.getElementById('inputText').value

    const isValidText = Client.checkInputText(formText)

    const isURL = Client.isURL(formText);

    if (isValidText) {
        const data = {
            isURL: isURL,
            inputText: formText,
        };
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/sentiment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            })
            .then(function (dataResult) {
                document.getElementById('subjectivity').innerHTML = dataResult.subjectivity
                document.getElementById('polarity').innerHTML = dataResult.polarity
                document.getElementById('error').innerHTML = '';
            })

    } else {
        document.getElementById('error').innerHTML = 'Text or URL is required'
    }

}

export {handleSubmit}
