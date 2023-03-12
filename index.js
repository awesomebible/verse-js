export function VerseReplace(versePath){
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let year = now.getFullYear()
    let day = Math.floor(diff / oneDay);

    let x = document.getElementsByClassName("awb-verse");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].src = versePath + year + "/" + day + ".jpg" || "https://verse.awesomebible.de/img/"+year+"/"+day+".jpg";
    }
}