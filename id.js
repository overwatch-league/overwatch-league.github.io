const queryString = window.location.search;
const args = new URLSearchParams(queryString);
const code = args.get('code');
console.log(code);

async function getAccessToken() {

const params = await new URLSearchParams();
params.append('redirect_uri', 'https://overwatch-league.github.io/id.html');
params.append('scope', 'openid');
params.append('grant_type', 'authorization_code');
params.append('code', code);

const accessRequest = await fetch("https://oauth.battle.net/token", {
  body: params,
  headers: {
    Authorization: "Basic MjZhNWE0NzZiOTA2NGJhOTkwNjg5MjIxZmZjMTIwYWU6aWpkTUc4VEdXVDRiaTRrV1dPVHVBQTlmcWhnZDh1Y0Y=",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
});

const response = await accessRequest.json();
console.log(response);
console.log(accessRequest);
  
}
 
