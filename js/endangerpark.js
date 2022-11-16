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
  $("#booby").click(function(){
    //create a header
    $("#bird").toggleClass("hide");
    $(".con").toggleClass("here");
    $(".con.here").html("<h1>"+ data["data"][5][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][5][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][5][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][5][1]["url"]+ "</h2>" + "<br />" +
    "<p>Papasula abbotti, or Abbott’s booby, is an endangered seabird of the sulid family, " +
    "which includes gannets and boobies. They breed only in a few spots on the Australian " +
    "territory of Christmas Island in the eastern Indian Ocean, although it formerly had " +
    "a much wider range.</p>" + "<p>The bird has white plumage with black markings, and is adapted "+
    "for long-distnace flight. It forages around Christmas Island, often around nutrient-rich oceanic " +
    "upwellings, although individuals can travel for thousands of kilometers. This bird also has a unique " +
    "blue-colored webbed feet. Males have pale grey bills with a black tip, whereas females have pink bills with "+
    "a black tip. </p>" + "<p>There are various cause of decreasing population, including but not limited to its " +
    "former habitats logged to make way for phosphate mining; introduction of yellow crazy ants, which decreased "+
    "habitat quality. All nesting areas are now included in a national park. </p>");
    //Source: https://en.wikipedia.org/wiki/Abbott%27s_booby
  });

// population
//where they live
//what they eat
//habitat
//causes of endangerment

//Description references
//https://en.wikipedia.org/wiki/Dwarf_crocodile
//https://sdzwildlifeexplorers.org/animals/african-dwarf-crocodile
  $("#dwarf").click(function(){
    $("#croc").toggleClass("hide");
    $(".con2").toggleClass("here");
    $(".con2.here").html("<h1>"+ data["data"][38][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][38][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][38][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][38][1]["url"]+ "</h2>" + "<br />" +
    "<p>This smallest of the crocodile species, at only 5 feet long, inhabits rainforest and water habitats of West Africa. The adults of this species can be noted by their dark back.</p>");


  });

  $("#peng").click(function(){
    $("#uin").toggleClass("hide");
    $(".con3").toggleClass("here");
    $(".con3.here").html("<h1>"+ data["data"][40][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][40][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][40][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][40][1]["url"]+ "</h2>" + "<br />" +
    "<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

  $("#toad").click(function(){
    $("#vivi").toggleClass("hide");
    $(".con4").toggleClass("here");
    $(".con4.here").html("<h1>"+ data["data"][42][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][42][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][42][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][42][1]["url"]+ "</h2>" + "<br />" +
    "<p>TEXT HERE DESCRIBE CREATURE</p>");

  });

// https://animalia.bio/african-wild-ass
  $("#ass").click(function(){
    $("#donkey").toggleClass("hide");
    $(".con5").toggleClass("here");
    $(".con5.here").html("<h1>"+ data["data"][43][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][43][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][43][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][43][1]["url"]+ "</h2>" + "<br />" +
    "<p>The African Wild Ass inhabits Ethopia, Eritrea, and Somalia. This mammal has a sturdy body and is able to survive extreme dehyrdration. African wild asses are grazer animals which means their diet consists with mostly grass and the ocassional herbs. The population size for these equines ranges from 23-200.</p>");

  });

  $("#shrimp").click(function(){
    $("#alabama").toggleClass("hide");
    $(".con6").toggleClass("here");
    $(".con6.here").html("<h1>"+ data["data"][91][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][91][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][91][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][91][1]["url"]+ "</h2>" + "<br />" +
    "<p>TEXT HERE DESCRIBE CREATURE</p>");
  });

  //Append more endangered species name to our div to display more information on endangered species
  for (i = 0; i <= 40;i++){
    $("#list").append("<h2>" + data["data"][i+149][0]+"</h2>");
  }





});
//If our Api does not
ecosApi.fail(function(request,error){
  console.log(request,error);
  console.log("error");
});
