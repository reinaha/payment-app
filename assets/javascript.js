
function checkExist(){

	var sValue = this.value;

	if(sValue == ''){
		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please fill it up';

	}else{
		this.nextElementSibling.className = 'messageIcon1';
		this.nextElementSibling.nextElementSibling.innerHTML = '';
	}

}

function checkNumberVisa(){

	var sValue = this.value;

	var oVisaExp = /^4[0-9]{12}(?:[0-9]{3})?$/;

	var bTestResult = oVisaExp.test(sValue);

	if(sValue == ''){

		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please fill it up';

	}else if(bTestResult == false){

		this.style.color = '#FC003F';
		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please check your card number';

	}else{
		this.style.color = 'black';
		this.nextElementSibling.className = 'messageIcon1';
		this.nextElementSibling.nextElementSibling.innerHTML = '';

	}

}

function checkDate(){
	var sValue = this.value;

	var oVisaExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

	var bTestResult = oVisaExp.test(sValue);

	if(sValue == ''){

		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please fill it up';

	}else if(bTestResult == false){

		this.style.color = '#FC003F';
		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'DD/MM/YYYY';

	}else{

		this.style.color = 'black';
		this.nextElementSibling.className = 'messageIcon1';
		this.nextElementSibling.nextElementSibling.innerHTML = '';

	}
}

function checkCvv(){
	var sValue = this.value;

	var oVisaExp = /^[0-9]{3,4}$/;

	var bTestResult = oVisaExp.test(sValue);

	if(sValue == ''){

		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please fill it up';

	}else if(bTestResult == false){

		this.style.color = '#FC003F';
		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = '3 or 4 digits';

	}else{
		this.style.color = 'black';
		this.nextElementSibling.className = 'messageIcon1';
		this.nextElementSibling.nextElementSibling.innerHTML = '';

	}
}

function checkName(){
	var sValue = this.value;

	var oVisaExp = /[a-zA-Z]/;

	var bTestResult = oVisaExp.test(sValue);

	if(sValue == ''){

		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please fill it up';

	}else if(bTestResult == false){

		this.style.color = '#FC003F';
		this.nextElementSibling.className = 'messageIcon2';
		this.nextElementSibling.nextElementSibling.className = 'messageW';
		this.nextElementSibling.nextElementSibling.innerHTML = 'Please check your name';

	}else{
		this.style.color = 'black';
		this.nextElementSibling.className = 'messageIcon1';
		this.nextElementSibling.nextElementSibling.innerHTML = '';

	}
}

function checkAll(e){

	e.preventDefault();

	var oCardNumber = document.querySelector('#cardNumber');
	checkNumberVisa.call(oCardNumber);

	var oCardDate = document.querySelector('#cardDate');
	checkDate.call(oCardDate);

	var oCvv = document.querySelector('#cvv');
	checkCvv.call(oCvv);

	var oCardHolderName = document.querySelector('#cardHolderName');
	checkName.call(oCardHolderName);

}


function changeOpacity1(){

	this.className ='cardOppasityC';
	this.nextElementSibling.className = 'cardOppasity';
	this.nextElementSibling.nextElementSibling.className  = 'cardOppasity';
	this.firstElementChild.className = 'cardMessageO';
	this.nextElementSibling.firstChild.className = 'null';
	this.nextElementSibling.nextElementSibling.firstChild.className  = 'null';

}


function changeOpacity2(){

	this.className ='cardOppasityC';
	this.previousElementSibling.className = 'cardOppasity';
	this.nextElementSibling.className  = 'cardOppasity';
	this.firstElementChild.className = 'cardMessageO';
	this.previousElementSibling.firstChild.className = 'null';
	this.nextElementSibling.firstChild.className  = 'null';

}

function changeOpacity3(){

	this.className ='cardOppasityC';
	this.previousElementSibling.className = 'cardOppasity';
	this.previousElementSibling.previousElementSibling.className  = 'cardOppasity';
	this.firstElementChild.className = 'cardMessageO';

	this.previousElementSibling.firstChild.className = 'null';
	this.previousElementSibling.previousElementSibling.firstChild.className  = 'null';

}


//-----Main-----//

var oCardNumber = document.querySelector('#cardNumber');
oCardNumber.addEventListener('blur',checkNumberVisa);

var oCardDate = document.querySelector('#cardDate');
oCardDate.addEventListener('blur',checkDate);

var oCvv = document.querySelector('#cvv');
oCvv.addEventListener('blur',checkCvv);

var oCardHolderName = document.querySelector('#cardHolderName');
oCardHolderName.addEventListener('blur',checkName);

var oForm = document.querySelector('form');
oForm.addEventListener('submit',checkAll)

var oCard1 = document.querySelector('#card1');
oCard1.addEventListener('click',changeOpacity1);

var oCard2 = document.querySelector('#card2');
oCard2.addEventListener('click',changeOpacity2);

var oCard3 = document.querySelector('#card3');
oCard3.addEventListener('click',changeOpacity3);


