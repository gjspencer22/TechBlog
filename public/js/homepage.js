document.getElementById("display-confirmation").style.display = "none";

async function newStory(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const beginning = document.querySelector('textarea[name="storyText"]').value.trim();
  console.log(title, beginning);

  if (title && beginning) {
    const response = await fetch("/api/stories", {
      method: "POST",
      body: JSON.stringify({ 
          title, 
          beginning 
        }),
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}



function goToLogin() {
  window.location.replace("/login");
}

document.querySelector(".profile-button").addEventListener("click", goToLogin);
