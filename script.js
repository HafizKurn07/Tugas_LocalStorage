$('#calculateBtn').on('click', function() {
  const name = $('#name').val();
  const gender = $('#gender').val();  
  const weight = $('#weight').val(); 
  const height = $('#height').val(); 
  const age = $('#age').val();  

  let bmr; //  mendeklarasikan variable yang nilainya dapat dirubah

  if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  $('#bmrValue').text(bmr.toFixed(2)); //menghasilkan texs saja bukan html/
  $('#result').removeClass('hidden');

  // Ambil data riwayat yang ada di localStorage atau buat array baru jika belum ada
  const bmrHistory = JSON.parse(localStorage.getItem("bmrHistory")) || [];

  // Tambahkan entri baru ke dalam array bmrHistory
  bmrHistory.push({
      name: name,
      gender: gender,
      weight: weight,
      height: height,
      age: age,
      bmr: bmr.toFixed(2),
      date: new Date().toLocaleString()
  });

  // Simpan kembali array bmrHistory yang diperbarui ke localStorage
  localStorage.setItem("bmrHistory", JSON.stringify(bmrHistory));
});



//parseFloat= digunakan saat input type text (misal uang) bukan type number
//PR KENAPA PAKE CONST/LET