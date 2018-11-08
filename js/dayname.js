function jsonApi() {
    var maleName;
    var femaleName;
    myFunction();
    var obj = new XMLHttpRequest();
    obj.open("POST", "http:/localhost:8080/save");
    obj.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"mName": "maleName", "fName": "femaleName"});
    obj.send(data);
    document.write("All done you can check now");
    obj.onreadystatechange = function checkAPIState() {
        console.log("Checkin status");
        if (this.status == 200 && this.readyState == 4) {
            document.write(obj.response);
        }
        else {
            console.log(this.status);
        }
    }
}


    function myFunction(){
        var inputDate=document.getElementById("date").value;
        var dayarray=inputDate.split("-");
        var myDay=new Date(dayarray[0],dayarray[1]-1,dayarray[2])
        var day=myDay.getDay();
        switch (day) {
            case 0:
                maleName="Kwesi";
                femaleName="Akosua";
                break;
            case 1:
                maleName="Kwadwo";
                femaleName="Adwoa";
                break;
            case 2:
                maleName="Kwabena";
                femaleName="Abena";
                break;
            case 3:
                maleName="Kweku";
                femaleName="Akua";
                break;
            case 4:
                maleName="Yaw";
                femaleName="Yaa";
                break;
            case 5:
                maleName="Kofi";
                femaleName="Afua";
                break;
            case 6:
                maleName="Kwame";
                femaleName="Ama";
                break;
            default:
                break;
        }
    }
    function showFemaleName() {
        myFunction();
        document.write("Female name for the selected date is: "+ femaleName);

    }
    function showMaleName() {
        myFunction();
        document.write("Male name for the selected date is: "+ maleName);

    }
    function showBothNames() {
        myFunction();
        document.write("Male Name: "+ maleName + "<br>"+"Female Name:" + femaleName);
   }