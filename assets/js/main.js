// LOAD ALL FUNCTION
document.addEventListener("DOMContentLoaded", () => {
  darkLightMode();
  hamburgerMenu();

  const copyButton = document.getElementById("copy-url-btn");
  copyButton.addEventListener("click", copyUrlToClipboard);
});

document.addEventListener("scroll", () => {
  headerBottomBorder();
  popupNavigation();
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

// ---------- NAVIGATION POP-UP START ---------- //
function popupNavigation() {
  const scrollPoint = 400;
  const popupNav = document.getElementById("popupNavigation");

  if (window.scrollY > scrollPoint) {
    popupNav.classList.remove("translate-y-[200%]");
    setTimeout(() => {
      popupNav.classList.add("translate-y-0");
    }, 150);
  } else {
    popupNav.classList.remove("translate-y-0");
    setTimeout(() => {
      popupNav.classList.add("translate-y-[200%]");
    }, 150);
  }
}
// ---------- NAVIGATION POP-UP END ---------- //

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
  const urlInput = document.createElement("input");
  urlInput.value = window.location.href;
  document.body.appendChild(urlInput);
  urlInput.select();
  document.execCommand("copy");
  document.body.removeChild(urlInput);

  // Optional: Show a success message
  alert("URL copied to clipboard!");
}
// ---------- COPY URL BUTTON END ---------- //
