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

function houseCard(data){
    //Define all reuseable variables that will be pasted as HTML code later
    let divStart1 = "<div class=\"container bg-danger p-3\" ><div class='bg-dark p-3'><div class='bg-info'><a href='home_detail.html?";
    let html1 = "'><img  width='100%' src='";
    let divStart2 =  " ' ></img></a> </div><div class='bg-primary'><p>Price: $" ;
    let imgStart = "<img width='100%' src='";
    let url = "http://3.21.225.172:8080/api/"
    for (let i = 0; i < 90; i++) {
        //define the card to be repeated
        var card =
            divStart1 + [i] + html1 + url + data[i].imageurl + divStart2 +
            data[i].price +"</p><p>" + data[i].beds + " Bed    " +
            data[i].baths + " Bath  " + data[i].sqft+ " Sq.ft</p>" +
            "<p>" + data[i].street + "<br>"+ data[i].city + ", " + data[i].id + " " +
            data[i].zip +"</p></div></div></div>"

        // console.log(url);
        // console.log(card);
        $("#Holder1").append(card);
    }

    // console.log(card);
    // $("#Holder1").append(card);


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

}

