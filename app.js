document.getElementById("search").addEventListener("input", function() {
    let searchText = this.value.toLowerCase(); // Kiritilgan matnni kichik harflarda olish
    let games = document.querySelectorAll(".game"); // O'yinlarni tanlash

    // Har bir o'yin uchun
    games.forEach(game => {
        let title = game.querySelector(".article-film-title").textContent.toLowerCase(); // O'yin nomini olish
        // Agar kiritilgan matn o'yin nomida mavjud bo'lsa, ko'rsatish
        if (title.includes(searchText)) {
            game.style.display = "block";
        } else {
            game.style.display = "none"; // Kiritilgan matn mos kelmasa, yashirish
        }
    });
});
