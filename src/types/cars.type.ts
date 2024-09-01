export type TCarImg = {
  altText: string;
  url: string;
};
export type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  carType: string;
  status: "available" | "unavailable";
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
  numberOfSeats: number;
  mileage: number;
  vin: number;
  images: TCarImg[];
  insuranceInfo: {
    provider: string;
    policyNumber: string;
    coverageDetails: string;
  };
  year: Date;
  model: string;
};
