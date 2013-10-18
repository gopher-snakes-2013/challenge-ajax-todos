$(document).ready(function(){
  $("#new_todo").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      type: $(this).attr("method"),
      url: $(this).attr("action"),
      dataType: 'json',
      data: $(this).serialize()
    }).done(function(data){
      console.log(data)
    }).fail(function(){
      console.log("failed")
    })
  })
});
