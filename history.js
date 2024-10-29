$(document).ready(function() {
    // Ambil data riwayat BMR dari localStorage atau buat array kosong jika tidak ada
    const bmrHistory = JSON.parse(localStorage.getItem("bmrHistory")) || [];

    // Fungsi untuk menampilkan data riwayat BMR di tabel
    function displayHistory(data) {
        $('#historyTable').empty(); // Kosongkan tabel terlebih dahulu
        if (data.length > 0) {
            $.each(data, function(index, entry) {
                $('#historyTable').append(`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${entry.name}</td>
                        <td>${entry.gender}</td>
                        <td>${entry.weight}</td>
                        <td>${entry.height}</td>
                        <td>${entry.age}</td>
                        <td>${entry.bmr}</td>
                        <td>${entry.date}</td>
                    </tr>
                `);
            });
        } else {
            $('#historyTable').append('<tr><td colspan="7" class="text-center">No history available</td></tr>');
        }
    }

    // Tampilkan semua data riwayat saat halaman dimuat
    displayHistory(bmrHistory);

    // Event pencarian nama
    $('#searchInput').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        // Filter data berdasarkan nama yang mengandung kata pencarian
        const filteredData = bmrHistory.filter(entry => entry.name.toLowerCase().includes(searchTerm));
        
        // Tampilkan data yang sesuai dengan hasil pencarian
        displayHistory(filteredData);
    });
});
