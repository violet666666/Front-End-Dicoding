const txtElement = ['Mahasiswa', 'Front-End Engineer', 'Freelancer'];
let count = 0;
let txtIndex = 0;
let currentText = '';
let words = '';

(function ketik() {
    if (count == txtElement.length) {
        count = 0;
    }
    currentText = txtElement[count];
    words = currentText.slice(0, ++txtIndex);
    document.querySelector('.efek-ketik').textContent = words;

    if (words.length == currentText.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ketik, 500);
})();