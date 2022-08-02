$(function () {
  //fadeOut makes element have a property of display: none;
  //fadeIn puts display property back to whatever it was before
  //fadeTo only changes opacity doesn't touch display
  // $('.green-box').fadeOut(1000);
  // $('.green-box').fadeTo(1000, 0.5);

  //makes element disappear, does not touch opacity
  // $('.blue-box').slideUp(2000);

  //makes element appear without affecting opacity
  // $('.blue-box').slideToggle(2000);

  // $('.blue-box').slideDown(2000);

  // $('p').hide().slideDown(2000);

  // $('.blue-box').animate({
  //   "margin-left": "200px"
  // }, 1000, "swing").animate({ "margin-left": "0px" }, 1000);

  //colors do not work for custom animations

  //delay animations
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  //callback functions are performed only after animations are completed
  // $(".red-box").fadeTo(1000, 0, function () {
  //   $(".green-box").fadeTo(1000, 0, function () {
  //     $(".blue-box").fadeTo(1000, 0);
  //   })
  // })

  // $(".lightbox").fadeIn(1000);

  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input:password").css("background-color", "rgba(180, 180, 30, 0.8)");
  //all descendents of li will be yellow.
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //only direct children will inherit property.
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // all parents and antecedents will have yellow property.
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  //only a single parent will be selected
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  //only siblings will be selected
  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)");
  //selects element before #list
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  //selects element after #list  
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // select all direct next elements that come after a header element,
  // then select all the input child elements of the form elements of a password input
  // $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("form").children("input[password]").css("background-color", "rgba(180, 180, 30, 0.8)");
  //Filters all even li descendents of #list and turns them yellow.
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").filter(function (index) {
  //filters for elements with an index of 1,4,7,10
  //   return index % 3 === 1;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");
  //only first li are highlighted.
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  //only selects last li.
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  //eq is equivalent to index
  // $("li").eq(0).css("background-color", "rgba(180,180,30,0.8)");
  //selects last li
  // $("li").eq(-1).css("background-color", "rgba(180,180,30,0.8)");
  // selects all li except for the parameter
  // $("li").not(":first").css("background-color", "rgba(180,180,30,0.8)");
  //add new elements as a child of your selected element.
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");
  // $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));
  //places new item(s) as the first child of the target
  // $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");
  //places new element as the very first element in target.
  // $("<h4>Buddha Budz</h4>").prependTo("#content");
  //generates new sibling element for target
  // $(".red-box").after("<div class='red-box'>Another Red Box</div>");
  //generates previous sibling element for target.
  // $(".blue-box").before("<div class='blue-box'>Another Blue Box</div>");
  // $(".blue-box").before(function () {
  //   return "<div class='blue-box'>Blue 2</div>";
  // });

  //target has become previous sibling of blue box
  // $("p").after($("#list"));

  //replaces elements
  // $("li").replaceWith("<li>Replaced.</liv>");

  // var firstListItem = $("li:first");

  // $("p").replaceWith(firstListItem);

  //replace red and blue boxes with green boxes;

  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>Green Box</div>")

  //remove all list items
  // $("li").remove();

  //remove all direct children of the form element which are not a textarea.
  // $('form').children().not("textarea, br, input[type='text']").remove();

  //detatches element from page and can be stored in variable, event handlers and data are not removed.
  // const detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  //removes all child elements and text inside element
  // $("p:first").empty();

  //remove text inside boxes
  $(".red-box, .blue-box, .green-box").empty();


});