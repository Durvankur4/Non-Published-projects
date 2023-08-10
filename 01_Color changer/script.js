let body = document.querySelector("body")
let spans = document.querySelectorAll('span')


spans.forEach(box => {
    let color = box.id
    box.style.backgroundColor = color
    box.addEventListener('mouseover', function (e) {

        body.style.backgroundColor = e.target.id
    })
});

