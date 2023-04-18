import createStripe from "stripe-client";
import { REACT_APP_FIREBASE_SERVE_URL } from "@env";

const stripe = createStripe("pk_test_asndkansdjknasd");

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount) => {
  return fetch(`${REACT_APP_FIREBASE_SERVE_URL}/pay`, {
    body: {
      token,
      amount,
    },
    method: "POST",
  });
};
