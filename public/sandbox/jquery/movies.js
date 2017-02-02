(function () {
    $(init);
    
    function init() {
        var button = $("button#search");

        button.click(searchMovie);
    }
    
    function searchMovie() {
        var titleFld = $("#title");
        var title = titleFld.val();
        var url = "http://www.omdbapi.com/?s="+title;
        var results = $("#results");
        $.ajax({
            "url": url,
            "success": function(response) {
                // console.log(response);
                results.empty();
                var movies = response.Search;
                var ul = $("<ul>");
                for(var m in movies) {
                    var movie = movies[m];
                    console.log(movie);
                    var li = $("<li>");
                    li.append(movie.Title);
                    ul.append(li);
                }
                results.append(ul);
            }
        });
    }
})();