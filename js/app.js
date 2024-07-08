$(function(){

    $("#hide").mouseenter(function(){
      $("#galeria").hide();
    });

    $("#hide").mouseleave(function(){
      $("#galeria").show();
    });

    $("#leave").click(function(){
      window.close();
    });

    $(".logo").click(function(){
      location.reload();
    });

    $("#back").click(function(){
      location.reload();
    });

});