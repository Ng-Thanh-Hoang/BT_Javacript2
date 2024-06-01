function checkUser(){
    let myConnect = document.getElementById("ketNoi");
    let user = document.getElementById("customerType").value;

    switch (user) {
        case "nhaDan":
            myConnect.style.display = "none";
            break;
        case "doanhNghiep":
            myConnect.style.display = "block";
            break;
        default:
            myConnect.style.display = "none";
            break;
    }
}