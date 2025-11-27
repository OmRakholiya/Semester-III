<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hostel Inquiry Form</title>
    <link rel="stylesheet" href="form.css">
    <script src="form.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="home.html">
                <img src="hostelhivelogo.png" alt="Logo" class="nav-logo">
            </a>
        </div>
    </nav>
    
    <h1 class="form-heading">Inquiry Form</h1>

    <form action="submit_inquiry.php" method="POST">
        <div class="left-column">
            <div class="form-group">
                <label for="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" required>
            </div>

            <div class="form-group">
                <label for="mobile">Mobile Number:</label>
                <input type="text" id="mobile" name="mobile" required>
            </div>

            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required>
            </div>

            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected hidden>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea>
            </div>
        </div>
        
        <div class="right-column">
            <div class="form-group">
                <label for="guardian">Guardian's Name:</label>
                <input type="text" id="guardian" name="guardian" required>
            </div>

            <div class="form-group">
                <label for="guardiancontact">Guardian's Contact Number:</label>
                <input type="text" id="guardiancontact" name="guardiancontact" required>
            </div>

            <div class="form-group">
                <label for="course">Course/Program:</label>
                <input type="text" id="course" name="course" required>
            </div>

            <div class="form-group">
                <label for="hostel">Hostel (You are interested in):</label>
                <select id="hostel" name="hostel" required>
                    <option value="" disabled selected hidden>Select a hostel</option>
                    <option value="hostel1">Hostel 1</option>
                    <option value="hostel2">Hostel 2</option>
                    <option value="hostel3">Hostel 3</option>
                </select>
            </div>

            <div class="form-group">
                <label for="roomtype">Preferred Room Type:</label>
                <select id="roomtype" name="roomtype" required>
                    <option value="" disabled selected hidden>Select a room type</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                </select>
            </div>

            <div class="form-group">
                <label for="additionalinfo">Additional Information/Comments:</label>
                <textarea id="additionalinfo" name="additionalinfo"></textarea>
            </div>
        </div>

        <div class="submit-container">
            <input type="submit" value="Submit">
        </div>
    </form>
</body>
</html>
