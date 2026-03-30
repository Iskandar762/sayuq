// Determine if a field is blank
function isBlank(inputField) {
  if (inputField.value == "") {
    return true;
  }
  return false;
}

// Remove all error styles from the div passed in
function makeClean(element) {
  element.classList.remove("error");
}

// Wait until the page is loaded, before doing any DOM stuff
window.addEventListener("load", function () {

  // Add listeners for elements with class "hilightable"
  // When user starts typing, remove the error highlight
  var hilightableInputs = document.querySelectorAll(".hilightable");
  for (var i = 0; i < hilightableInputs.length; i++) {
    hilightableInputs[i].addEventListener("input", function (e) {
      makeClean(e.currentTarget); // remove .error from the wrap div
    });
  }

  // ── CLEAR FORM BUTTON ────────────────────────────────────────────
  var clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", function () {
    document.getElementById("artForm").reset();
    // Also clear all error highlights
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for (var i = 0; i < hilightableInputs.length; i++) {
      makeClean(hilightableInputs[i]);
    }
  });

  // ── FORM SUBMIT ──────────────────────────────────────────────────
  var form = document.getElementById("artForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    var isValid = true;

    // Validate Title
    var titleInput = document.getElementById("title");
    var titleWrap  = document.getElementById("titleWrap");
    if (isBlank(titleInput)) {
      titleWrap.classList.add("error");
      isValid = false;
    } else {
      makeClean(titleWrap);
    }

    // Validate Description
    var descInput = document.getElementById("description");
    var descWrap  = document.getElementById("descWrap");
    if (isBlank(descInput)) {
      descWrap.classList.add("error");
      isValid = false;
    } else {
      makeClean(descWrap);
    }

    // Validate Year (required + must be 4 digits)
    var yearInput = document.getElementById("year");
    var yearWrap  = document.getElementById("yearWrap");
    if (isBlank(yearInput) || !/^\d{4}$/.test(yearInput.value.trim())) {
      yearWrap.classList.add("error");
      isValid = false;
    } else {
      makeClean(yearWrap);
    }

    // If all valid, submit
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
      var hilightableInputs = document.querySelectorAll(".hilightable");
      for (var i = 0; i < hilightableInputs.length; i++) {
        makeClean(hilightableInputs[i]);
      }
    }
  });

});