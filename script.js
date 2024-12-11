function abrirMenu() {
    document.getElementById("menuLateral").style.width = "250px";
  }

  function fecharMenu() {
    document.getElementById("menuLateral").style.width = "0";
  }


  $("#imagem").bind('mouseover',function(){
    
    $(this).animate({height:"400px",width:"400px"});
  
});
$("#imagem").bind('mouseout',function(){
   
      $(this).animate({height:"220px",width:"220px"});
     
});