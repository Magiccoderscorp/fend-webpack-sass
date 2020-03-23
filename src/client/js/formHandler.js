function handleSubmit(event) {

    event.preventDefault()

    let formText = document.getElementById('inputText').value

    const isValidText = Client.checkInputText(formText)

    if (isValidText) {
        const data = {
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
            })

    } else {
        console.log("::: dio falso :::")
    }

}

export { handleSubmit }
