import { Doctor } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Calendar, MapPin } from "lucide-react";

interface Props {
  doctor: Doctor;
  handleBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard = ({ doctor, handleBookAppointment }: Props) => {
  return (
    <Card
      key={doctor.id}
      className="bg-gray-900/10 border border-gray-700/70 text-white group"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="https://i.ibb.co.com/KX2TZyk/man.png"
              alt={doctor.name}
            />
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg">Dr. {doctor.name}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {doctor.specialization}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <Button onClick={() => handleBookAppointment(doctor)} size="sm">
            <Calendar className="h-4 w-4 mr-1" />
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
