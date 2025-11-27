<?php
// Include the database connection file
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $fullname = $_POST['fullname'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $guardian = $_POST['guardian'];
    $guardiancontact = $_POST['guardiancontact'];
    $course = $_POST['course'];
    $hostel = $_POST['hostel'];
    $roomtype = $_POST['roomtype'];
    $additionalinfo = $_POST['additionalinfo'];

    // Sanitize and validate input data
    $fullname = mysqli_real_escape_string($conn, $fullname);
    $mobile = mysqli_real_escape_string($conn, $mobile);
    $email = mysqli_real_escape_string($conn, $email);
    $dob = mysqli_real_escape_string($conn, $dob);
    $gender = mysqli_real_escape_string($conn, $gender);
    $address = mysqli_real_escape_string($conn, $address);
    $guardian = mysqli_real_escape_string($conn, $guardian);
    $guardiancontact = mysqli_real_escape_string($conn, $guardiancontact);
    $course = mysqli_real_escape_string($conn, $course);
    $hostel = mysqli_real_escape_string($conn, $hostel);
    $roomtype = mysqli_real_escape_string($conn, $roomtype);
    $additionalinfo = mysqli_real_escape_string($conn, $additionalinfo);

    // Insert the inquiry data into the database
    $sql = "INSERT INTO inquiries (fullname, mobile, email, dob, gender, address, guardian, guardiancontact, course, hostel, roomtype, additionalinfo)
            VALUES ('$fullname', '$mobile', '$email', '$dob', '$gender', '$address', '$guardian', '$guardiancontact', '$course', '$hostel', '$roomtype', '$additionalinfo')";

    if ($conn->query($sql) === TRUE) {
        // Success message
        echo "<div class='success-message'>Inquiry submitted successfully!</div>";
    } else {
        echo "<div class='error-message'>Error: " . $conn->error . "</div>";
    }

    // Close the connection
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inquiry Form</title>
    <style>
/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

/* Container for messages */
.success-message, .error-message {
    padding: 40px;
    margin-top: 20px;
    border-radius: 30px;
    text-align: center;
    width: 80%;
    max-width: 600px;
    font-size: 30px;
    font-weight: bold;
    box-sizing: border-box;
}

/* Success message styling */
.success-message {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Error message styling */
.error-message {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media screen and (max-width: 600px) {
    .success-message, .error-message {
        width: 95%;
        font-size: 14px;
    }
}

    </style>
</head>