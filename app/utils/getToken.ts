export default async function getToken() {
  const resp = await fetch("https://api.sirv.com/v2/token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
    }),
  });
  if (resp.ok) {
    const data = await resp.json();
    let token = data.token;
    return token;
  }
}
