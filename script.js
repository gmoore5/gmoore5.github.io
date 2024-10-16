// Example: Displaying a dynamic welcome message
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const hour = today.getHours();
  const greeting = hour < 12 ? 'Good Morning!' :
                   hour < 18 ? 'Good Afternoon!' : 'Good Evening!';
  alert(`${greeting} Welcome to my professional profile!`);
});
