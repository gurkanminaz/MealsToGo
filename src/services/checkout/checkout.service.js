import createStripe from "stripe-client";

const stripe = createStripe("pk_test_asndkansdjknasd");

export const cardTokenRequest = (card) => stripe.createToken({ card });
