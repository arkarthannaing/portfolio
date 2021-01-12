$(function() {

  sidebarActive();

  // EVENT HANDLERS
  $('.go').click(function() {
    var anchor = $(this).attr('dest');
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');

    $('html, body').animate(
      {
        scrollTop: $('#' + anchor).offset().top
      },
      1000
    );

    $('#'+anchor+" .main-title").addClass('animate__animated animate__bounceInRight');
  });


  // SCROLL ANIMATIONS
  function onScrollInit(items, elemTrigger) {
    var offset = $(window).height() / 1.6;
    items.each(function() {
      var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');

      elem.css({
        '-webkit-animation-delay': animationDelay,
        '-moz-animation-delay': animationDelay,
        'animation-delay': animationDelay
      });

      var trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
        },
        {
          triggerOnce: true,
          offset: offset
        }
      );
    });
  }

  setTimeout(function() {
    onScrollInit($('.waypoint'));
  }, 10);

 

  $('#close').click(function() {
    $('#success').removeClass('expand');
  });

// $(window).on('scroll', function() {
//     $('.target').each(function() {
//         console.log($(this));
//         if($(window).scrollTop() >= $(this).offset().top) {
          
//             var id = $(this).attr('id');
//             $('#top a').removeClass('active');
//             $('#top a[href=#'+ id +']').addClass('active');
//         }
//     });
// });

  var topBtn = document.getElementById("topBtn");

  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {

    // sidebarActive();

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }

  }

  function sidebarActive()
  {
    // const scrollTop = $(window).scrollTop();
    //   console.log(scrollTop);
    //   if( scrollTop < 600 ){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(1)" ).addClass("active");
    //   }if( scrollTop > 600 && scrollTop < 1300){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(2)" ).addClass("active");
    //   }else if( scrollTop > 1300 && scrollTop < 2000){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(3)" ).addClass("active");
    //   }else if( scrollTop > 2000 && scrollTop < 2600){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(4)" ).addClass("active");
    //   }else if( scrollTop > 2600 && scrollTop < 3500){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(5)" ).addClass("active");
    //   }else if( scrollTop > 3500 ){
    //     $("#top li").removeClass('active');
    //     $( "#top ul li:nth-child(6)" ).addClass("active");
    //   }
  }

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });
  });


  $("#top a").click(function(){
      $("#top li").removeClass('active');
      $(this).closest("li").addClass("active");

      if( $( window ).width() < 769 ){
        $('#sidebar, #content').toggleClass('active');
      }

  });

  
});

$(document).ready(function(){

  $(".filter").not('.laravel').hide('3000');

  $(".filter-button").click(function(){
      $(".filter-button").removeClass('choose');
      $(this).addClass('choose');
      var value = $(this).attr('data-filter');
      
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');    
      
  });
  
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
    $(this).addClass("active");
});

setTimeout(function () {
  $("#loader").fadeOut(2000);
  $("#myDiv").fadeIn(2000);
}, 4000);

// Cache selectors
var lastId,
    topMenu = $("#top"),
    topMenuHeight = topMenu.outerHeight()+ 200,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
            
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
            
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }                   
});