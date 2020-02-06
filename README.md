# 8-puzzle-is-solvable-javascript
Simple Javascript function to check if the 8-puzzle combination is solvable or not. 

For this function, it uses the goal state of 1,2,3,4,5,6,7,8,0

# Usage
Example usage.
```
arr = [0,1,2,3,4,5,6,7,8]
console.log("Solvable = "+solvable(arr));
```
# The Function
Here is the function code
```
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

```
