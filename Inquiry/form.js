document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullname");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const address = document.getElementById("address");
    const guardian = document.getElementById("guardian");
    const guardianContact = document.getElementById("guardianContact");
    const course = document.getElementById("course");
    const hostel = document.getElementById("hostel");
    const roomType = document.getElementById("roomType");

    // fdibdhc
    form.addEventListener("submit", function(event) {
        let valid = true;
        
        // Full Name validation
        if (fullName.value.trim() === "") {
            alert("Please enter your full name.");
            fullName.focus();
            valid = false;
        }
        
        // Mobile Number validation
        if (mobile.value.trim() === "") {
            alert("Please enter your mobile number.");
            mobile.focus();
            valid = false;
        } else if (!/^\d{10}$/.test(mobile.value)) {
            alert("Please enter a valid 10-digit mobile number.");
            mobile.focus();
            valid = false;
        }
        
        // Email Address validation
        if (email.value.trim() === "") {
            alert("Please enter your email address.");
            email.focus();
            valid = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            valid = false;
        }
        
        // Date of Birth validation
        if (dob.value.trim() === "") {
            alert("Please enter your date of birth.");
            dob.focus();
            valid = false;
        }
        
        // Gender validation
        if (gender.value.trim() === "") {
            alert("Please select your gender.");
            gender.focus();
            valid = false;
        }
        
        // Address validation
        if (address.value.trim() === "") {
            alert("Please enter your address.");
            address.focus();
            valid = false;
        }
        
        // Guardian's Name validation
        if (guardian.value.trim() === "") {
            alert("Please enter your guardian's name.");
            guardian.focus();
            valid = false;
        }
        
        // Guardian's Contact Number validation
        if (guardianContact.value.trim() === "") {
            alert("Please enter your guardian's contact number.");
            guardianContact.focus();
            valid = false;
        } else if (!/^\d{10}$/.test(guardianContact.value)) {
            alert("Please enter a valid 10-digit contact number.");
            guardianContact.focus();
            valid = false;
        }
        
        // Course/Program validation
        if (course.value.trim() === "") {
            alert("Please enter your course or program.");
            course.focus();
            valid = false;
        }
        
        // Hostel validation
        if (hostel.value.trim() === "") {
            alert("Please select a hostel.");
            hostel.focus();
            valid = false;
        }
        
        // Room Type validation
        if (roomType.value.trim() === "") {
            alert("Please select a preferred room type.");
            roomType.focus();
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault();
        }
    });
});
