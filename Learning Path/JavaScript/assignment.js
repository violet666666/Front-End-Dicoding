//Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan 
//untuk menginisialisasi nilai pada variabel. Variabel yang akan diberikan nilai ditempatkan 
//pada sebelah kiri dan nilainya ditempatkan pada sebelah kanan (nilai dapat berupa variabel lain atau 
//nilai primitif, array, atau objek). Di antara keduanya terdapat operator assignment.

let x = 10;
let y = 5

x += y;

console.log(x);

/* output
15
*/
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;