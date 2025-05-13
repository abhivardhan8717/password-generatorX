document.getElementById('copyButton').addEventListener('click', function() {
    // Get the password input field
    const passwordField = document.getElementById('password');
    
    // Select the text in the input field
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Show feedback message
    const feedback = document.getElementById('copyFeedback');
    feedback.style.display = 'block';
    
    // Hide the feedback message after 2 seconds
    setTimeout(function() {
        feedback.style.display = 'none';
    }, 2000);

    // Optionally, animate the copy icon as a visual cue
    const copyIcon = document.querySelector('.copy-icon');
    copyIcon.style.transform = 'scale(1.5)';
    setTimeout(function() {
        copyIcon.style.transform = 'scale(1)';
    }, 300);
});
