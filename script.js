document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        const post = posts.find(p => p.id === postId);

        if (post) {
            document.getElementById('post-title-meta').textContent = post.title + " - Kod Evreni";
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-meta').textContent = `Yazar: ${post.author} - Yayınlanma Tarihi: ${post.date}`;
            document.getElementById('post-image').src = post.image;
            document.getElementById('post-image').alt = post.title;
            document.getElementById('post-content').innerHTML = post.content;
        } else {
            document.getElementById('post-title').textContent = "Haber Bulunamadı";
            document.getElementById('post-content').innerHTML = "<p>Aradığınız haber maalesef bulunamadı.</p>";
        }
    }
});
