// script.js
document.addEventListener("DOMContentLoaded", function() {
    const shareBtn = document.querySelector('.share-btn');
    
    shareBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const shareURL = window.location.href;
        
        // Use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Check out this instructor profile!',
                url: shareURL
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            // Fallback: Open a new window with shareable link
            const encodedURL = encodeURIComponent(shareURL);
            window.open(`https://twitter.com/intent/tweet?url=${encodedURL}`, '_blank');
            // For other platforms, replace the URL with the appropriate share link
            // For example, for Facebook: https://www.facebook.com/sharer/sharer.php?u=${encodedURL}
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown > li > a');
    var submenu = document.querySelector('.dropdown > li > ul');

    dropdown.addEventListener('click', function (event) {
        event.preventDefault();
        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            submenu.style.display = 'none';
        }
    });
});
