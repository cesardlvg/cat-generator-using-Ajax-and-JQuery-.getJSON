$("#getBtn").click(function(){
    $.getJSON("http://aws.random.cat//meow")
    .done(function(data){
      $( "#avatar" ).attr( "src", data.file );
      })
    .fail(function(){
      console.log("error");
    })
  });
  
  
  