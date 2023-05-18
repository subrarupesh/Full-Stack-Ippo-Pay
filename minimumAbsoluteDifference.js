minAbsDiff = (arr) => {
           
        arr.sort(function(a, b){return a - b});
           

        let sum = 0;
           
        let n = arr.length; 
       
        sum += (arr[0] - arr[1]);
        if(n === 2) {
            return Math.abs(sum);
        }   
        
        sum += (arr[n-1] - arr[n-2]);
        if(n === 4) {
            return Math.abs(sum);
        }
         
         
        for (let i = 1; i < n-1; i++) {
            sum += Math.min(Math.abs(arr[i] - arr[i-1]),
                    Math.abs(arr[i] - arr[i+1]));
        }
               
        return sum;
    }
     
    const arr = [2,-1,0,4,-2,-9];
 
    console.log(minAbsDiff(arr));
