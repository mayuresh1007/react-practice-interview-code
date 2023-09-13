import { useState } from "react";
const demoArray = [
  {
    id: 1,
    value: "usa",
    country: "USA",
    cities: ["New York", "Los Angeles"],
  },
  {
    id: 2,
    value: "cn",
    country: "Canada",
    cities: ["Toronto", "Vancouver"],
  },
  {
    id: 3,
    value: "uk",
    country: "UK",
    cities: ["London", "Manchester"],
  },
  {
    id: 4,
    value: "fr",
    country: "France",
    cities: ["Paris", "Marseille"],
  },
  {
    id: 5,
    value: "gr",
    country: "Germany",
    cities: ["Berlin", "Munich"],
  },
];

//Question is there is two drop down snd second one is depends on first, 1> select country 2> cities

const DropDown = () => {
  const [data, setData] = useState(demoArray);
  const [contry, setcontry] = useState("");
  const [city, setcity] = useState("");

  const handleChange = (e) => {
    const selectcontry = e.target.value;
    setcontry(selectcontry);
    console.log(contry);
  };
  const handleChangecity = (e) => {
    const city = e.target.value;
    setcity(city);
    console.log(city);
  };
  return (
    <>
      <p style={{color:"red"}}>compleate the test for dependancy dropdown its incompleat</p>
    </>
  );
};

export default DropDown;

// import React, { useState } from 'react';

// const demoArray = [
//   {
//     id: 1,
//     value: "usa",
//     country: "USA",
//     cities: ["New York", "Los Angeles"],
//   },
//   {
//     id: 2,
//     value: "cn",
//     country: "Canada",
//     cities: ["Toronto", "Vancouver"],
//   },
//   {
//     id: 3,
//     value: "uk",
//     country: "UK",
//     cities: ["London", "Manchester"],
//   },
//   {
//     id: 4,
//     value: "fr",
//     country: "France",
//     cities: ["Paris", "Marseille"],
//   },
//   {
//     id: 5,
//     value: "gr",
//     country: "Germany",
//     cities: ["Berlin", "Munich"],
//   },
// ];

//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
  
//   const countries = demoArray.map(item => item.country);
  
//   const handleCountryChange = (event) => {
//     const selectedCountry = event.target.value;
//     setSelectedCountry(selectedCountry);
//     setSelectedCity(''); // Reset the selected city when the country changes
//   };

//   const handleCityChange = (event) => {
//     const selectedCity = event.target.value;
//     setSelectedCity(selectedCity);
//   };

//   return (
//     <div>
//       <label>Select a country:</label>
//       <select value={selectedCountry} onChange={handleCountryChange}>
//         <option value="">Select</option>
//         {countries.map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>

//       {selectedCountry && (
//         <div>
//           <label>Select a city:</label>
//           <select value={selectedCity} onChange={handleCityChange}>
//             <option value="">Select</option>
//             {demoArray
//               .find((item) => item.country === selectedCountry)
//               .cities.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

