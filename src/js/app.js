
/*option list*/
(function ($) {
    function optionUl(list, id, suffix) {
        var ul = $("<ul class='optionUl'></ul>");
        $.map(list, function (listItem, index) {
            ul.append("<li> <span><input type='radio' value='listItem' name='option_" + suffix + "_" + id + "'/></span>" + listItem + "</li>");
        });
        return ul;
    }/* finish option list*/

    /*questions*/
    var questionsDiv = $("<div></div>");
    $.map(queList, function (question, index) {
        var innerDiv = $("<div class='innerDiv slide'></div>");
        innerDiv.append("<span class=' '>arrow</span>");
        innerDiv.append("<h4>" + question.que + "</h4>");
        var list = optionUl(question.options, question.id, 'questions');
        innerDiv.append(list);
        questionsDiv.append(innerDiv); /*call the optionUL functions */
    });/*finish map */

    $('#questionsList').html(questionsDiv);
    /*result page*/
    var resultsDiv = $("<div class='result'></div>");
    var correctAnswers = queList.filter(function (question) {
        return question.result === true
    });

    /*append the data and marks*/
    resultsDiv.append(" <span>" + parseFloat(((correctAnswers.length * 100) / queList.length)).toFixed(2) + "</span>");
    resultsDiv.append("<p><strong>Pass/Fail Message</strong> Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>")
    $.map(queList, function (question, index) {
        var resultMark = question.result;
        /*loop for result asnwer*/
        if (resultMark === true) {
            resultsDiv.append(" <img class=\"resultTrue\" src=\"https://png.icons8.com/material/20/FFFFFF/checkmark.png\">")
        }
        else {
            resultsDiv.append(" <img class=\" resultFalse \" src=\"https://png.icons8.com/ios/22/FFFFFF/delete-sign.png\">")
        }
        /*append the question number and question*/
        resultsDiv.append("<p><strong> Question " + question.id + "  </strong>     " + question.que + "</p>");
    });/*finish map*/
    $('#results').html(resultsDiv);
    /* finish result page*/

}($));