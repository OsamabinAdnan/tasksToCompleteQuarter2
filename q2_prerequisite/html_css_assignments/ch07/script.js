function showOtherField() {
    // Get the dropdown and the "Other" field
    var jobDropdown = document.getElementById("list");
    var otherField = document.getElementById("otherSource");
    
    // Show the additional field if "Other" is selected, hide otherwise
    if (jobDropdown.value === "other") {
    otherField.style.display = "block";
    } else {
    otherField.style.display = "none";
    }
}