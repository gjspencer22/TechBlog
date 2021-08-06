async function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#searchInput").value.trim();
  
    console.log(searchInput);

  }
  
  function goToLogin() {
    window.location.replace('/login');
  }

  document.querySelector(".profile-button").addEventListener('click', goToLogin);

  document.querySelector(".search-bar").addEventListener("submit", search 
  );

  
  
  