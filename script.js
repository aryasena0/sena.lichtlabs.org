function toggleTheme() {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    return;
  }

  html.classList.toggle("dark");
}

window.onload = () => {
  // set the theme based on the OS theme
  const html = document.querySelector("html");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  }
};

// listen for changes in the OS theme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const html = document.querySelector("html");
    if (e.matches) {
      html.classList.add("dark");
      return;
    }

    html.classList.remove("dark");
  });
