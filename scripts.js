// Get the floating notification element
const notification = document.getElementById('floating-notification');

// Add an event listener to show the notification when the page loads
window.addEventListener('load', () => {
  notification.classList.add('show');
});

// Add an event listener to close the notification when the close button is clicked
document.getElementById('notification-close').addEventListener('click', () => {
  notification.classList.remove('show');
  notification.classList.add('fadeOut'); /* Add fade out animation */
  setTimeout(() => {
    notification.classList.remove('fadeOut');
  }, 500); // Remove fadeOut class after 500ms
});

// Add an event listener to handle the sign-up form submission
document.getElementById('notification-signup').addEventListener('click', () => {
  const email = document.getElementById('notification-email').value;
  // Add your sign-up logic here, e.g. send an AJAX request to your server
  console.log(`Sign up with email: ${email}`);
  notification.classList.remove('show');
  notification.classList.add('fadeOut'); /* Add fade out animation */
  setTimeout(() => {
    notification.classList.remove('fadeOut');
  }, 500); // Remove fadeOut class after 500ms
});