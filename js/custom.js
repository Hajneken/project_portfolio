$(document).ready(function(){

    var  userFeed = new Instafeed ({
        get: 'user',
        userId: '5763022698',
        sortBy: 'most-recent',
        accessToken: '5763022698.1677ed0.d6a9f4baf05f4283b895f5de19152e90',
        resolution: 'standard_resolution',
        limit: 15,
        template: '<div class="col-lg-4 gallery instaimg"> <a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"></a></div>',
        useHttp: true,
    });
    userFeed.run();


// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true
    }
  });


});



        