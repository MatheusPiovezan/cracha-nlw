 


const linksSocialMidia = {
  github: "MatheusPiovezan",
  youtube: "jakelinygracielly",
  facebook: "maykbrito",
  instagram: "jakeliny.gracielly",
  twitter: "jakelinytec"
}


function changeSocialMediaLinks() {
  //document.getElementById("userName").textContent = "Matheus Piovezan";
  //userName.textContent = "Matheus Piovezan";

  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    
    li.children[0].href = `https://www.${social}.com/${linksSocialMidia[social]}`;

    //alert(li.children[0].href);
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    userPhoto.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
}

getGitHubProfileInfos();