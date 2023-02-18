function histogram(input){
    index = 0;
    let n = input[index];
    index++;
    
    let p1counter=0;
    let p2counter=0;
    let p3counter=0;
    let p4counter=0;
    let p5counter=0;
    
    for(let i=0; i<=n; i++){
        let x = Number(input[index]);
        index++
        if(x<200){
            p1counter++;
        }else if(x>=200 && x <=399){
            p2counter++;
        }else if(x>=400 && x<=599){
            p3counter++;
        }else if(x>=600 && x<=799){
            p4counter++;
        }else if(x>=800){
            p5counter++
        }
    }
   let p1 = p1counter/n*100;
   let p2 = p2counter/n*100;
   let p3 = p3counter/n*100;
   let p4 = p4counter/n*100;
   let p5 = p5counter/n*100;

   console.log(p1.toFixed(2)+ `%`);
   console.log(p2.toFixed(2)+ `%`);
   console.log(p3.toFixed(2)+ `%`);
   console.log(p4.toFixed(2)+ `%`);
   console.log(p5.toFixed(2)+ `%`);

}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

