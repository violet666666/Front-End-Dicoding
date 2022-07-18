// global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b';

    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total)

/* output
400
Mungkin kita berharap nilai total akan tetap 9. Mengingat variabel total pada fungsi multiply, seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal, kita tidak menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.
Perlu kita perhatikan bahwa, ketika kita lupa menuliskan keyword let, const atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan variabel tabrakan (collision) terjadi.
*/