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
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white p-6 h-full shadow-2xl rounded-tl-3xl shadow-primary/40 rounded-br-3xl"
      >
        <Template>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none shadow-none rounded-tl-xl rounded-br-xl"
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none shadow-none rounded-tl-xl rounded-br-xl"
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="rounded-none shadow-none max-h-28 rounded-tl-xl rounded-br-xl"
                    placeholder="Enter your message here..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your message.</FormDescription>
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
            delay: 0.65,
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
