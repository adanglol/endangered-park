// This is our Js

//see if it works
console.log("HELLO WORLD");
console.log("SHIT2")


var ecosApi = $.ajax({
  url: "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export",
  method: "GET",
  datatype: "JSON",
});

//If our Api has been implemented succesfully
ecosApi.done(function(data){
  console.log("API has been successfully implemented here is some data to show that it is working", data);

  //Now that we know it works lets try to access some data on endangered species
  console.log(data["meta"]);
  console.log(data["data"]);

  for (var num = 0; num < 5; num++){
    $("#output").append(data["data"][5][num] + "<br />");
  };
  for (var num = 0; num < 5; num++){
    $("#output").append(data["data"][38][num] + "<br />");
  };
  for (var num = 0; num < 5; num++){
    $("#output").append(data["data"][40][num] + "<br />");
  };
  for (var num = 0; num < 5; num++){
    $("#output").append(data["data"][42][num] + "<br />" );
  };
  for (var num = 0; num < 5; num++){
    $("#output").append(data["data"][43][num] + "<br />");
  };

  for (var num = 0;num < 5; num++){
    $("#output").append(data["data"][91][num] + "<br />");
  }






  $("#booby").click(function(){
    //create a header
    $("#bird").toggleClass("hide");
    $(".con").toggleClass("here");
    $(".con.here").html("<h1>"+ data["data"][5][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][5][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][5][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][5][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

  $("#dwarf").click(function(){
    $("#croc").toggleClass("hide");
    $(".con2").toggleClass("here");
    $(".con2.here").html("<h1>"+ data["data"][38][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][38][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][38][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][38][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");


  });

  $("#peng").click(function(){
    $("#uin").toggleClass("hide");
    $(".con3").toggleClass("here");
    $(".con3.here").html("<h1>"+ data["data"][40][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][40][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][40][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][40][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

  $("#toad").click(function(){
    $("#vivi").toggleClass("hide");
    $(".con4").toggleClass("here");
    $(".con4.here").html("<h1>"+ data["data"][42][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][42][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][42][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][42][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

  $("#ass").click(function(){
    $("#donkey").toggleClass("hide");
    $(".con5").toggleClass("here");
    $(".con5.here").html("<h1>"+ data["data"][43][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][43][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][43][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][43][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

  $("#shrimp").click(function(){
    $("#alabama").toggleClass("hide");
    $(".con6").toggleClass("here");
    $(".con6.here").html("<h1>"+ data["data"][91][0]+"</h1>" + "<h2>"+ "Scientific Name : " + data["data"][91][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][91][2] +"</h2>" + "<h2>"+"Reference Link : "+ data["data"][91][1]["url"]+ "</h2>" + "<br />" +"<p>TEXT HERE DESCRIBE CREATURE</p>");

  });
});
//If our Api does not
ecosApi.fail(function(request,error){
  console.log(request,error);
  console.log("error");
});
