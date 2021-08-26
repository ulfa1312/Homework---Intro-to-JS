var nilai = [2,4,1,12,3,8,15,5,6]  
var max = 0;
var min = 0;    
for(var i=0;i<nilai.length;i++){    
    if(i == 0){ 
        max = nilai[i];
    } else {
        if(nilai[i] > max){
            max = nilai[i];
        }
    }              
} 

for(var i=0;i<nilai.length;i++){    
    if(i == 0){ 
        min = nilai[i];
    } else {
        if(nilai[i] < min){
            min = nilai[i];
        }
    }              
}

console.log(max);
console.log(min);