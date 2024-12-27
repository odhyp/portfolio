// LOAD ALL FUNCTION
document.addEventListener("DOMContentLoaded", () => {
  darkLightMode();
  hamburgerMenu();
  searchModal();
  copyUrlToClipboard();
});

document.addEventListener("scroll", () => {
  headerBottomBorder();
});

// ---------- DARK/LIGHT MODE START ---------- //
function darkLightMode() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeDarkIcon = document.getElementById("theme-toggle-dark");
  const themeLightIcon = document.getElementById("theme-toggle-light");

  // Apply theme based on preference
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      themeDarkIcon.classList.remove("hidden");
      themeLightIcon.classList.add("hidden");
      themeToggleButton.setAttribute("aria-label", "Switch to light mode");
      setGiscusTheme("noborder_dark");
    } else {
      document.documentElement.classList.remove("dark");
      themeLightIcon.classList.remove("hidden");
      themeDarkIcon.classList.add("hidden");
      themeToggleButton.setAttribute("aria-label", "Switch to dark mode");
      setGiscusTheme("noborder_light");
    }
  };

  // Toggle between light and dark theme
  const changeTheme = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("color-theme", newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme based on saved preference or system settings
  const initTheme = () => {
    const savedTheme = localStorage.getItem("color-theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
    applyTheme(theme);
  };

  // Event listener for theme toggle button
  themeToggleButton.addEventListener("click", () => {
    changeTheme();
  });

  // Apply the correct theme on page load
  initTheme();
}
// ---------- DARK/LIGHT MODE END ---------- //

// ---------- HAMBURGER MENU START ---------- //
function hamburgerMenu() {
  const menuOpenButton = document.getElementById("menu-open");
  const menuCloseButton = document.getElementById("menu-close");
  const mobileNav = document.getElementById("mobile-nav");
  const menuLinks = document.querySelectorAll("#mobile-nav-menu a");

  // OPEN BUTTON
  const openMenu = () => {
    mobileNav.classList.remove("hidden");
    setTimeout(() => {
      mobileNav.classList.remove("translate-x-[200%]");
      mobileNav.classList.add("translate-x-full");
    }, 50);
  };

  // CLOSE BUTTON
  const closeMenu = () => {
    mobileNav.classList.remove("translate-x-full");
    mobileNav.classList.add("translate-x-[200%]");
    setTimeout(() => {
      mobileNav.classList.add("hidden");
    }, 200);
  };

  // OPEN AND CLOSE EVENTS
  menuOpenButton.addEventListener("click", openMenu);
  menuCloseButton.addEventListener("click", closeMenu);

  // HANDLE CLICKS ON MENU LINKS
  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetUrl = link.getAttribute("href");
        closeMenu();
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 200);
      });
    });
  }

  // HANDLE CLICKS OUTSIDE THE MENU
  document.addEventListener("click", function (event) {
    if (
      !mobileNav.contains(event.target) &&
      !menuOpenButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}
// ---------- HAMBURGER MENU END ---------- //

// ---------- HEADER BOTTOM BORDER START ---------- //
function headerBottomBorder() {
  const scrollPoint = 20;
  const pageHeader = document.getElementById("header");

  if (window.scrollY > scrollPoint) {
    pageHeader.classList.add("border-b", "shadow");
  } else {
    pageHeader.classList.remove("border-b", "shadow");
  }
}
// ---------- HEADER BOTTOM BORDER END ---------- //

// ---------- SET GISCUS THEME START ---------- //
function setGiscusTheme(theme) {
  var iframe = document.querySelector(".giscus-frame");

  if (iframe) {
    var url = new URL(iframe.src);
    url.searchParams.set("theme", theme);
    iframe.src = url.toString();
  }
}
// ---------- SET GISCUS THEME END ---------- //

// ---------- COPY URL BUTTON START ---------- //
function copyUrlToClipboard() {
  // Select all buttons with the class 'copy-url-btn'
  const copyButtons = document.querySelectorAll(".copy-url-btn");

  // Function to handle the copy success alert
  const copyAlertSuccess = (button) => {
    const copyIcon = button.querySelector(".copy-icon");
    const copyIconSuccess = button.querySelector(".copy-icon-success");
    const copyAlert = button.querySelector(".copy-alert");

    copyIcon.classList.add("hidden");
    copyIconSuccess.classList.remove("hidden");

    copyAlert.classList.remove("hidden");
    setTimeout(() => {
      copyAlert.classList.remove("scale-0");
    }, 100);

    setTimeout(() => {
      copyIcon.classList.remove("hidden");
      copyIconSuccess.classList.add("hidden");
      copyAlert.classList.add("scale-0");
      setTimeout(() => {
        copyAlert.classList.add("hidden");
      }, 100);
    }, 1500);
  };

  // Add event listener to each button
  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const urlInput = document.createElement("input");
      urlInput.value = window.location.origin + window.location.pathname;
      document.body.appendChild(urlInput);
      urlInput.select();
      document.execCommand("copy");
      document.body.removeChild(urlInput);
      copyAlertSuccess(button);
    });
  });
}
// ---------- COPY URL BUTTON END ---------- //

// ---------- SEARCH START ---------- //
function searchModal() {
  const searchOpenButton = document.getElementById("search-button");
  const searchCloseButton = document.getElementById("search-close");
  const searchModal = document.getElementById("search-modal");
  const searchBar = document.getElementById("search");

  // OPEN SEARCH
  const openSearch = () => {
    searchModal.classList.remove("hidden");
    setTimeout(() => {
      searchModal.classList.remove("opacity-0");
      searchModal.classList.add("opacity-100");
    }, 200);

    // Focus to search input
    const searchInput = searchBar.querySelector('input[type="text"]');
    if (searchInput) {
      searchInput.focus();
    }
  };

  // CLOSE SEARCH
  const closeSearch = () => {
    searchModal.classList.remove("opacity-100");
    searchModal.classList.add("opacity-0");
    setTimeout(() => {
      searchModal.classList.add("hidden");
    }, 200);
  };

  // OPEN AND CLOSE SEARCH EVENT
  searchOpenButton.addEventListener("click", openSearch);
  searchCloseButton.addEventListener("click", closeSearch);

  // HANDLE CLICKS OUTSIDE SEARCH MODAL
  document.addEventListener("click", function (event) {
    if (
      !searchBar.contains(event.target) &&
      !searchOpenButton.contains(event.target)
    ) {
      closeSearch();
    }
  });

  // HANDLE KEYBOARD SHORTCUTS TO OPEN AND CLOSE SEARCH
  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      openSearch();
      event.preventDefault();
    } else if (event.key === "Escape") {
      closeSearch();
    }
  });
}
// ---------- SEARCH END ---------- //
