function getData1() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.21.225.172:8080/api/realestate/all");
    xhttp.send();
    xhttp.onload = function() {
        const houseData = JSON.parse(xhttp.responseText);
        // console.log(houseData);
        houseCard(houseData)
    };
    // console.log( xhttp)
};

function getData2() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.21.225.172:8080/api/realestate/all");
    xhttp.send();
    xhttp.onload = function() {
        const houseData = JSON.parse(xhttp.responseText);
        // console.log(houseData);
        houseDetail(houseData);
    };
    // console.log( xhttp)
};

function getData3() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.21.225.172:8080/api/realestate/all");
    xhttp.send();
    xhttp.onload = function() {
        const houseData = JSON.parse(xhttp.responseText);
        // console.log(houseData);
        highestPrice(houseData)
    };
    // console.log( xhttp)
};

function getData4() {
    //This function is on our filter button since we need to request the data and define it again.
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.21.225.172:8080/api/realestate/all");
    xhttp.send();
    xhttp.onload = function () {
        const houseData = JSON.parse(xhttp.responseText);
        // console.log(houseData);
        filterResults(houseData);
    };
    // console.log( xhttp)
};

function houseCard(data){
    //Define all re-useable variables that will be pasted as HTML code later
    let divStart1 = "<div class=' color2  my-4 p-3'><div class='bg-info'><a href='home_detail.html?";
    let html1 = "'><img  width='100%' src='";
    let divStart2 =  " ' ></img></a> </div><div class='color3 '>" ;
    let imgStart = "<img width='100%' src='";
    let url = "http://3.21.225.172:8080/api/";
    $("#Holder1").html("");
    $("#pLower").val("");
    $("#pUpper").val("");
    for (let i = 0; i < 90; i++) {
        //define the card to be repeated using html as String and integrating our changing variables
        var card =
            "<div id='poppaDiv"+ [i] +"'  class='container  col-md-4'>"+ divStart1 + [i] + html1 + url + data[i].imageurl + divStart2 +
            "<p type='value' id='price"+ [i] +"'>" +data[i].price +"</p><p>" + data[i].beds + " Bed    " +
            data[i].baths + " Bath  " + data[i].sqft+ " Sq.ft</p>" +
            "<p>" + data[i].street + "<br>"+ data[i].city + ", " + data[i].state + " " +
            data[i].zip + "</p></div></div></div>"


        // console.log(url);
        // console.log(card);
        $("#Holder1").append(card);
    };
}

function houseCard2(data){

    let i = 0 ;
    let rep = data[i].fname + " " + data[i].lname;
    let address = data[i].street + "<br>" + data[i].city + ", " + data[i].state + " " + data[i].zip ;
    let img = "<img width='100%' src='http://3.21.225.172:8080/api/" + data[i].imageurl + "'></img>" ;
    console.log(img);

    $("#img1").html(img);
    $("#price1").append(data[i].price);
    $("#bed1").append(data[i].beds);
    $("#bath1").append(data[i].baths);
   $("#rep").append(rep);
   $("#repPhone").append(data[i].phone);
   $("#company").append(data[i].listing);
    $("#address1").append(address);
   $("#yrBlt").append(data[i].yrblt);



}

function houseDetail(data){
    //define the detail page

 let lv1 =  window.location.search
    console.log(lv1)
     let i = lv1.slice(1);
    let rep = data[i].fname + " " + data[i].lname;
    let address = data[i].street + "<br>" + data[i].city + ", " + data[i].state + " " + data[i].zip ;
    let img = "<img width='100%' src='http://3.21.225.172:8080/api/" + data[i].imageurl + "'></img>" ;
   console.log(i);

$("#img").html(img);
$("#price").append(data[i].price);
$("#bed").append(data[i].beds);
$("#bath").append(data[i].baths);
$("#rep").append(rep);
$("#repPhone").append(data[i].phone);
$("#company").append(data[i].listing);
$("#address").append(address);
$("#yrBlt").append(data[i].yrblt);
$("#id").append(data[i].id);

console.log(lv1);
}
function highestPrice(data){
    // let img = "'><img width='100%' src='http://3.21.225.172:8080/api/" + data[0].imageurl + "'></img></a>" ;
    let link1 = "<a href='home_detail.html?";
    data.sort((a, b) => {
        // let keyA = a.price;
        // let keyB = b.price;
        if (a.price < b.price) {
            return 1 ;
        }else if ( a.price > b.price ){
            return -1;
        }else return 0;
        // console.log(data);
    });
    let img = "'><img width='100%' src='http://3.21.225.172:8080/api/" + data[0].imageurl + "'></img></a>" ;
    let id1 = data[0].id
    let id2 = parseFloat(id1)
    let id3 = 1
    let id4 = id2 - id3
    console.log(id4)

    $("#imgExpensive").html(link1 + id4 + img);
    $("#price").append(data[0].price);
    $("#bed").append(data[0].beds);
    $("#bath").append(data[0].baths);
    $("#tid").append(data[0].id);
    $("#feet").append(data[0].sqft);
    // $("#company").append(data[i].listing);
    // $("#address").append(address);
    // $("#yrBlt").append(data[i].yrblt);

};

function filterResults(data) {
//Since we are basically running the same code as houseCard we can just copy a lot of it
    let pLower = document.getElementById("pLower").value;
    let pUpper = document.getElementById("pUpper").value;
    let divStart1 = "<div class='color2 my-4 p-3'><div class='bg-info'><a href='home_detail.html?";
    let html1 = "'><img  width='100%' src='";
    let divStart2 =  " ' ></img></a> </div><div class='color3'>" ;
    let imgStart = "<img width='100%' src='";
    let url = "http://3.21.225.172:8080/api/";
    console.log(pLower);

    //here we are checking if our Lower and Upper price fields have at least 5 length ie "500,000" or "999,999" or "000,000"  or 6 digit length
    if ((pLower.length <= 5) || (pUpper.length <= 5)){
window.alert("A minimum and maximum price must be at least 6 digits long.")
    } else{
   let y=4
        //First we need to clear the current #Holder1 as it currently has all houses in it
        $("#Holder1").html("");


   //for loop from our previous houseCard()
    for (let i = 0; i < 90; i++) {
        //define the card to be repeated
        var card =
            "<div id='poppaDiv"+ [i] +"' class='container col-md-4'>"+divStart1 + [i] + html1 + url + data[i].imageurl + divStart2 +
            "<p type='value' id='price"+ [i] +"'>" +data[i].price +"</p><p>" + data[i].beds + " Bed    " +
            data[i].baths + " Bath  " + data[i].sqft+ " Sq.ft</p>" +
            "<p>" + data[i].street + "<br>"+ data[i].city + ", " + data[i].state + " " +
            data[i].zip + "</p></div></div></div>"

        //Now that our card is defined and our data is loaded we can start applying our filters to it.
        //We only want the ones that fail our test. it is a strange use of double negatives
        // If our price is higher than our highest field then we don't need it, and same for lower
        if ( (data[i].price > pUpper) || ( data[i].price < pLower)){
            //If the price is higher or lower, then anything within these brackets will happen
            //and since we don't need these ones, we don't need anything in here.
            //The X and log are here for testing only
            let x = 1;
            console.log(x);
        } else{
            //If price is within our range then we need to display it on our freshly cleared #Holder1

            $("#Holder1").append(card);
        } ;

    };}

};
