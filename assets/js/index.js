

$("#add_user").submit(function(event){
    alert("Data inserted")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })

    var request = {
        "url": `http://localhost:3001/api/test/${data.id}`,
        "method": "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("data was updated")
    })
})


//delete method
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a .delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3001/api/test/${id}`,
            "method" : "DELETE"
        }

        //user permisssion to delete
        if(confirm("Do you really want to delete this person ?")){
            $.ajax(request).done(function(response){
                alert("data was deleted");
                location.reload();
            })
        }

    })
}