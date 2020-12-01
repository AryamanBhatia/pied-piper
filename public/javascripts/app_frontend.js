console.log('Client message is in')


const submitButton = document.querySelector('form')
const user_credit_cardinfo = document.querySelector('input')
const return_value = document.getElementById('print')
const viewButton = document.getElementById('view_button')
const deleteButton = document.getElementById('delete_button')

submitButton.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('add button pressed')
    const credit_cardinfo = user_credit_cardinfo.value

    console.log(credit_cardinfo)
    fetch('http://localhost:3000/process_creditcard?creditcard=' + credit_cardinfo).then((response) => {
        response.json().then((data) => {
            return_value.textContent = data.products
        })
    })
})


deleteButton.addEventListener('click', (e) => {
    e.preventDefault()

    const credit_cardinfo = user_credit_cardinfo.value

    fetch('http://localhost:3000/delete_creditcard?creditcard=' + credit_cardinfo).then((response) => {
        response.json().then((data) => {
            return_value.textContent = data.products
        })
    })
})



viewButton.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('hi')

    const credit_cardinfo = user_credit_cardinfo.value

    fetch('http://localhost:3000/view_creditcard?creditcard=' + credit_cardinfo).then((response) => {
        console.log('hello attu')
        response.json().then((data) => {
            var json = JSON.stringify(data)
            console.log(json)
            return_value.textContent = json
        })
    })
})
// const saveDetails = (credit_cardinfo) => {
//     const dataJSON = JSON.stringify(credit_cardinfo)
//     fs.writeFileSync('credit_card_info.json', dataJSON)
// }


// const loadDetails = () => {
//     try {
//         const dataBuffer = fs.readFileSync('credit_card_info.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
//} 



