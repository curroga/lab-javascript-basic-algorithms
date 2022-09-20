console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "zcazzzzzzzzzzzzz";
console.log(`The driver´s name is ${hacker1}`);
let hacker2 = "abz";
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    
} else if(hacker1.length < hacker2.length){

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops
let newhacker1="";
for(let i=0; i<hacker1.length; i++){
  
    newhacker1 = newhacker1 + hacker1[i].toUpperCase() + " "; 
       
}
console.log(newhacker1)
let newhacker2="";

for(let i=hacker1.length-1; i>=0; i--){
  
    newhacker2=newhacker2 + hacker1[i];
       
}
console.log(newhacker2)

// ejemplo --> zbz>zzz

let cont1=0;
let cont2=0;
if (hacker1.length>hacker2.length){

    for (let i=0; i<hacker2.length; i++){

        if(hacker1[i]>hacker2[i]){
            cont1++;
        } else if(hacker1[i]<hacker2[i]){
            cont2++;
        }
    }
}
else if (hacker2.length>hacker1.length){

    for (let i=0; i<hacker1.length; i++){

        if(hacker1[i]>hacker2[i]){
            cont1++;
        } else if(hacker1[i]<hacker2[i]){
            cont2++;
        }
    }
}
else if (hacker2.length===hacker1.length){

    for (let i=0; i<hacker1.length; i++){

        if(hacker1[i]>hacker2[i]){
            cont1++;
        } else if(hacker1[i]<hacker2[i]){
            cont2++;
        }
    }
}
if(cont1<cont2){
    console.log("The driver's name goes first.")

} else if(cont1>cont2){
    console.log("Yo, the navigator goes first definitely.")

} else {
    console.log("What?! You both have the same name?")
}

// bonus

let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vulputate interdum. Morbi congue lobortis orci a sodales. Sed leo turpis, sodales vitae consequat ut, porttitor ut mauris. Sed facilisis libero ipsum, vel aliquam ipsum malesuada eget. Praesent sed nulla tempus magna convallis dignissim posuere nec enim. Phasellus viverra vel magna eu condimentum. Nam lacus diam, porttitor nec commodo et, mollis ut lorem. Ut at lobortis lorem. Curabitur ultricies dui purus, non scelerisque nisi dictum in. Vestibulum vitae vehicula mi. In suscipit ultrices pellentesque. Vestibulum ante est, auctor nec mauris vitae, luctus hendrerit justo. Mauris maximus sapien vitae ex imperdiet, ac fermentum lacus maximus. Vestibulum et felis sed odio mollis fermentum. Maecenas ac vestibulum dolor. Etiam vitae neque eget sem vehicula luctus non vitae urna. Nullam id velit ac est posuere mattis ut et nisl. Pellentesque eu suscipit leo. In hac habitasse platea dictumst. Pellentesque posuere dapibus lectus. Fusce laoreet interdum orci, a ornare enim fermentum eleifend. Vivamus ornare erat eget quam ultrices accumsan. Ut ac turpis quis erat volutpat faucibus a sed nunc. Suspendisse sed eros mattis, cursus mauris at, porta felis. Vivamus vulputate neque elit, a imperdiet ante euismod at. Ut hendrerit commodo ante, at pellentesque sem consequat et. Etiam vestibulum felis sed cursus mattis. Fusce malesuada vestibulum lacus vehicula facilisis. Vestibulum tempus varius volutpat. Nulla arcu tellus, vulputate eget lectus at, viverra blandit quam. Donec vel dui sit amet elit feugiat mollis. Sed bibendum arcu pharetra tempor facilisis. Phasellus a augue at turpis semper sodales. Cras rhoncus imperdiet accumsan. Nulla rhoncus augue id eros laoreet, eu porttitor libero commodo. Nam ornare tellus in vestibulum porttitor. Vivamus ut tempus tortor. Curabitur consectetur nisi nec orci laoreet, et hendrerit felis efficitur. Phasellus in turpis libero. Donec quis blandit eros. Proin cursus nunc a congue lacinia. Integer quis nisi vitae elit posuere aliquam. Suspendisse lacinia purus eu mi euismod mattis"
let contador1=0;
let contador2=0;

for(let i=0; i<cadena.length; i++){

    if(cadena[i] !== " "){
        contador1++;
    }
    if(cadena[i] === "e" && cadena[i+1] === "t"){
        contador2++;
    }
}
console.log(contador1);
console.log(contador2);


