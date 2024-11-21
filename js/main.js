// Calculate and display date one month from now
const launchDate = new Date();
launchDate.setMonth(launchDate.getMonth() + 1);
document.getElementById('launch-date').textContent = launchDate.toLocaleDateString(); 