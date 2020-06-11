var $ = require("jquery");

("use strict");

$(function () {

  function tileHandler(tile) {

    $tiles = $(tile);
    $tiles.each(function () {
      $(this).click(function () {

        var $target = $(this);

        // raise elements to the top of the viewport
        if ($(this).css("top") == "0px") {
          var $titles = $(this).find(".title");

          
          // Prevent iterations
          $target.css("top", 0); // Essential to trigger transitions
          $target.css("top", -$target.offset().top);
          $target.css("background-position", "right -5px bottom -20px, 0 0");
          $target.addClass("col-12");
          $target.removeClass("rounded");

          $target
            .find(".details")
            .addClass("overflow-auto")
            .removeClass("d-none");
        }

        $tiles.each(function () {
          if ($target[0] != $(this)[0]) {
            $(this).css("transform", "translate(-100vw, 0)");
          }
        });

        // reset body position smoothly
        $("body").animate({ scrollTop: 0 }, 240);

        // prevent noisy scrolling
        $("#row").css("overflow", "hidden");
        $("#row").removeClass("overflow-auto")
      });
    });
  }


  function reset() {
    $(".nav__button").click(function() {

      $tiles = $(".tile");
      $tiles.each(function() {
        if($(this).css("top") == "0px") {
          $(this).css("transform", "translate(0, 0)");
        } else {
          $(this).css("top", 0)
          .removeClass("col-12")
          .addClass("rounded")
            .find(".details").addClass("d-none")
            .removeClass("overflow-auto")
        }
      })
      $("#row").css("overflow", "scroll")
    })
  }

  function titleHandler($array) {
    console.log($array.each(function() {
      console.log($(this).position().top)
    }))
  }

  tileHandler(".tile");


  reset();
  
});
