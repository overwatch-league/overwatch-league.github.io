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

  const request = await fetch("https://oauth.battle.net/token", {
    body: params,
    method: "POST",
    headers: {
      Authorization: "Basic MjZhNWE0NzZiOTA2NGJhOTkwNjg5MjIxZmZjMTIwYWU6aWpkTUc4VEdXVDRiaTRrV1dPVHVBQTlmcWhnZDh1Y0Y=",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  const response = await request.json();
  console.log(response);
  console.log(request);

  document.getElementById('debug').innerHTML =
    'DEBUG (IGNORE IF UNSURE): \n' + JSON.stringify(response);

  //GET ID

  const access_token = response.access_token;

  const requestId = await fetch('https://oauth.battle.net/userinfo', { headers: { 'Authorization': 'Bearer ' + access_token } });

  const responseId = await requestId.json();
  console.log(responseId);

  document.getElementById('id_text').innerHTML = 'Your Account Id is:';
  document.getElementById('account_id').innerHTML = responseId.id + (" ("+ responseId.battletag + ")");

  //DEBUG
  document.getElementById('debug').innerHTML +=
   '\n' + JSON.stringify(responseId);
}
