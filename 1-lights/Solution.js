
// @Author : ibrahim Belkhiria  : ibrahim.belkhiria.info@gmail.com

// #initialisation of : intitial state OFF
let entreprenurs = {};

for(let i=1;i<=100;i++){
    entreprenurs[i]="OFF";
}

//console.log(entreprenurs); // logging aprés chaque étape pour verifier l'étape de notre objet entrepreneurs
// #Allumez tous les entrepreneurs 

for(let i=1;i<=100;i++){
    entreprenurs[i]="ON";
}
//console.log(entreprenurs); // logging aprés chaque étape pour verifier l'étape de notre objet entrepreneurs

// # atteindre 1 un sur 2
for(let i=1;i<=100;i++){
    if(i%2==0) {
        entreprenurs[i]="OFF";
    }
    
}
//console.log(entreprenurs); // logging aprés chaque étape pour verifier l'étape de notre objet entrepreneurs

// #Switcher 1 sur 3 
for(let i=1;i<=100;i++){
    if(i%3==0) {
        if(  entreprenurs[i]=="OFF"){
            entreprenurs[i]="ON";
        }else{
            entreprenurs[i]="OFF";
        }
      
    }
    
}
// console.log(entreprenurs);  // logging aprés chaque étape pour verifier l'étape de notre objet entrepreneurs
let count =0;
// #count combien de ON
for (let i=1;i<=100;i++) {
    if (entreprenurs[i]=="ON") {
        count++;
        
    }
}
console.log(count);   // afficher le résultat au console 

// la formule mathematique c'est que le nombre des "ON" egale à (n/2)-1 avec n : nombre des entrepreneurs