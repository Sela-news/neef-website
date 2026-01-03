function previewPhoto(event) {
  const img = document.getElementById("photoPreview");
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "block";
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").textContent =
    "Registration received successfully. Thank you for supporting NEEF.";
  this.reset();
  document.getElementById("photoPreview").style.display = "none";
});
