$(document).ready(function(){
  $('button').click(function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    
    $.ajax({
      type: "GET",
      url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      data: {
        tags: animal,
        format: "json"
      },
      success: function(data){
        
      }
    });
  });


});

 
   
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                 