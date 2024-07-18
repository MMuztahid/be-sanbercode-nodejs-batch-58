let angka = 19;
let cekAngka = angka%2;
console.log('soal if else: ');
if ( cekAngka === 0 ) {
    console.log("angka genap")
} else {
    console.log("angka ganjil")
}

console.log('soal switch: ');
var hari = 2;
switch(hari) {
  case 1:   { console.log('senin'); break; }
  case 2:   { console.log('selasa'); break; }
  case 3:   { console.log('rabu'); break; }
  case 4:   { console.log('kamis'); break; }
  case 5:   { console.log('jumat'); break; }
  case 6:   { console.log('sabtu'); break; }
  case 7:   { console.log('minggu'); break; }
}