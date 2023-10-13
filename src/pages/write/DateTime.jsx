// import React, { useState } from "react";

//   const handleDateTime = (event) => {
//     const { name, value } = event.target;
//     setDateTime((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const currentDate = new Date();
//     setDateTime((prevState) => ({
//       ...prevState,
//       date: currentDate.toDateString(),
//       time: currentDate.toTimeString(),
//     }));
//   };

//   return (
//     <div>
//       <label>
//         Date:
//         <input
//           type="text"
//           name="date"
//           value={dateTime.date}
//           onChange={handleDateTime}
//         />
//       </label>
//       <br />
//       <label>
//         Time:
//         <input
//           type="text"
//           name="time"
//           value={dateTime.time}
//           onChange={handleDateTime}
//         />
//       </label>
//       <br />
//       <input type="submit" value="Submit" />
//     </div>
//   );
// }

// export default DateTime;
