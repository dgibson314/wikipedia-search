function search(keyword) {
    $(".results-list").empty();

    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    $.getJSON((url + keyword + "&callback=?"), function(data) {
        var pages = data.query.pages;
        
        $.each(pages, function(id, page) {
            var title = page.title;
            var extract = page.extract;
            var html = "";
            html += '<li><h3><a target="_blank" href="https://en.wikipedia.org/?curid='
                + id + '">' + title + '</h3><p>' + extract + '</p></li>';
            $(".results-list").append(html);
        });
    });
}

$(document).ready(function() {
    $("#search-input").keypress(function(e) {
        if (e.which == 13) {
            var keyword = $("#search-input").val();
            search(keyword);
        }
    });
});
