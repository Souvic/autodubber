console.log("Sanity check!");

// Get Stripe publishable key
fetch("/config")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);

  // new
  // Event handler
  var creditadd=Math.ceil(parseFloat($("#creditadd").text(),10));
  document.querySelector("#BuyBtn2").addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("/create-checkout-session/"+creditadd.toString())
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      // Redirect to Stripe Checkout
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
  document.querySelector("#BuyBtn1").addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("/create-checkout-session/100")
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      // Redirect to Stripe Checkout
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
});
