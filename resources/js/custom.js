$(document).ready(function(){

    $(".js--work").waypoint(function(direction){
        if(direction == "down")
        {
            $("nav").addClass("sticky");
        }
        else 
        {
            $("nav").removeClass("sticky");
        }
    });

    var protfolio = mixitup('.container');


    $("a").on("click",function(event){
        if(this.hash !== "")
        {
            event.preventDefault();
            var hash=this.hash;

            $("html,body").animate({
                scrollTop: $(hash).offset().top
            },800,function(){
                window.location.hash=hash;
            });
        }

    });
});


function openMenu()
{
    document.querySelector("#secondMenu").style.width="100%";
}
function closeMenu()
{
    document.querySelector("#secondMenu").style.width="0%";
}