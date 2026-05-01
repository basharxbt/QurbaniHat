"use client";

import { Button, Input, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const OrderBook = () => {
  return (
    <div className="my-5 ">
      <h1 className="text-3xl font-bold text-center">Book Now</h1>
      <form className="flex flex-col gap-4 ">
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField className="w-full" name="phone" type="tel">
          <Label>Phone Number</Label>
          <Input placeholder="Enter your phone number" />
        </TextField>
        <TextField className="w-full" name="company">
          <Label>Address</Label>
          <Input placeholder="Enter your full address" />
        </TextField>

        <Button
          onClick={() => toast.success("Order Success")}
          className="btn bg-amber-400"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default OrderBook;
