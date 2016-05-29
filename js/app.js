/**
 * Created by seyi adeleke on 5/28/2016.
 */
$(document).ready(function(){
    $('#search-button').click(function() {
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + $('#searcher').val();
        console.log("seyi");
    });
});