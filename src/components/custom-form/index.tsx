"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Template from "@/layouts/template";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email is compulsory.",
  }),
  phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Phone number must be a number",
    })
    .refine((val) => val.length === 10, {
      message: "Phone number must be exactly 10 digits long",
    }),
  message: z.string().min(1, {
    message: "Message can not be empty",
  }),
});

export default function CustomForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const bodyData = { ...values };

    try {
      const res = await fetch(`/api/clients/`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // console.log(values, baseUrl);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white p-8 h-full shadow-2xl rounded-tl-3xl shadow-primary/40 rounded-br-3xl"
      >
        <Template>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none shadow-none rounded-tl-xl rounded-br-xl text-lg h-12 px-4"
                    placeholder="Enter your name here"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Enter Your Name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </Template>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
            delay: 0.25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none shadow-none rounded-tl-xl rounded-br-xl text-lg h-12 px-4"
                    placeholder="Enter your email id here"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Enter Your Email ID.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
            delay: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Phone No.</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none shadow-none rounded-tl-xl rounded-br-xl text-lg h-12 px-4"
                    placeholder="Enter your phone number here"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Enter Your Phone No.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
            delay: 0.75,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="rounded-none shadow-none max-h-28 rounded-tl-xl rounded-br-xl text-lg h-12 px-4"
                    placeholder="Enter your message here..."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-base">Enter your message.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
            delay: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Button type="submit" className="rounded-none rounded-tl-xl rounded-br-xl">
            Submit
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
