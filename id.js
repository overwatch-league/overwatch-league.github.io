const queryString = window.location.search;
const args = new URLSearchParams(queryString);
const code = args.get('code');
console.log(code);

async function getAccessToken() {
  
const accessRequest = await fetch('https://oauth.battle.net/token', { 
method: 'POST', headers: {
'Authorization': btoa('26a5a476b9064ba990689221ffc120ae' + ":" + 'ijdMG8TGWT4bi4kWWOTuAA9fqhgd8ucF'),
'redirect_uri': 'https://overwatch-league.github.io/id.html',
'scope': 'openid',
'grant_type': 'authorization_code',
'code': code}});

const response = await accessRequest.json();
console.log(response);
console.log(accessRequest);
  
}
 
