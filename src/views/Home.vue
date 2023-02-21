<template>

  <article class="home-dialog">
    <section class="card-event">
      <bx-Icon icon="mdi:shield-sun-outline" size="xxl"></bx-Icon>
      <h1 class="gametitle mb-8 text-2xl">SOLAR STORM DAMAGE APP</h1>
      <button class="btn-action-green mb-4" @click="$router.push('/game')">NEW GAME</button>
      <a 
        href="https://boardgamegeek.com/boardgame/274037/solar-storm" 
        class="block hover:bg-[rgba(0,0,0,0.5)] p-5 rounded-3xl" 
        target="_blank">
          SOLAR STORM ON THE BGG
      </a>
    </section>
  </article>
</template>

<script setup>
/* curl--location--request POST 
'http://tools.masquemovil.com/ecap-api/upifyBilling/pinRequest' \
--header 'Authorization: Basic TW9iV2l6YXJkczE0NDpCUEFBNGEza1owemVPeFdvUHFQUg==' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=98B3BEA014E71C8B8B06818CB8967ED0' \
--data 
- raw '{    "MSISDN": "966583628899",    "campaign_id": "4071716733",    "click_id": "12345678",    "source": "Google",    "IdService": "44731",    "IP": "172.18.0.1",    "TransId": "32546844965",    "MNC": "123" */


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID = 98B3BEA014E71C8B8B06818CB8967ED0',
      'Authorization': 'Basic TW9iV2l6YXJkczE0NDpCUEFBNGEza1owemVPeFdvUHFQUg=='
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://tools.masquemovil.com/ecap-api/upifyBilling/pinRequest', { 
   "MSISDN": "966583628899", 
   "campaign_id": "4071716733", 
   "click_id": "12345678", 
   "source": "Google", 
   "IdService": "44731", 
   "IP": "172.18.0.1", 
   "TransId": "32546844965", 
   "MNC": "123"
 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

</script>

<style scoped>
.gametitle {
  font-family: var(--font-primary);

}
.home-dialog {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.card-event {
  margin: 0 auto;
  text-align: center;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 2rem;
  width: clamp(300px, 60%, 500px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}
</style>