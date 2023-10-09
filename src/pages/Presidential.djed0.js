// Velo API Reference: https://www.wix.com/veloreference/api-overview/introduction
import wixData from 'wix-data';
console.log("hi!");

$w.onReady(function () {
$w("#text200").hide();
    $w("#text201").hide();
 $w("#text199").hide();

    wixData.query("presidentialBook")
        .find()
        .then((results) => {
            if (results.items.length > 0) {
                let items = results.items;
                console.log(items);
                // console.log("row count"+results.length);
                let len = results.length
                let disabledDatesStart = [];
                let disabledDatesEnd = [];
                items.forEach(e => {
                    disabledDatesStart.push(e.checkInDate);
                    disabledDatesEnd.push(e.checkOutDate);

                })
                let newDateStart = [];
                newDateStart = disabledDatesStart;
                console.log("disDatesS" + newDateStart)
                let newDateEnd = [];
                newDateEnd = disabledDatesEnd;
                console.log("disDatesE" + newDateEnd)

                const disDates = [{
                        startDate: new Date(newDateStart[1]),
                        endDate: new Date(newDateEnd[1])
                    }

                ];

                for (let index = 0; index < len; index++) {

                    disDates.push({
                        startDate: new Date(newDateStart[index]),
                        endDate: new Date(newDateEnd[index])
                    })
                    $w('#datePicker15').disabledDateRanges = disDates;
                    $w('#datePicker14').disabledDateRanges = disDates;

                }

                console.log(disDates);

            }
        });

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/






export function button26_click_1(event) {


}




//v1:
//function myFunction() {
 // var x = document.getElementById("myDIV");
 // if (x.style.display == "block") { // `=` to `==` or `===`
   // x.style.display = "none";
  //} else {
  //  x.style.display = "block";
 // }
//}
//#myDIV {
 // display: none;
//}
//<ul>
  //<li><button onclick="myFunction()">Try it</button>
    //<div id="myDIV">
      //<p>This is my DIV element.</p>
    //</div> <!-- this div wasn't closed properly -->
  //</li>
//</ul>





/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/




/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/



/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/


/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown8_change_1(event) {
	let checkIn= $w("#datePicker15").value;
    let checkOut = $w("#datePicker14").value;
	let numAdults = parseInt($w("#dropdown8").value);
    let numChildren = parseInt($w("#dropdown7").value);
    let numPrice = 0;
    if((numAdults+numChildren) < 3){
        numPrice = 650
    }else{
        numPrice = 2300+ numAdults*20 + numChildren*10
    }
if(!isNaN(numPrice)){
$w("#text199").text = "$"+numPrice;
$w("#text199").show();
}




}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown7_change_1(event) {
	
 let checkIn= $w("#datePicker15").value;
    let checkOut = $w("#datePicker14").value;
	let numAdults = parseInt($w("#dropdown8").value);
    let numChildren = parseInt($w("#dropdown7").value);
    let numPrice = 0;
    if((numAdults+numChildren) < 3){
        numPrice = 650
    }else{
        numPrice = 2300+ numAdults*20 + numChildren*10
    }
if(!isNaN(numPrice)){
$w("#text199").text = "$"+numPrice;
$w("#text199").show();
}
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button60_click(event) {


    let checkInValue = $w("#datePicker15").value;
    let checkOutValue = $w("#datePicker14").value;

    $w("#dataset1").add()
        .then(() => {
            console.log("New item created");
        })
        .catch((err) => {
            let errMsg = err;
            console.log(errMsg);
        });
    $w("#dataset1").setFieldValues({
        "checkInDate": checkInValue,
        "checkOutDate": checkOutValue
    })
}