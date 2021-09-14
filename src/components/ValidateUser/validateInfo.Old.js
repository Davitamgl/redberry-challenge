// export const ValidateInfo = ({ firstName }) => {
//   console.log(firstName.length);
//   let errors = "";
//   if (firstName.length) {
//     if (
//       !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(firstName) &&
//       !/^[a-zA-Z]+$/.test(firstName) &&
//       firstName.length >= 1
//     ) {
//       errors =
//         "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)";
//     } else if (firstName.length >= 1 && firstName.length <= 2) {
//       errors = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
//     } else if (firstName.length > 255) {
//       errors = "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
//     } else {
//       return (errors = "");
//     }
//   }

//   return {errors};
// };

// /*  //////////////////////////LastName/////////////////////
//   if (
//     !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(firstName.lastName) &&
//     !/^[a-zA-Z]+$/.test(firstName.lastName) &&
//     firstName.lastName.length >= 1
//   ) {
//     errors.lastName =
//       "გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)";
//   } else if (firstName.lastName.length >= 1 && firstName.lastName.length <= 2) {
//     errors.lastName = "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
//   } else if (firstName.lastName.length > 255) {
//     errors.lastName = "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
//   } else {
//     return;
//   }
// */
