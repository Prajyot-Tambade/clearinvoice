"use client";
import { Button, Container, Navbar } from "@/components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container>
        <div className="text-center mt-20 space-y-4">
          <span className="rounded-full bg-gray-400/10 px-4 py-2 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
            Free & Open Source
          </span>
          <h1 className="mt-4 w-1/2 mx-auto">
            Effortless Invoicing, Anytime, Anywhere
          </h1>
          <p className="text-muted-foreground">
            Tired of manual invoicing? Our Invoice Generator helps you create
            clean,
            <br /> professional invoices quickly and easily — no design or
            accounting skills needed.
          </p>
          <Button size="lg" className="mt-4">
            <Link href="/invoice/new" className="flex items-center gap-2">
              <motion.div
                whileHover="animate"
                className="flex items-center gap-1"
              >
                Create Invoice
                <ArrowIcon />
              </motion.div>
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}

const ArrowIcon = () => {
  return (
    <motion.svg
      variants={{
        animate: {
          x: 5,
          y: -3,
          scale: 1.5,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </motion.svg>
  );
};
