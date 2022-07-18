/* Dengan for..of, nilai tiap array akan diinisialisasi pada variabel baru yang kita tentukan 
pada tiap proses looping-nya. Jumlah proses looping nya pun akan menyesuaikan dengan ukuran dari array. 
Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, 
akses tiap nilainya dan simpan pada variabel arrayItem”. 
Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray.
*/

let myArray = ["Harry", "Ron", "Hermione", "Tom"];

for (const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Harry
Ron
Hermione
Tom
*/