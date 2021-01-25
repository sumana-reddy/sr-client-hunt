/**
 * Get the location
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes GeoLocation API example.
 * @author Sumana Reddy Reddybathula
 */
window.addEventListener('load', (main) => {
    console.log("page is fully loaded");
  });

locationElement.addEventListener('click', locationHandler);
locationElement.addEventListener('touch', locationHandler);