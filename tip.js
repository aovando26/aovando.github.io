

// locates and returns first element with the identified selector -- #tip-form (line 22) 
// onchange is the even-related attribute, specifying a responser with user/browser interaction 
// function() is assigned the DOM script 
document.querySelector('#tip-form').onchange = function(){
//variable bill is assigned the script 
//the script contains a DOM script 
//The value property sets or returns the value of the value attribute of a text field.
//The Number () constructor creates Number objects. 
//When called as a function, it returns primitive values of type Number.
	var bill = Number(document.getElementById('billTotal').value);
	var tip = document.getElementById('tipInput').value;
	document.getElementById('tipOutput').innerHTML = `${tip}%`;
	var tipValue = bill * (tip/100)
	var finalBill = bill + tipValue
	console.log(finalBill)
	var tipAmount = document.querySelector('#tipAmount')
	var totalBillWithTip = document.querySelector('#totalBillWithTip')

	tipAmount.value = tipValue.toFixed(2);
	totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}
