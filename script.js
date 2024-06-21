function cekPalindrom() {
    var kata = document.getElementById('kataInput').value;

    var hasil = document.getElementById('hasil');

    var kataBersih = kata.replace(/\s+/g, '').toLowerCase();
    
    var kataBalik = kataBersih.split('').reverse().join('');
    
    if (kataBersih === kataBalik) {
        hasil.innerHTML = `<span style="color: #00ff00;">'${kata}' adalah palindrom!</span>`;
    } else {
        hasil.innerHTML = `<span style="color: #ff4500;">'${kata}' bukan palindrom.</span>`;
    }
}
