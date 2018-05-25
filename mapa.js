// JavaScript Document


// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(31.683241, -106.407266), // Las Misiones - Cd. Juárez
					zoomControl: true,
					scrollwheel: true,
					panControl: true,
					streetViewControl: false,
					mapTypeControl: false,
					

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#1c194f"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#1c194f"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#1c194f"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1c194f"},{"lightness":05}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#1c194f"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#1c194f"},{"lightness":10}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1c194f"},{"lightness":15},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#1c194f"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1c194f"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
				var image = {
					url: 'img/globo_totalgas.png',
					size: new google.maps.Size(40, 45),
  					scaledSize: new google.maps.Size(40, 45)
				};
				
				// Info Window contenidos
				var malecon = '<div id="content">'+
					'<h2>1147 - Malecón</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Malecón #2791, Col. Córdoba Américas, C.P. 32010</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var lerdo = '<div id="content">'+
					'<h2>1149 - Lerdo</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>C. Ignacio Mejía, #317, Col. Centro, a 250 mts de Puente Sta. Fé</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var lopez = '<div id="content">'+
    			  	'<h2>2526 - López Mateos</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. López Mateos #1604, Col. Melchor Ocampo, C.P. 32380</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var gemela1 = '<div id="content">'+
    			  	'<h2>4179 - Gemela Chica</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Rafael Pérez Serna # 755, Col. Partido Romero, C.P. 32419</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var gemela2 = '<div id="content">'+
    			  	'<h2>4188 - Gemela Grande</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Rafael Pérez Serna # 676, Col. Partido Romero, C.P. 32419</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var municipio = '<div id="content">'+
    			  	'<h2>5317 - Municipio Libre</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Municipio Libre #1604, Col. Melchor Ocampo, C.P. 32240</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var aztecas = '<div id="content">'+
    			  	'<h2>5465 - Aztecas</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. De los Aztecas 7821, Esq. con Elisa Griensen</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var misiones = '<div id="content">'+
					'<h2>6410 - Las Misiones</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Paseo de la Victoria #4420, Col. Bosques del Sol, C.P. 32663</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var palos = '<div id="content">'+
    			  	'<h2>6947 - Puerto de Palos</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Puerto de Palos #1050, Col. Tierra Nueva, C.P. 32575</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var madrid = '<div id="content">'+
    			  	'<h2>7167 - Miguel de la Madrid</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Miguel de la Madrid #7675, Col. Héroes de la Revolución, C.P. 32696</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var permuta = '<div id="content">'+
    			  	'<h2>8244 - Libramiento</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Blvd. Manuel Talamás Camandari #850, Fracc. Gómez Morín, C.P. 32575</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var electrolux = '<div id="content">'+
    			  	'<h2>9191 - Electrolux</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Paseos del Sur #105, Col. José Ma. Morelos, C.P. 32698</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var aeronautica = '<div id="content">'+
    			  	'<h2>9235 - Aeronáutica</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Av. Aeronáutica #7023, Fracc. Jardines del Aeropuerto, C.P. 32690</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var custodia = '<div id="content">'+
    			  	'<h2>9885 - Custodia</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Custodia de la República #1015, Col. Fray García de San Francisco, C.P. 32575</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				var anapra = '<div id="content">'+
    			  	'<h2>9893 - Anapra</h2>'+
 				  	'<div id="infoContent">'+
					'<ul><li>Blvd. Ing. Bernardo Norzagaray #7270, Col. Felipe Ángeles, C.P. 32100</li>'+
					'</ul>'+
      				'</div>'+
      				'</div>';
					
				
					
					
				// Locations
				var locations = [
					[ malecon, 31.751662, -106.456575, 'Malecón', 1],
					[ lerdo, 31.742881, -106.481268, 'Lerdo', 2],
					[ lopez, 31.719498, -106.451286, 'López Mateos', 3],
					[ gemela1, 31.746316, -106.426186, 'Gemela Chica', 4],
					[ gemela2, 31.746412, -106.425505, 'Gemela Grande', 5],
					[ municipio, 31.720118, -106.473291, 'Municipio Libre', 6],
					[ aztecas, 31.676485, -106.476810, 'Aztecas', 7],
					[ misiones, 31.683241, -106.407266, 'Misiones', 8],
					[ palos, 31.628117, -106.349030, 'Puerto de Palos', 9],
					[ madrid, 31.642860, -106.406901, 'Miguel de la Madrid', 10],
					[ permuta, 31.602096, -106.385808, 'Permuta', 11],
					[ electrolux, 31.642860, -106.406901, 'Electrolux', 12],
					[ aeronautica, 31.620223, -106.440289, 'Aeronáutica', 13],
					[ custodia, 31.607487, -106.362677, 'Custodia', 14],
					[ anapra, 31.764075, -106.513592, 'Anapra', 15],
				    ];

					
					
				var infowindow = new google.maps.InfoWindow();

    			var marker, i;

    			for (i = 0; i < locations.length; i++) {  
      				marker = new google.maps.Marker({
        			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					icon: image,
					title: locations[i][3],
        			map: map
      				});

      				google.maps.event.addListener(marker, 'click', (function(marker, i) {
        			return function() {
          			infowindow.setContent(locations[i][0]);
          			infowindow.open(map, marker);
        			}
      				})(marker, i));
   				}
				
				google.maps.event.addListener(map, 'click', function() {
  				infowindow.close();
  				});
				
            }// Cierra final