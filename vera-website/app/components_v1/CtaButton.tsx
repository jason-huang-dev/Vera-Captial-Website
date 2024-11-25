import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

interface CtaButtonProps {
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ onClick }) => {
  return (
    <section className="text-center py-24 ">
      <h2 className="text-3xl text-white font-bold mb-10">
        Ready to Secure Your Financial Future?
      </h2>
      <Button
        size="lg"
        className="bg-white hover:bg-gray-50 text-black font-semibold py-4 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-105"
        onClick={onClick}
      >
        <CalendarPlus className="mr-2 h-5 w-5" />
        Schedule My Complimentary Appointment
      </Button>
    </section>
  );
};

export default CtaButton;
