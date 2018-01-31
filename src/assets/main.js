$(function() {
  $.ajax({
    url: "https://www.codeschool.com/users/Kk2989.json",
    dataType: 'jsonp',
    success: function(response){
      var data = response.courses.completed;
      console.log(data);

      for(var i = 0; i < data.length; i++){
        console.log(data.length);

        var courseDiv = $('<div />',{
          'class':'course'
        }).appendTo('#badges');

        var dataTitle = data[i].title;
        var dataImg = data[i].badge;
        var dataUrl = data[i].url;

        var courseHeading = $('<h3 />',{
          text: dataTitle
        }).appendTo(courseDiv);

        var courseImg = $('<img />',{
          src: dataImg
        }).appendTo(courseDiv);

        var courseLink = $('<a />',{
          'class': 'btn btn-primary',
          target: '_blank',  
          href: dataUrl,
          text: 'See Course'
        }).appendTo(courseDiv); 
      }
    }
  });
});


