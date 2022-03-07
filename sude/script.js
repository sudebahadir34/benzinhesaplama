document.getElementById("listeYillar").addEventListener("change",hesapla);
let i;

function karsilama(){
    for(i=2000;i<2023;i++){
        document.createElement("option");
        document.getElementById("listeYillar").appendChild(yil);
        yil.innerHTML=i;
    }

}

let guncelYil=tarih.getFullyear;


function hesapla(){

    let liste=document.getElementById("listeYillar");
    let secilenYilFiyat=liste.options[liste.selectedIndex].value;
    console.log(secilenYilFiyat);
    let sonuc=50/secilenYilFiyat;
    console.log(sonuc);
    document.getElementById("sonuc").innerHTML="seçtiğiniz yılda 50 tl ile"+sonuc.toFixed(1)+" Lt  benzin alınabiliyordu.";
}