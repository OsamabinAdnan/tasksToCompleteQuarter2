// Selecting form elements
var resumeForm = document.getElementById('resumeForm');
var resumePreview = document.getElementById('resumePreview');
var previewProfilePic = document.getElementById('previewProfilePic');
var previewName = document.getElementById('previewName');
var previewFatherName = document.getElementById('previewFatherName');
var previewDob = document.getElementById('previewDob');
var previewEmail = document.getElementById('previewEmail');
var previewPhone = document.getElementById('previewPhone');
var previewAddress = document.getElementById('previewAddress');
var previewMatricDegree = document.getElementById('previewMatricDegree');
var previewMatricFromYear = document.getElementById('previewMatricFromYear');
var previewMatricToYear = document.getElementById('previewMatricToYear');
var previewIntermediateDegree = document.getElementById('previewIntermediateDegree');
var previewIntermediateFromYear = document.getElementById('previewIntermediateFromYear');
var previewIntermediateToYear = document.getElementById('previewIntermediateToYear');
var previewBachelorDegree = document.getElementById('previewBachelorDegree');
var previewBachelorFromYear = document.getElementById('previewBachelorFromYear');
var previewBachelorToYear = document.getElementById('previewBachelorToYear');
var previewExperience = document.getElementById('previewExperience');
var previewSkills = document.getElementById('previewSkills');


// Event listener for form submission

resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Profile Picture
    var profilePicInput = document.getElementById('profilePic');
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            previewProfilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Personal Information
    (previewName.textContent = document.getElementById('name').value);
    (previewFatherName.textContent = document.getElementById('fatherName').value);
    (previewDob.textContent = document.getElementById('dob').value);
    (previewEmail.textContent = document.getElementById('email').value);
    (previewPhone.textContent = document.getElementById('phone').value);
    (previewAddress.textContent = document.getElementById('address').value);
    // Education
    previewMatricDegree.textContent = document.getElementById('matricDegree').value;
    previewMatricFromYear.textContent = document.getElementById('matricFromYear').value;
    previewMatricToYear.textContent = document.getElementById('matricToYear').value;
    previewIntermediateDegree.textContent = document.getElementById('intermediateDegree').value;
    previewIntermediateFromYear.textContent = document.getElementById('intermediateFromYear').value;
    previewIntermediateToYear.textContent = document.getElementById('intermediateToYear').value;
    previewBachelorDegree.textContent = document.getElementById('bachelorDegree').value;
    previewBachelorFromYear.textContent = document.getElementById('bachelorFromYear').value;
    previewBachelorToYear.textContent = document.getElementById('bachelorToYear').value;
    // Work Experience and Skills
    previewExperience.textContent = document.getElementById('experience').value;
    previewSkills.textContent = document.getElementById('skills').value;
    // Display the resume preview
    resumePreview.style.display = 'block';
});




