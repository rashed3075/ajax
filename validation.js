function regValid() {
	
	vaild = true;
            var fname = document.forms["registration"]["fname"].value;
            var lname = document.forms["registration"]["lname"].value;
            var gender = document.forms["registration"]["gender"].value;
            var dob = document.forms["registration"]["dob"].value;
            var religion = document.forms["registration"]["religion"].value;
            var praddress = document.forms["registration"]["praddress"].value;
            var peaddress = document.forms["registration"]["peaddress"].value;
            var phone = document.forms["registration"]["phone"].value;
            var email = document.forms["registration"]["email"].value;
            var web = document.forms["registration"]["web"].value;
            var userName = document.forms["registration"]["userName"].value;
            var password = document.forms["registration"]["password"].value;
          
            if(fname === "")
            {
                valid = false;
                document.getElementById("fnameError").innerHTML = "field can't be empty";
            } 
            if(lname === "")
            {
                valid = false;
                document.getElementById("lnameError").innerHTML = "field can't be empty";
            } 
            if(gender === "")
            {
                valid = false;
                document.getElementById("genderError").innerHTML = "field can't be empty";
            } 
            if(dob === "")
            {
                valid = false;
                document.getElementById("dobError").innerHTML = "field can't be empty";
            } 
            if(religion === "")
            {
                valid = false;
                document.getElementById("religionError").innerHTML = "field can't be empty";
            } 
            if(phone === "")
            {
                valid = false;
                document.getElementById("phoneError").innerHTML = "field can't be empty";
            } 
            if(email === "")
            {
                valid = false;
                document.getElementById("emailError").innerHTML = "field can't be empty";
            } 
            if(username === "")
            {
                valid = false;
                document.getElementById("usernameError").innerHTML = "field can't be empty";
            } 
            if(password === "")
            {
                valid = false;
                document.getElementById("passwordError").innerHTML = "field can't be empty";
            } 
           
            return valid;


}
function loginValid(){

	   valid = true;
            var userName = document.forms["login"]["userName"].value;
            var password = document.forms["login"]["password"].value;

            if(username === "")
            {
                valid = false;
                document.getElementById("usernameErr").innerHTML = "field can't be empty";
            }

            if(password === "")
            {
                valid = false;
                document.getElementById("passwordErr").innerHTML = "field can't be empty";
            }
            return valid;

}
function check(val){
    var userName = val.userName.value;
    document.getElementById("errorMsg").innerHTML="";
    if(userName==="")
    {
        document.getElementById("errorMsg").innerHTML="Field can't be empty";
        return false;
    }
    return true;
}
        function search(pForm) {
        var valid = check(pForm);
        if(valid){
var xhttp=new XMLHttpRequest();
xhttp.onload = function() 
{
if(this.status === 200) 
{ 
document.getElementById("fname").innerHTML = this.responseText;
document.getElementById("lname").innerHTML = this.responseText;
document.getElementById("userName").innerHTML = this.responseText;
}
}
xhttp.open("POST", "search.php");
xhttp.send();
        }
        

}