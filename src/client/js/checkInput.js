function checkInputText(inputText) {

    if(inputText === ''){
        alert('Please insert text')
        return false
    }
    return true;
}

export { checkInputText }
