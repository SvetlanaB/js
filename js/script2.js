//1 
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 сначала увеличит перем, потом вернет значение в c
// d = b++; alert(d);           // 1 вернет в перем старое значение, потом увеличит
// c = (2+ ++a); alert(c);      // 5 т.к. до этого a уже равно 2 и значение снова увеличивается до 3
// d = (2+ b++); alert(d);      // 4 значение было увеличено до 2 и вернется значение постфиксной формы 2
// alert(a);                    // 3 перем увеличена 2 раза
// alert(b);  					 // 3 перем увеличена 2 раза	


//2
// var a = 2;
// var x = 1 + (a *= 2); //будет равно 5, сокращенная запись от a = a * 2

//3
console.log('3 задание (1 и 2 в комментариях):');
var a = parseInt(prompt ('Введите число a'));
var b = parseInt(prompt ('Введите число b'));

if ((a >= 0) && (b >= 0)) {
	console.log(a - b + ' Разница')
} else if ((a < 0) && (b < 0)) {
	console.log(a * b + ' Произведение')
} else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
	console.log(a + b)
} else {
	console.log ('Введите число!')
}


//4
console.log('4 задание:');
var a = parseInt(prompt ('Введите число a от 0 до 15:'));

switch(a) {
  	case 0:  
    	console.log(++a);

    case 1:  
    	console.log(++a);

    case 2:  
    	console.log(++a);

    case 3:  
    	console.log(++a);

    case 4:  
    	console.log(++a);

    case 5:  
    	console.log(++a);

    case 6:  
    	console.log(++a);

    case 7:  
    	console.log(++a);

    case 8:  
    	console.log(++a);

    case 9:  
    	console.log(++a);

    case 10:  
    	console.log(++a);

    case 11:  
    	console.log(++a);

    case 12:  
    	console.log(++a);

    case 13:  
    	console.log(++a);

    case 14:  
    	console.log(++a);
    	break;	

    case 15:  
    	console.log(a);
    	break;		

  	default:
    	console.log('Больше 15, неправильно!');
    	break;
}

//5
console.log('5 задание: done');

function plus(arg1, arg2) {
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    return (arg1 + arg2);
}

function minus(arg1, arg2) {
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    return (arg1 - arg2);
}

function multiplication(arg1, arg2) {
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    return (arg1 * arg2);
}

function division(arg1, arg2) {
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    return (arg1 / arg2);
}


//6
console.log ('6 задание:');

var arg1 = + prompt ('Введите первое число');
var arg2 = + prompt ('Введите второе число');
var operation = prompt ('Введите операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление');

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
	case '0':	
  	case '1':  
    	console.log (plus(arg1, arg2));
    	break;
    case '2':  
    	console.log (minus(arg1, arg2));
    	break;
    case '3':  
    	console.log (multiplication(arg1, arg2));
    	break;
    case '4':  
    	console.log (division(arg1, arg2));
    	break;
	}
}

mathOperation(arg1, arg2, operation);


//7 
console.log ('7 задание - Не успела разобраться')

//8
console.log ('8 задание:')

function power(val, pow) {
  if (pow != 1) { // пока n!=1 сводить вычисление pow(..n) к pow(..n-1)
    return val * power(val, pow - 1);
  } else {
    return val;
  }
}

console.log ( power(2, 3) ); // (*)
  