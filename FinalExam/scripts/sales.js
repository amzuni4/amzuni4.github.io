 $(document).ready(function(){
    
            setInterval(function(){
       $('#carousel ul').animate({marginLeft:'-680px'}, 3000, function(){
           
        console.log('hello');
           $(this).find("li:last").after($(this).find("li:first"));
           $(this).css({marginLeft:0});
       });
            }, 4000);
        });
        
        