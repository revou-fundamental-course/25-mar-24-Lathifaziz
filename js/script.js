function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.querySelector('input[name="gender"]:checked');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 ) {
        alert('Tolong masukan data anda : Usia, Berat badan, dan Tinggi badan anda!');
        return;
    }
            var bmi = hitungBMI(weight, height);
            var kategoriBMI = '';
            var hasilBMI = '';

            if (bmi < 18.5) {
                kategoriBMI = 'Anda kekurangan berat badan';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                kategoriBMI = 'Berat badan anda ideal';
            } else if (bmi >= 25 && bmi <= 29.9) {
                kategoriBMI = 'Anda Kelebihan berat badan';
            } else {
                kategoriBMI = 'Anda Kegemukan (Obesitas)';
            }

            var result = document.getElementById("result");
            result.innerHTML = bmi;
            var nilai = document.getElementById("nilai");
            nilai.innerHTML = "BMI Anda adalah :";
            var catagori = document.getElementById("catagori");
            catagori.innerHTML = kategoriBMI;
    
            function hitungBMI(weight, height) {
                height /= 100;
                var bmi = weight / (height*height);
                return bmi.toFixed(2);
  
            } var bmi = hitungBMI(weight, height);
            var kategoriBMI = '';

            if (bmi < 18.5) {
                hasilBMI = 'Hasil BMI anda kurang dari 18.5' +"<br><br>"+
                "Anda berada dalam kategori kekurangan berat badan. <br>Cara terbaik untuk menambah berat badan adalah dengan menjaga pola makan teratur dan berolahraga. <br>Jika BMI anda berda dalam kategori ini maka dianjurkan untuk menambah berat badan anda hingga batas normal";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                hasilBMI = 'Hasil BMI anda diantara 18.5 dan 25'+"<br><br>"+
                "Anda berada dalam kategori berat badan yang ideal. <br>Cara terbaik hidup sehat adalah menjaga berat badan anda agar tetap dalam berat badan yang ideal. <br>Jika BMI anda berda dalam kategori ini maka dianjurkan untuk selalu berolahraga agar anda tetap normal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                hasilBMI = 'Hasil BMI anda diantara 25 dan 30'+"<br><br>"+
                "Anda berada dalam kategori kelebihan berat badan. <br>Cara terbaik untuk menurunkan berat badan adalah dengan menjaga pola makan mengurangi kalori dan berolahraga. <br>Jika BMI anda berda dalam kategori ini maka dianjurkan untuk menurunkan berat badan anda hingga batas normal";
            } else {
                hasilBMI = 'Hasil BMI anda lebih dari 30'+"<br><br>"+
                "Anda berada dalam kategori kegemukan(Obesitas) berat badan. <br>Cara terbaik untuk menurunkan berat badan adalah dengan menjaga pola makan mengurangi dan berolahraga. <br>Jika BMI anda berda dalam kategori ini maka dianjurkan untuk menurunkan berat badan anda hingga batas normal";
            } 

            var hasil = document.getElementById("hasil");
            hasil.innerHTML = hasilBMI ;
            
           
}
document.getElementById('count').addEventListener('click', calculateBMI);
