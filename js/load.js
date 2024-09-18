// load script to portfolio container

window.onload = ()=>{
    servicesTest(1);
}
function servicesTest(tryConnect){

    document.getElementById("status_proses").innerHTML = "Starting Chronome Portfolio container...";
    $.ajax({  
        type: 'POST',  
        url: 'https://chronomedevwebservice-bv0x2dxs.b4a.run/on',
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
                if (tryConnect === 1) {
                    servicesTest(2); // 2nd iteration
                } else if (tryConnect === 2) {
                    $("#game_service_loader").hide();
                    document.getElementById("status_proses").innerHTML = "Failed!";
                    $(".unslate_co--overlayer").hide();
                    document.getElementById("img_loading").src = "images/chibi_angry_by_sakuretta94.png";
                    window.alert("Servis sedang tidak merespon harap coba kembali nanti");
                }
            }
        },
        error : (error)=>{
            console.log(error);
            window.alert("gagal");
            $("#game_service_loader").hide();
            document.getElementById("img_loading").src = "images/chibi_angry_by_sakuretta94_d7kj0os-fullview.png"
            document.getElementById("status_proses").innerHTML = "Failed!";
        },
        timeout : 50000
    });
}