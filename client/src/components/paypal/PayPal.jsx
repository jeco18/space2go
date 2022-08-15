import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

export default function Paypal() {
  const paypal = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Hotel2Go",
                amount: {
                  currency_code: "PHP",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          
          
          swal({
            title: "Thank you!",
            text: "Successful Transaction!",
            icon: "success",
            button: "Close",
          });
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current)
  }, []);

  return (
    <div className="bg-blue-400 min-h-[100px] p-3 rounded-md" ref={paypal}>
       
    </div>
  );
}
