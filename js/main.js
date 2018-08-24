// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding= document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // If menu isn't showing show it
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
};

// Hide menu when nav-item is clicked
menuNav.addEventListener('click', hideSelect);

function hideSelect() {
  if(showMenu) {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}

// Map
function initMap() {
  var options = {
    zoom: 17,
    center:{lat: 36.929838, lng: -121.767974}
  }

  //New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  var markers = [
    {
      coords:{lat: 36.929838, lng: -121.767974},
      content: '<h1>El Catrin Barbershop</h1>'
    }
  ];

  // Loop through markers
  for(var i = 0; i < markers.length; i++){
    addMarker(markers[i]);
  }

  // Add marker function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for custom icon
    if(props.iconImage){
      //Set icon img
      marker.setIcon(props.iconImage);
    }

    //Check if content available
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
};

// Smooth scroll animation using jquery
$('#startBtn').on('click', function() {
  // Set element to scroll down to
  const startArea = $('#start').position().top;

  $('html, body').animate({
    scrollTop: startArea
  }, 900);
});
