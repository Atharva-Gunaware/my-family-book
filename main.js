var images = ["opening 1.jpg",
             "Father.jpeg",
              "Mother.jpeg" ,
               " My.jpeg",
                "Sister.jpeg"];
var names = ["Fmaily Book","Anil Gunaware", "Ashwini Gunaware", "Atharva Gunaware", "Ananya"];
var i = 6;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 6;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
