const { stringify } = require("postcss");

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

        // Click functionality
        button.addEventListener("click", function () {
            menu.classList.toggle("-top-80");
            menu.classList.toggle("opacity-0");
            menu.classList.toggle("transform");
            menu.classList.toggle("scale-95");
        });

        // Hover functionality
        button.addEventListener("mouseenter", function () {
            menu.classList.remove("-top-80", "opacity-0", "transform", "scale-95");
        });

        button.addEventListener("mouseleave", function () {
            setTimeout(() => {
                if (!menu.matches(':hover')) {
                    menu.classList.add("-top-80", "opacity-0", "transform", "scale-95");
                }
            }, 200);
        });

        menu.addEventListener("mouseleave", function () {
            setTimeout(() => {
                if (!button.matches(':hover')) {
                    menu.classList.add("-top-80", "opacity-0", "transform", "scale-95");
                }
            }, 200);
        });

        // Click outside to close
        document.addEventListener("click", function (event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add("-top-80", "opacity-0", "transform", "scale-95");
            }
        });
    });

    // WEDDING HERE
    // Function to copy text to clipboard
    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied: " + text); // Optionally show a message
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    // Add click event listeners to all copy buttons
    const copyButtons = document.querySelectorAll('button[data-account]');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the account number from the data attribute
            const accountNumber = this.getAttribute('data-account');
            copyTextToClipboard(accountNumber);
        });
    });

});

// Image Modals and zoom ins
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('closeModal');
    const imageTriggers = document.querySelectorAll('.modal-trigger');

    // Loop through all images with class "modal-trigger" to make them clickable
    imageTriggers.forEach(function(image) {
        image.addEventListener('click', function () {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modalImg.src = this.src; // Set modal image source to the clicked image source
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function (e) {
        if (e.target !== modalImg) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
    });
});

// Audio Player
document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    // Update button visibility based on audio playback state
    function updateButtonState () {
        if (audioPlayer.paused) {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        } else {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
    }

    // Play audio and update button state on page load
    audioPlayer.play();
    updateButtonState();

    // Toggle play/pause on button click
    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause()
        }
        updateButtonState();
    }); 
});

// API GET DATA, Generate child from data-container form tag
async function getWishes() {
    const apiUrl = "https://wedding-invitation-be.vercel.app/api/wishes";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Select the container where you want to display the data
      const container = document.getElementById('data-container');
      
      // Create HTML to display the data
      const html = data.map(item => `
        <div>
            <p class="font-bold">${item.name}</p>
            <p>${item.wishes}</p>
            <p class="text-xs">${new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
      `).join('');
      
      // Insert the HTML into the container
      container.innerHTML = html;
    } catch (error) {
      console.log(error);
    }
};

// Initial call
getWishes();

// Wishes form
document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const form = document.forms['wishesForm'];
    
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Get the name and wishes from the input fields
        const name = form.querySelector('input[placeholder="Name"]').value;
        const wishes = form.querySelector('input[placeholder="Wishes"]').value;
        const attendanceYes = form.querySelector('input[id="attendance-yes"]').checked;
        const attendanceNo = form.querySelector('input[id="attendance-no"]').checked;
        
        let attendance = null;
        
        if (attendanceYes) {
            attendance = true;
        } else if (attendanceNo) {
            attendance = false;
        }
        
        if (!name || !wishes || attendance === null ) {
            alert("Please fill in both fields.");
            return;
        }
        
        const data = {
            name,
            wishes,
            attendance,
        };
        
        const apiUrl = 'https://wedding-invitation-be.vercel.app/api/wishes';
        
        await fetch(apiUrl, {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(data)
        });

        // Clear the form inputs
        form.reset();

        // Run fetch
        getWishes();
    });
});
