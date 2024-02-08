// 1
function min(a, b){
    if(a<b){
        return a;
    }
    return b;
}
var a = 25;
var b = 23;
console.log(min(a,b));


//2 задание
function getCountSymb(str){
    var str = prompt('Напиши строчку');
    for (i = 0; i<str.length; i++){
        console.log(str[i]);
    }
}

//3 задание 
var b = false;
var array = ['яблоко','груша','персик'];
var fruit = prompt('Какой фрукт ты хочешь?');
for (i=0; i<array.length; i++){
    if(fruit===array[i]){
        alert('держи'+fruit);  
        b = true;
        break;
    }
}
if(b===false){
    var a = confirm('ПОКЗААТЬ ВССЕ?');
    if(a==true){
        console.log(array);

    }else alert('ПОКА');
}

//4 (1)
function getSum(a){
    var sum = 0;
    for (i=0;i<=a;i++){
        sum = sum+i;
    }
    return sum;
    
}
console.log(getSum(100));

//5(2)
function getResult(credit){
    var result;
    return result = credit*0.17*5;
}
console.log(getResult(1000));

//6(3) 
function trimString(str, from, to){
    var result = "";
    for(i=from; i<to; i++){
         result = result+str[i];
    }
    return result;
}
console.log(trimString('hello', 2, 5));

//7(4)
function getSumNumbers(numb){
    var sum = 0;
    numb = String(numb);
    for (i=0; i<numb.length; i++){
        if(numb[i]===0){
            continue;
        }
        sum = sum +Number(numb[i]);
    }
    return sum;
}
console.log(getSumNumbers(323232));

//8(5)
function getSum(a, b){
    var sum = 0;
    if (a<b){
        for (i=a; i<=b; i++){
            sum = sum + i;
        }
        return sum;
    } else if(a>b){
        for(i=b; i<=a; i++){
            sum = sum + i;
        }
        return sum;
    } else {
        return a;
    }
}
console.log(getSum(1 ,5));


//9(6)
function foo(){
    return console.log('foo');
}
function boo(){
    return console.log('boo');
}
function fooBoo(bool){
    bool ? foo() : boo();
}
console.log(fooBoo(true));

//10(7)
function treangle(a, b, c){
    if((a+b)>c && (a+c)>b && (b+c)>a){
        return true;
    } else return false;
}
console.log(treangle(4,2,5));
