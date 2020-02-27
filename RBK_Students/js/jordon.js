
data = data.filter(function(element){
    return element.local === "Jordon";
});

for(var i = 0; i < data.length; i++){
    var url = data[i].img;
    var details = "<strong>Full name </strong>"+ data[i].firstName + " " + data[i].lastName+"<br><br>" + "<strong>Age </strong>" + data[i].age +"<br><br>" + "<strong>Sexe </strong>" + data[i].sexe + "<br><br>" + "<strong>Location </strong>"+data[i].local+"<br><br>" + "<strong>Class </strong>"+data[i].rank+"<br><br>" + "<strong>Github link </strong><a href = "+data[i].github+">" +data[i].github +"</a>";
    $("section .container").append("<div class='row'><div class='col-md'><a href='#' + id="+i+"><img src="+url+"></a></div><div class='col-md' id=info"+i+">"+details+"</div></div><br>");
}

$("#filter").keyup(function(){
    var val = $(this).val().trim();
    $("section div").hide();
    if(val.length === 0){
        $("section div").show();
    } else{
        $("section div:contains("+val+")").show().prev().show();
    }
});

$("#sort").change(function(){
    var val = $(this).val().trim();
    if(val === "acc"){
        data = data.sort(function(a, b){
            if(a.firstName === b.firstName){
                return a.lastName > b.lastName ? 1:-1;
            }
            return a.firstName > b.firstName ? 1:-1;
        });
    } else if(val === "dec"){
        data = data.sort(function(a, b){
            if(a.firstName === b.firstName){
                return a.lastName > b.lastName ? -1:1;
            }
            return a.firstName > b.firstName ? -1:1;
        })
    } else if(val === "age"){
        data = data.sort(function(a, b){
            return a.age - b.age;
        });
    }
    $("section .container").html("");
    for(var i = 0; i < data.length; i++){
        var url = data[i].img;
        var details = "<strong>Full name </strong>"+ data[i].firstName + " " + data[i].lastName+"<br><br>" + "<strong>Age </strong>" + data[i].age +"<br><br>" + "<strong>Sexe </strong>" + data[i].sexe + "<br><br>" + "<strong>Location </strong>"+data[i].local+"<br><br>" + "<strong>Class </strong>"+data[i].rank+"<br><br>" + "<strong>Github link </strong><a href = "+data[i].github+">" +data[i].github +"</a>";
        $("section .container").append("<div class='row'><div class='col-md'><a href='#' + id="+i+"><img src="+url+"></a></div><div class='col-md' id=info"+i+">"+details+"</div></div><br>");
    }
});


