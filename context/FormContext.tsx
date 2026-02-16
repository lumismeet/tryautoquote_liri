"use client";

import { createContext, useContext, useState, useEffect } from "react";

type FormDataType = {
  leadId?: string;
  zipcode?: string;
//   vehicleMake?: string;
//   vehicleYear?: number;
//   vehicleModel?: string;
//   primaryUse?: string;
//   mileage?: string;
//   coverage?: string;
//   ownership?: string;
vehicles: VehicleType[];
currentVehicleIndex: number;
currentlyInsured?: string;
currentInsurance?: string;
continuousCoverage?: string;
activeLicense?: string;
ticketsLast3Years?: string;
sr22Filed?: string;
homeowner?: string;
married?: string;
gender?: string;
military?: string;
education?: string;
creditScore?: string;
dob?: string;
firstName?: string;
lastName?: string;
street?: string;
email?: string;
phone?: string;



};

type FormContextType = {
  formData: FormDataType;
  updateForm: (
    data:
      | Partial<FormDataType>
      | ((prev: FormDataType) => FormDataType)
  ) => void;
};



const FormContext = createContext<FormContextType | undefined>(undefined);

type VehicleType = {
  vehicleYear?: number;
  vehicleMake?: string;
  vehicleModel?: string;
  primaryUse?: string;
  mileage?: string;
  coverage?: string;
  ownership?: string;
};


export function FormProvider({ children }: { children: React.ReactNode }) {
  
  const [formData, setFormData] = useState<FormDataType>({
  vehicles: [
    {
      vehicleYear: undefined,
      vehicleMake: "",
      vehicleModel: "",
    }
  ],
  currentVehicleIndex: 0,
});


    useEffect(() => {
        const stored = localStorage.getItem("leadForm");

        if (stored) {
            const parsed = JSON.parse(stored);

            setFormData(prev => ({
                ...prev,
                ...parsed,
                vehicles:
                    parsed.vehicles && parsed.vehicles.length > 0
                        ? parsed.vehicles
                        : prev.vehicles,
                currentVehicleIndex:
                    typeof parsed.currentVehicleIndex === "number"
                        ? parsed.currentVehicleIndex
                        : 0,
            }));
        }
    }, []);
        
  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("leadForm", JSON.stringify(formData));
  }, [formData]);

  const updateForm: FormContextType["updateForm"] = (data) => {
  setFormData(prev =>
    typeof data === "function"
      ? data(prev)
      : { ...prev, ...data }
  );
};


  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used inside FormProvider");
  }
  return context;
}
