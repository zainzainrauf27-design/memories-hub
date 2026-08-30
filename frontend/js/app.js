"use strict";

console.log("Memories Hub initialized");
const app = document.getElementById("app");
const homeScreen = document.getElementById("home-screen");
const bottomNav = document.querySelector(".bottom-nav");
const navItems = document.querySelectorAll(".nav-item");
const homeActions = document.querySelectorAll(".home-action");
const notificationContainer = document.getElementById(
  "notification-container"
);

const appState = {
  currentPage: "home"
};

function isElementAvailable(element) {
  return element !== null;
}

console.log("App elements loaded:", {
  app: isElementAvailable(app),
  homeScreen: isElementAvailable(homeScreen),
  bottomNav: isElementAvailable(bottomNav),
  navItems: navItems.length,
  homeActions: homeActions.length,
  notificationContainer: isElementAvailable(notificationContainer)
});
function showNotification(message) {
  if (!notificationContainer) {
    console.log(message);
    return;
  }

  notificationContainer.textContent = message;

  notificationContainer.classList.add("show");

  window.setTimeout(() => {
    notificationContainer.classList.remove("show");
  }, 2500);
}

function setActiveNav(pageName) {
  navItems.forEach((item) => {
    const isActive = item.dataset.page === pageName;

    item.classList.toggle("active", isActive);
  });
}

function updatePageState(pageName) {
  appState.currentPage = pageName;

  setActiveNav(pageName);

  console.log("Current page:", appState.currentPage);
}

function handleNavigation(event) {
  const button = event.currentTarget;
  const pageName = button.dataset.page;

  if (!pageName) {
    return;
  }

  updatePageState(pageName);

  if (pageName === "home") {
    showNotification("Home opened");
    return;
  }

  showNotification(`${pageName} section coming soon`);
}

console.log("Navigation functions ready");
navItems.forEach((item) => {
  item.addEventListener("click", handleNavigation);
});

homeActions.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim();

    if (buttonText.includes("My Memories")) {
      showNotification("My Memories will be available soon");
      return;
    }

    if (buttonText.includes("Create Memory")) {
      showNotification("Create Memory will be available soon");
      return;
    }

    if (buttonText.includes("Explore")) {
      showNotification("Explore will be available soon");
      return;
    }

    showNotification("This feature will be available soon");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  updatePageState("home");
  console.log("Memories Hub is ready");
});
