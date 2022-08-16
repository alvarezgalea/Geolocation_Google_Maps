/*
GEOLOCATION CODE.
Framework CODEMAPS
Version 1.0.0.1
Last Time: 12/08/2022
@authors: Miguel Alvarez
email: alvarezgalea@gmail.com
*/

var map;
      
//Initialize the principal point the country or city that you want to show in the map.
var centerPos = new google.maps.LatLng(45.40395655934012, -75.7013613118196);
var zoomLevel = 15; // It's the initial nivel zoom
  
function initialize(){
  var mapOptions = {
          center: centerPos,
          zoom: zoomLevel
  };
        
map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions );
      
//function to add the point in the map
function add_point_map(location,icon){
  var locations = location;
  var type_icon="";

    if(icon == null){     
      }else if (icon == "green"){
        type_icon = "img/ico_per_verde.png";
      }else if (icon == "red") {
        type_icon = "img/ico_per_rojo.png";
    }

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                      title: locations[i][0],
                                      icon: img = type_icon,
                                      /*Label: locations[i][0], */
                                      map: map,
                                      });

  }
};

// *** Coordinate matrix ***

// Principal Point . Can be your Place or Warehouse
var locations0 = [['Principal Point',45.401027214590435, -75.70007267226813]];
var icon0 = null;
add_point_map(locations0,icon0);


//paid Customers
var locations1 = [        
        
        ['Jhon - Grosery Store ', 45.40463736395269, -75.69739332267021],
        ['Jonas - Bakery', 45.40328470472955, -75.69197082915633],
        ['Lisa - Pet Shop', 45.409984396395494, -75.698952407788]
                
];
        
add_point_map(locations1,"green");        
//-----------------------------------------------------------------------------------
        
// not paid customers
        
        var locations2 = [
        ['Noah - Barber shop', 45.39779743308094, -75.70787405248784],
        ['Tom - Yummy Pizzas', 45.404530416264045, -75.707691977983],
        

        ];
 
add_point_map(locations2,"red"); 
        //-----------------------------------------------------------------------------------
}

google.maps.event.addDomListener(window, 'load', initialize);