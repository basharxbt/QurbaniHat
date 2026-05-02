"use client";

import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const OrderBook = () => {
  return (
    <div className="my-5 ">
      <h1 className="text-3xl font-bold text-center">Book Now</h1>
      <form
        onSubmit={() => toast.success("Order Success")}
        className="flex flex-col gap-4 "
      >
        <TextField isRequired className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField isRequired className="w-full" name="phone" type="tel">
          <Label>Phone Number</Label>
          <Input placeholder="Enter your phone number" />
        </TextField>
        <TextField isRequired className="w-full" name="company">
          <Label>Address</Label>
          <Input placeholder="Enter your full address" />
        </TextField>

        <Input type="submit" className="btn bg-amber-400"></Input>
      </form>
    </div>
  );
};

export default OrderBook;
