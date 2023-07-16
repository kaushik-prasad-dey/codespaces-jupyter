console.log("hello")
function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }

  function myMap(priceHtml,loc) {
    const markerPoint = { lat: 12.9263, lng: 77.5765 };
    var mapProp= {
      center:new google.maps.LatLng(markerPoint),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">'+priceHtml+'</h2>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(markerPoint),
        map:map,
        infowindow:infowindow,
        animation:google.maps.Animation.BOUNCE,
        title:loc
    })

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
   });
   
   infowindow.open(map,marker);
    }
  
  function funcEstimatePrice() {
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    //var estPrice = document.getElementById("uiEstimatedPrice");
    var url = BASE_URL+"/predict_home_price";
    debugger
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status) {
        console.log("Mydata",data);
        console.log(data.estimated_price);
        const estPrice=`Estimated price for <span style='color:red'>${location.value}</span> is <span style='color:red'>${data.estimated_price.toString()}</span> Lakh in respect of total Sq.ft: <span style='color:red'>${parseFloat(sqft.value)}</span>, bedroom:<span style='color:red'>${bhk}</span> and bathroom: <span style='color:red'>${bathrooms}</span>`
        myMap(estPrice,location.value);
        console.log(status);
    });
  }
  
  function onPageLoad() {
    console.log( "document loaded" );
    var url = BASE_URL+"/get_location_names";
    $.get(url,function(data, status) {
      
        console.log("got response for get_location_names request", data);
        if(data) {
            debugger
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
            const estPrice=`Estimated price for <span style='color:red'>1st block jayanagar</span> is <span style='color:red'>202.38</span> Lakh in respect of total Sq.ft: <span style='color:red'>1000</span>, bedroom:<span style='color:red'>2</span> and bathroom: <span style='color:red'>2</span>`
            myMap(estPrice,locations[0]);
        }
    });
  }
  
  window.onload = onPageLoad;