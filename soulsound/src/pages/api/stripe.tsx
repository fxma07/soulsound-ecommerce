import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1MvwX0HvxHa3TrQkV2lWbFkS" },
          { shipping_rate: "shr_1MvwXyHvxHa3TrQkaGq4gW8y" },
        ],
        line_items: req.body.cartItems.map((item: any) => {
          const img = item.product.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/oa1zsrrp/production/"
            )
            .replace("-png", ".png");

          console.log(newImage);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.product.name,
                images: [newImage],
              },
              unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.status || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
