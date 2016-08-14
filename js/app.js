/**
 * Created by seyi adeleke on 5/28/2016.
 */
$(document).ready(function(){
    var SearchCallBack = function(){
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ $('#searcher').val();
        console.log(url);
        $.ajax({
            url:url,
            dataType:'jsonp',
            type:'GET',
            success:function(data){
                $("#result").empty();
                for(i=0;i<data[1].length;i++){
                    $("#result").append("<div class=\"well container-fluid\"><p><a id=\"links\" href="
                        + data[3][i] + "><b>" + data[1][i] + "</b></a></p><p>" + data[2][i] + "</p></div>");
                }
            },
            error:function(){
                console.log("error");
                $("#result").html("error 404");
            }

        });
    };

    $("#searchbox").keypress(function() {
        if (event.which == 13) {
            SearchCallBack();
        }
    });

    $('#search-button').click(SearchCallBack);
});