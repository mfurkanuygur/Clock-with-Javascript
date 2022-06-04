function saat() {
    var d = new Date();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes()
    var hours = d.getHours();
    var p = document.getElementById("time")
    p.innerHTML = hane(hours) + "</br>" + hane(minutes) + "</br>" + hane(seconds)
}

setInterval(saat, 1000)

function hane(deger) {
    // let stringDeger = deger.toString();
    if (deger < 10)
        return deger = "0" + deger;
    else
        return deger

}