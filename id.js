const queryString = window.location.search;
const args = new URLSearchParams(queryString);
const code = args.get('code');
console.log(code);

async function getAccessToken() {
  
const accessRequest = fetch("https://oauth.battle.net/token", {
  body: "redirect_uri=https://overwatch-league.github.io/id.html&scope=openid&grant_type=authorization_code&code=" + code,
  headers: {
    Authorization: "Basic MjZhNWE0NzZiOTA2NGJhOTkwNjg5MjIxZmZjMTIwYWU6aWpkTUc4VEdXVDRiaTRrV1dPVHVBQTlmcWhnZDh1Y0Y=",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})

const response = await accessRequest.json();
console.log(response);
console.log(accessRequest);
  
}
 
