import React from 'react'
import { Button } from "@/components/ui/button"
import { CalendarPlus } from 'lucide-react'

interface CtaButtonProps {
  onClick?: () => void
}

const CtaButton: React.FC<CtaButtonProps> = ({ onClick }) => {
  return (

    <section className="text-center py-24 ">
    <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
    <Button
      size="lg"
      className="bg-gradient-to-r from-grey-600 to-black-900 hover:from-grey-700 hover:to-black-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={onClick}
    >
      <CalendarPlus className="mr-2 h-5 w-5" />
      Schedule My Complimentary Appointment
    </Button>
  </section>

  )
}

export default CtaButton

