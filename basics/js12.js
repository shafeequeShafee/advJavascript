/////////////   Recursion //////////////////

// recursion : a function is calling itself

function show(){
    console.log('hi')
}
show();

// Stack : when you call show() , show() is in the top ,then show() is calling log(), log() will be in the top
// last in first out

function abc(){
    show();
}
abc();

/////////////
let num =1;

// function watch(){
//     console.log('hi! enjoy the show',num)
//     num++;
//     watch();
// }

// watch();

function watch(){
    console.log('hi! enjoy the show',num)
    num++;
    if(num <1000){
        watch();
    }
    
}

watch();

