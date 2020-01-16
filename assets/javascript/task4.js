/* Put code for the task below */
$(document).ready(function(){
    $("#Form").click(function(){
      var Phone = $("#phone").val();
      var Email = $("#email").val();
      var Name = $("#fullName").val();
      var Address = $("#address").val();
      if(Phone.length == 10){
        alert("Phone Number Accepted")
      }else{
        alert("Please Use a Real Number!!!")
      }
      if(Email.length == 0){
        alert("Email Required")
      }else{
        alert("Thank You")
      }
      if(Address.length == 0){
        alert("Address Required")
      }else{
        alert("Thank You")
      }
      if(Name.length == 0){
        alert("Name Required")
      }else{
        alert("Thank You")
      }

    });
});
