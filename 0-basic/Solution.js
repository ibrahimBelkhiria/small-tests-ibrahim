


// @Author : ibrahim Belkhiria  : ibrahim.belkhiria.info@gmail.com

/// To run the porgram locally you need to have node installed ; commmand to run :  node Solution.js
for(let i=1;i<=100;i++){

    // check if the number is multiple of both 3 and 5; if yes then output the number and 
    // continue to the next iteration
    if(i % 3==0 && i % 5==0 ) {
        console.log("Babasport");
        continue;
      
    }
    // check if the number is multiple of 3
     if(i % 3 ==0){
        console.log("Baba");
       

    }else if(i % 5==0){          // check if the number is multiple of 5
        console.log('Sport');
      
    }
   
}