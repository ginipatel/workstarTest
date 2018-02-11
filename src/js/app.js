//
// (function ($) {
//     var generateList = function (list, className) {
//         className = className ? '' : className;
//
//         var ul = $('<ul class="' + className + '"></ul>');
//         if ($.isArray(list)) {
//             list.map(function (li) {
//                 ul.append("<li>" + li + "</li>")
//             });
//         }
//         return ul;
//     };
//
//     function init() {
//         var div = $('<div></div>');
//         quiz.map(function (quizItem) {
//             $(div).append("<h1>" + quizItem.que + "</h1>");
//             var ul = generateList(quizItem.ans);
//             div.append(ul)
//         });
//         $('.quizList').html(div);
//     }
//
//     $(document).ready(function () {
//         init();
//     })
//
// }($));




$(document).ready(function(){
   var div = $("<div></div>");
    var question = div.append("<h3>"+ queList[0].que+"</h3>");


    var ul = $("<ul></ul>");
    var list = ul.append("<li>"+queList[0].options[0]+"</li>");




    div.append(ul);

    $('.quizQuestion').html(div);
});