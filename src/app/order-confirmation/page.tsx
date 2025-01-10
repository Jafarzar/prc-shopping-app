/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const order = searchParams.get("order");
    if (order) {
      setOrderDetails(JSON.parse(decodeURIComponent(order)));
    } else {
      router.push("/"); // Redirect to home if no order details found
    }
  }, [searchParams, router]);

  if (!orderDetails) {
    return <p className="p-4">Loading order details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p>Thank you, {orderDetails.name}, for your order!</p>
      <p className="mt-2">
        A confirmation email has been sent to {orderDetails.email}.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <ul className="mt-2">
          {orderDetails.items.map((item: any) => (
            <li key={item.id} className="border-b py-2">
              {item.name} x {item.quantity} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg font-bold">
          Total: $
          {orderDetails.items
            .reduce(
              (sum: number, item: any) => sum + item.price * item.quantity,
              0
            )
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
