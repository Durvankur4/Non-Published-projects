
let bmiSpan = document.getElementById('bmi_span')
let button = document.getElementById('button')

button.addEventListener('click', () => {
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')

    if (height.value && weight.value) {

        height = parseInt(height.value)
        weight = parseInt(weight.value)

        let bmi = weight / Math.pow(height, 2);
        bmiSpan.innerText = bmi
    }
    else {
        alert('please enter your height and weight')
    }
}
)

