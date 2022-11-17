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
    "<p>Papasula abbotti, or Abbott’s booby, is an endangered seabird that breed only in a few spots on the Australian territory of Christmas Island in the eastern Indian Ocean, although it formerly had a much wider range. The bird forages around Christmas Island, often around nutrient-rich oceanic upwellings. This bird has unique blue-colored webbed feet. Males have pale grey bills with a black tip, whereas females have pink bills with a black tip. There are various cause of decreasing population, including but not limited to its former habitats logged to make way for phosphate mining; introduction of yellow crazy ants, which decreased habitat quality. </p>");
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
    "<h2>"+"Reference Link : "+ data["data"][38][1]["url"]+ "</h2>" + "<br />" + "<p>The smallest of the crocodile species, at only 5 feet long, inhabits the tropics of West and Central"+
    " Africa in mostly rainforests and mid-depth bodies of water. The adults of this species can be noted by their "+
    "dark backside and yellow underside with black patches. The young, however, have lighter brown stripes across their "+
    "backs and tails, with yellow marks on their heads. Dwarf crocodiles eat various bugs and meat. Currently, there are "+
    "between 25,000 and 100,000 African dwarf crocodiles in the world. Data shows that their population is put at risk "+
    "mainly because they are hunted for their meat and leather, and due to a loss of habitat from deforestation.</p>");


  });

  $("#peng").click(function(){
    $("#uin").toggleClass("hide");
    $(".con3").toggleClass("here");
    $(".con3.here").html("<h1>"+ data["data"][40][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][40][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][40][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][40][1]["url"]+ "</h2>" + "<br />" +
    "<p>The African penguin is a small to medium species of penguin. This species' distinctive feature is the pink around their "+
    "eyes, as well as their stubby beak and black coloring around their face. These penguins are found only on the south-west "+
    "coast of Africa. There are two different colonies of African penguins on the mainland in the tourist town Boulders Beach. "+
    "As coastal creatures, African penguins eat pelagic fish. Currently, there are 41,700 African penguins in the world. "+
    "As recently as the 1970s African penguin eggs were considered a delicacy in cuisine. Eggs were smashed all along the "+
    "coast to ensure that the thousands of eggs collected days later were all fresh. This practice going on for decades, in "+
    "addition to oil spills dating back to the 1930s, took a dramatic toll on the African penguins' population.</p>");

  });

  $("#toad").click(function(){
    $("#vivi").toggleClass("hide");
    $(".con4").toggleClass("here");
    $(".con4.here").html("<h1>"+ data["data"][42][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][42][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][42][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][42][1]["url"]+ "</h2>" + "<br />" +
    "<p>The african vivviparous toad can be found in Cote d'lvoire, Guinea, and Libera. These frogs are the only toad who don't lay their eggs. They are a critically endangered species because of habitat loss dude to human expanding to their homes. Their diet consists of various insects: worms, ants, crickets, etc.</p>");

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

//credit : https://www.encyclopedia.com/environment/science-magazines/alabama-cave-shrimp
//https://en.wikipedia.org/wiki/Alabama_cave_shrimp
  $("#shrimp").click(function(){
    $("#alabama").toggleClass("hide");
    $(".con6").toggleClass("here");
    $(".con6.here").html("<h1>"+ data["data"][91][0]+"</h1>" + "<h2>"+ "Scientific Name : " +
    data["data"][91][1]["value"]+"</h2>" + "<h2>"+"Status : " + data["data"][91][2] +"</h2>" +
    "<h2>"+"Reference Link : "+ data["data"][91][1]["url"]+ "</h2>" + "<br />" +
    "<p>Palaemonias alabamae, or Alabama cave shrimps, is a species of shrimp found only in caves in the state of Alabama. They are colorless and largely transparent with a total length of up to 20mm, or 0.8 inches. Their diet consists of detritus and plant matter. The cave systems the shrimps are found in are threatened by pollution from urbanization, as groundwater contamination may result from seage leakage, industrial contaminants, road and highway runoff, and more. </p>");
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
