function solvable(arr){
    inv = 0;
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]) inv++;
            if(arr[i] == 0 && i%2==1) inv++;
        }
    }
    if(inv%2==1) return false;
    else return true;
}

//The goal state is 1,2,3,4,5,6,7,8,0

//Example using string seperated with -
str = "0-1-2-4-6-3-7-5-8".split("-");
console.log("Solvable: "+solvable(str));

//Example usage using array
arr = [0,1,2,3,4,5,6,7,8];
console.log("Solvable: "+solvable(arr));
