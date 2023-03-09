 $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.mobile-nav').click(function(){
        $('#navbar-menu').slideDown();
        $('.mobile-nav').css('display','none');
        $('.close').css('display','block');
    })

    $('.close').click(function(){
        $('#navbar-menu').slideUp();
        $('.mobile-nav').css('display','block');
        $('.close').css('display','none');

    })
})

// -------------- Form validation ----------------
function validation(){

    var user = document.getElementById("user").value ;
    var email = document.getElementById("email").value ;
    var subject = document.getElementById("subject").value ;
    var message = document.getElementById("message").value ;

    if(user == ""){
        document.getElementById(username).innerHTML = "Name is required"

        return false;
    }
    if(email == ""){
        document.getElementById(emailAddress).innerHTML = "Name is required"

        return false;
    }
    if(subject == ""){
        document.getElementById(mainSubject).innerHTML = "Name is required"

        return false;
    }
    if(message == ""){
        document.getElementById(textMessage).innerHTML = "Name is required"

        return false;
    }
    else{
        // <h1>thanks</h1>
    }
}

