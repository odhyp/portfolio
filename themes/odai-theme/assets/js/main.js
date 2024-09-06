document.addEventListener('DOMContentLoaded', function() {
    // SHARE POST COPY URL BUTTON
    const copyBtn = document.getElementById('copy-url-btn');
    const tooltip = document.getElementById('tooltip');

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const url = window.location.href;
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();

            try {
                document.execCommand('copy');
                
                // Show tooltip
                tooltip.classList.remove('opacity-0', 'invisible');
                tooltip.classList.add('opacity-100', 'visible');
                
                // Hide tooltip after 1.5 seconds
                setTimeout(() => {
                    tooltip.classList.remove('opacity-100', 'visible');
                    tooltip.classList.add('opacity-0', 'invisible');
                }, 1500);
            } catch (err) {
                console.error('Failed to copy URL: ', err);
            }

            document.body.removeChild(textarea);
        });
    }

    // BACK TO TOP BUTTON
    // Get the button
    const backToTopButton = document.getElementById("backToTop");
    
    if (backToTopButton) {
        // When the user scrolls down 100px from the top of the document, show the button
        window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.remove("translate-y-40");
            backToTopButton.classList.add("translate-y-0");
        }
        else {
            backToTopButton.classList.remove("translate-y-0");
            backToTopButton.classList.add("translate-y-40");
        }
        };
        
        // When the user clicks on the button, scroll to the top of the document
        backToTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.error('Back to Top button not found.');
    }


    // MENU DROPDOWN with ANIMATION for Multiple Dropdowns
    const dropdowns = [
        { buttonId: "dropdownButtonProject", menuId: "dropdownMenuProject" },
        { buttonId: "dropdownButtonBlog", menuId: "dropdownMenuBlog" }
    ];

    dropdowns.forEach(({ buttonId, menuId }) => {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        button.addEventListener("click", function () {
            menu.classList.toggle("-top-80");
            menu.classList.toggle("opacity-0");
            menu.classList.toggle("transform");
            menu.classList.toggle("scale-95");
        });

        document.addEventListener("click", function (event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add("-top-80", "opacity-0", "transform", "scale-95");
            }
        });
    });
});
