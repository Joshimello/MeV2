$( document ).ready(function() {

    //darkmode

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == "dark"){
        $('link[href="css/flatly.bootstrap.min.css"]').attr('href','css/darkly.bootstrap.min.css');
        $('#preloader').css("background-color", "#222");
        $("#dark").prop("checked", true);
    };

    setTimeout(function(){
        $('#status').fadeOut();
        $('#preloader').delay(50).fadeOut(100);
        $('body').delay(50).css({'overflow':'visible'}); 
    }, 1000);

    $('#dark').on('change', function() {
        $('#status').fadeIn(0.01);
        $('#preloader').fadeIn(0.01);
        $('body').css({'overflow':'hidden'});

        if ($(this).prop('checked')) {
            localStorage.setItem("theme", "dark");
            $('link[href="css/flatly.bootstrap.min.css"]').attr('href','css/darkly.bootstrap.min.css');
            $('#preloader').css("background-color", "white")
            setTimeout(function(){
                $('#status').fadeOut();
                $('#preloader').delay(50).fadeOut(100);
                $('body').delay(50).css({'overflow':'visible'}); 
            }, 1000);
        }
        else {
            localStorage.setItem("theme", "light");
            $('link[href="css/darkly.bootstrap.min.css"]').attr('href','css/flatly.bootstrap.min.css');
            $('#preloader').css("background-color", "#222")
            setTimeout(function(){
                $('#status').fadeOut();
                $('#preloader').delay(50).fadeOut(100);
                $('body').delay(50).css({'overflow':'visible'}); 
            }, 1000);
        }
    });
});

//redirect handler
function linkhandle(){
    if ($(location).prop('hash').substr(1) == ""){
        $('#content').load('/html/home.html')
    } else {
        $('#content').load('/html/'+ $(location).prop('hash').substr(1) +'.html',
            function(response, status, xhr){
                if (xhr.status == "404"){
                    var hashlink = $(location).prop('hash').substr(1)
                    var content = '<p class="lead">/ <a href="#home">home</a> / '+ hashlink +
                                  '</p><p class="display-6">'+ hashlink +
                                  '</p><p>not sure what you are looking for but have some music~</p><iframe class="col-12" height="625" src="https://www.youtube.com/embed/DrmcAh2FRHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    $('#content').html(content)
                }
            }
        )
    };
}

$(window).on('hashchange', function() {
    linkhandle()
});

linkhandle()