var $nav = $('#socialmedia');

$nav.waypoint(function(direction){
console.log('waypoint');



if (direction =='down'){
  $("#socialmedia").prepend("<div id='divnav' class='navbar-fixed-top sec-nav rev-nav'><div class='navbar-inner'><div class='container'><div class='navbar-header'><a class='navbar-brand logo'><img class='img' src='/images/DSCI1.png'></a></div><div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'><ul class='nav navbar-nav navbar-right'><li><a class='about' href='#hero-unit'>About</a></li><li><a class='socialmedia' href='#socialmedia'>Social Media</a></li><li><a class='contact' href='#contact'>Contact</a></li></ul></div></div></div></div>");

}
if(direction == 'up'){
  $("#divnav").remove();
}

$("#divnav").addClass('sec-nav-opacity1');
},
{offset:'10%'});
