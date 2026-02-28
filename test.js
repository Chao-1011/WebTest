window.onload = function() {
    const AllTheJumpButton = document.querySelectorAll(".jump-web");
    AllTheJumpButton.forEach(function(button){
        button.addEventListener("click",function(){
            const targetUrl=this.dataset.url;
            window.location.href=targetUrl;
        });
    });
};