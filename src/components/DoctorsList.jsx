import axios from "axios";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useGetDoctorsByCategoryQuery } from "../services/Faker_Services";

const DoctorsList = () => {
 
  const events=useParams()
  console.log(events)

  const [doctors, setDoctors] = useState([]);

  // const [isLoading,setIsLoading] = useState(false)
  // const getDoctors = async(category) => {
  //   // Fetch doctors for the selected category
  //    console.log(category)
  //  await axios.get(`http://localhost:8000/doctors/${category}`)
  //     .then(response => {
  //       setDoctors(response.data);
        
  //       setIsLoading(!isLoading);
  //     })
  //     .catch(error => {
  //       console.error(`Error fetching doctors for ${category}:`, error);
  //     });

  //     console.log("Doctores:",doctors)
  // };



  // fetching data form redux store based on category (another way to implement above)
  const {data,error,isLoading}=useGetDoctorsByCategoryQuery(events.category);

  useEffect(() => {
    setDoctors(data);
  }, [data,error,isLoading,events.category]);

  // if data is still loading then we return here laoding..
 

   if(isLoading) return <div className="text-center text-2xl">Loading...</div>
  return (
    <div className="mx-6 ">
      <h1 className="text-2xl my-8 font-semibold">All {isLoading && doctors[0]?.category} doctors are here...</h1>
    <div className="mx-2">
      {doctors?.map((doctor) => {
        return (
          <div
            key={doctor.id}
            className="rounded  overflow-hidden flex max-sm:flex-col max-sm:space-y-4 justify-around items-center hover:drop-shadow-xl   drop-shadow-lg p-6 mb-6 bg-white"
          >
            <div className="flex justify-center space-x-8 items-center">
              <img
                className="w-16 h-16 rounded-full "
                src={doctor.image}
                alt="Doctor"
              />
              <div className="text-left">
                <div className=" mt-4">
                  <h2 className="text-xl">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.category}</p>
                  <p className="text-gray-600">{doctor.details.experience}</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">{doctor.details.location}</p>
                  <p>{doctor.details.consultationFee}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-self-end  place-items-end ">
              <div className="text-blue-500">Available Today</div>
              <button
                type="button"
                className="
                mt-4
                transition ease-out  delay-150 hover:scale-105
                px-3 py-2
                text-white 
                bg-green-500 
                rounded-md 
                focus:bg-green-600 
                focus:outline-none"
              >
                Book Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default DoctorsList;
