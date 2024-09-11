// load script to portfolio container

window.onload = ()=>{
    servicesTest();
}
function servicesTest(){

    document.getElementById("status_proses").innerHTML = "Starting Chronome Portfolio container...";
    $.ajax({  
        type: 'POST',  
        url: 'https://chronomedevwebservice-bv0x2dxs.b4a.run/',
        crossDomain: true,
        headers: {
            'Content-Type' : 'application/json'
        },
        dataType: "json",
        data: "",
        success: (data_respon)=> {
            if(data_respon["status"] == 1){
                document.getElementById("status_proses").innerHTML = "Success!";
                window.location.assign("https://chronomedevwebservice-bv0x2dxs.b4a.run/");
            } else {
                $("#game_service_loader").hide();
                document.getElementById("status_proses").innerHTML = "Failed!";
                $(".unslate_co--overlayer").hide();
                document.getElementById("img_loading").src = "images/chibi_angry_by_sakuretta94.png";
                window.alert("Servis sedang tidak merespon harap coba kembali nanti");
            }
        },
        error : (error)=>{
            console.log(error);
            window.alert("gagal");
            $("#game_service_loader").hide();
            document.getElementById("img_loading").src = "images/chibi_angry_by_sakuretta94_d7kj0os-fullview.png"
            document.getElementById("status_proses").innerHTML = "Failed!";
        }
    });
}