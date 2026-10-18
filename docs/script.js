(function () {
  var root = document.documentElement;

  // Dark / light mode toggle, persisted in localStorage.
  var toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", function () {
    var current = root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // Copy the clone command to the clipboard.
  var copyButton = document.getElementById("copy-button");
  copyButton.addEventListener("click", function () {
    var target = document.getElementById(copyButton.dataset.copyTarget);
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(target.textContent).then(function () {
      copyButton.textContent = "Copied!";
      setTimeout(function () {
        copyButton.textContent = "Copy";
      }, 1500);
    });
  });

  // Keep the footer year current.
  document.getElementById("year").textContent = new Date().getFullYear();
})();
