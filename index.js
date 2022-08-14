var codes = ["beta-uye-giris","1bd1-11ed"];
var cook = localStorage.getItem('eotClientCode');
if(cook == undefined){
    var codeInput = prompt('Lütfen size verilen kodu girin.', "")

    codes.some((w) => {
        if(codeInput == w){
            localStorage.setItem('eotClientCode',codeInput);
            return true;
        }else{
            alert("Girilen kod yanlış.");
            setTimeout(location.reload(),1000);
        };
    }); 
}else{
    codes.some((w) => {
        if(cook == w){
            return true;
        }else{
            alert("Girilen kod yanlış.");
            localStorage.removeItem('eotClientCode');
            setTimeout(location.reload(),1000);
        }
    });
}
