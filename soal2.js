const array1 = [5,9,8,5,4,2];
var tambah = 0;
for (let i = 0; i < array1.length; i++){
    tambah = tambah + array1[i];
}

if(tambah > 30){
    console.log(tambah);
    console.log("its big")
} else {
    console.log(tambah);
}
