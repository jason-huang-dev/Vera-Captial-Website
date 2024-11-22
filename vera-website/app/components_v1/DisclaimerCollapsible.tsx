"use client"

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from 'lucide-react'

const DisclaimerCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <span>Securities and Advisory services disclaimer (click to expand)</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-2">
        <p>
          Securities and Advisory services offered through GWN Securities, Inc., Member FINRA/SIPC, a Registered Investment Advisor. 
          11440 N. Jog Road, Palm Beach Gardens, FL 33418. (561) 472-2700. Vera Capital Management and GWN Securities, Inc. are separate companies.
        </p>
        <p>
          <strong>PLEASE NOTE:</strong> The information being provided is strictly as a courtesy. When you link to any of the web sites provided here, 
          you are leaving this web site. We make no representation as to the completeness or accuracy of information provided at these web sites. 
          Nor is the company liable for any direct or indirect technical or system issues or any consequences arising out of your access to or your use of 
          third-party technologies, web sites, information and programs made available through this web site. When you access one of these web sites, 
          you are leaving our web site and assume total responsibility and risk for your use of the web sites you are linking to.
        </p>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default DisclaimerCollapsible