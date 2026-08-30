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
