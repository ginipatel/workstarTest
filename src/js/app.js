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


(function ($) {
    // var div = $("<div></div>");
    // var question = div.append("<h3>"+ queList[0].que+"</h3>");

    //


    // div.append(ul);

    // $('.quizQuestion').html(div);
    function optionUl(list,id) {
        var ul = $("<ul></ul>");
        $.map(list, function (listItem, index) {
            // ul.append('"<li><span><input value="' +  +'"></span>"+ listItem +"</li>"');
            ul.append("<li> <span><input type='radio' value='listItem' name='option_"+id+"'/></span>"+listItem+"</li>");
        });
        return (div.append(ul));
    }

    var div = $("<div></div>");
    $.map(queList, function (question, index) {
        div.append("<h3>" + question.que + "</h3>");
        optionUl(question.options, question.id);
    });
    $('#optionList').html(div);
    // $('.quizQuestion').html(div);


}($));