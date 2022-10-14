const queryString = window.location.search;
const args = new URLSearchParams(queryString);
const code = args.get('code');
console.log(code);

async function getAccessToken() {
let headers = new Headers();
await headers.append('Authorization', 'Basic ' + btoa('26a5a476b9064ba990689221ffc120ae' + ":" + 'ijdMG8TGWT4bi4kWWOTuAA9fqhgd8ucF'));
await headers.append('redirect_uri', 'https://overwatch-league.github.io/id.html');
await headers.append('scope' , 'openid');
await headers.append('grant_type', 'authorization_code');
await headers.append('code', code);
  
  const accessRequest = await fetch('https://oauth.battle.net/token', {
  method: 'POST', headers: headers });
  
  const response = await accessRequest.json();
  
  console.log(response);
  
}
 
