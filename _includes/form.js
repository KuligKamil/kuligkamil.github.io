// Function to format the date and time from the data
function formatDate(stringDate) {
  // Split the string into date and time parts
  const dateTimeParts = stringDate.split(" ");
  const datePart = dateTimeParts[0]; // Date part like "7/12/2024"
  let timePart = dateTimeParts[1]; // Time part like "23:32:54"
  // Parse hours, minutes, and seconds from the time part
  const [hours, minutes, seconds] = timePart.split(":");
  // Convert hours to 12-hour format and determine AM/PM
  let ampm = "AM";
  let formattedHours = parseInt(hours, 10);
  if (formattedHours >= 12) {
    ampm = "PM";
    if (formattedHours > 12) {
      formattedHours -= 12;
    }
  }
  if (formattedHours === 0) {
    formattedHours = 12; // 12 AM case
  }
  // Format time in HH:mm:ss AM/PM format
  timePart = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  // Return the formatted date and time
  return `${datePart} at ${timePart}`;
}
function fetchComments(csvUrl) {
  fetch(csvUrl)
    .then((response) => response.text()) // Get the response text (data)
    .then((response) => {
      console.log(response);
      const respond2 = response.replace("/*O_o*/", "");
      const responseJSON = JSON.parse(
        respond2.replace(
          /(^\ngoogle\.visualization\.Query\.setResponse\(|\);$)/g,
          ""
        )
      );
      // const responseJSON = JSON.parse(response.replace(/(^google\.visualization\.Query\.setResponse\(|\);$)/g,''));
      console.log(responseJSON);
      // Split the data into rows and then into individual cells
      const rows = responseJSON["table"]["rows"];
      // Get the container element for the comments
      const commentsContainer = document.getElementById("comments");
      const tempDiv = document.createElement("div");
      // Loop through each row of the data
      rows.forEach((row) => {
        const date = formatDate(row["c"][0]["f"]); // Format the date and time
        const name = row["c"][1]["v"]; // Get the name
        const comment = row["c"][2]["v"]; // Get the comment
        const email = row["c"][3]["v"]; // Get the email
        // Create a new div element for the comment
        const commentDiv = document.createElement("div");
        // Set the inner HTML of the div element
        commentDiv.innerHTML = `<strong><a href="mailto:${email}">${name}</a></strong> <em>${date}</em> <p>${comment}</p>`;
        // Append the div element to the comments container
        tempDiv.appendChild(commentDiv);
      });
      commentsContainer.replaceChildren(tempDiv);
    })
    .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
}

const sheetId = "14gVqcCNgnKrURomMVyl5PvtQ5BROaR6vOwiY5JyTAtQ";
// Get the current page URL
const thisPageUrl = window.location.href;
document.getElementById("posturl").value = thisPageUrl;
// Encode the SQL statement to be used in the URL
const sqlStatement = encodeURIComponent(
  `SELECT A, C, D, E WHERE B = '${thisPageUrl}'`
);
// Construct the URL for fetching the data
const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=comments&tq=${sqlStatement}&headers=0`;
// Fetch the data from the Google Sheets URL
fetchComments(csvUrl);
document
  .getElementById("submitButton")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    var fetchForm = document.getElementById("formForComments");
    var data = new FormData(fetchForm);
    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeyCgTOx9wUv1MMaSaU55j_tL8Oty04QzcmzJDtwSlL8TzeMw/formResponse",
        {
          method: "post",
          body: data,
        }
      );
    } catch (err) {
      console.log(err);
      fetchForm.reset();
      document.getElementById("posturl").value = window.location.href;
      fetchComments(csvUrl);
    }
  });
