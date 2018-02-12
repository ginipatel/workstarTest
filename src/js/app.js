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
    function optionUl(list, id, suffix) {
        var ul = $("<ul class='optionUl'></ul>");
        $.map(list, function (listItem, index) {
            ul.append("<li> <span><input type='radio' value='listItem' name='option_" + suffix + "_" + id + "'/></span>" + listItem + "</li>");
        });
        return ul;
    }

    var questionsDiv = $("<div class='carousel slide'></div>");
    $.map(queList, function (question, index) {
        var innerDiv = $("<div class='carousel-inner' role='listbox'></div>");
        innerDiv.append("<h4>" + question.que + "</h4>");
        var list = optionUl(question.options, question.id, 'questions');
        innerDiv.append(list);
        questionsDiv.append(innerDiv);
    });
    $('#questionsList').html(questionsDiv);

    var resultsDiv = $("<div class='result'></div>");
    var correctAnswers = queList.filter(function (question) {
        return question.result === true
    });
    resultsDiv.append(" <span>" + parseFloat(((correctAnswers.length * 100) / queList.length)).toFixed(2) + "</span>");
    resultsDiv.append("<p><strong>Pass/Fail Message</strong> Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>")
    $.map(queList, function (question, index) {
        var resultMark = question.result;
        resultsDiv.append("<strong> Question " + question.id + "</strong> ");
        if (resultMark === true) {
            resultsDiv.append(" <img class=\"resultTrue\" src=\"https://png.icons8.com/material/20/FFFFFF/checkmark.png\">")
        }
        else {
            resultsDiv.append(" <img class=\" resultFalse \" src=\"https://png.icons8.com/ios/22/FFFFFF/delete-sign.png\">")
        }
        resultsDiv.append("<p>" + question.que + "</p>");
        // resultsDiv.append();
    });
    $('#results').html(resultsDiv);


}($));