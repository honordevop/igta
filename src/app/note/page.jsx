// // "use client";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Note from "@/components/Note";
// import NotePageCard from "@/components/NotePageCard";
// import PageHeader from "@/components/PageHeader";
// import ServicePageCard from "@/components/ServicePageCard";
// import TrainingModal from "@/components/TrainingModal";
// import { servicesData } from "@/Utils/store";
// // import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { BounceLoader } from "react-spinners";

// const Notes = async () => {
// //   const { id } = params;

//   let loading;


//   const fetchWithCacheBust = (url, options = {}) => {
//     const cacheBustUrl = `${url}?_=${new Date().getTime()}`; // Add cache-busting query parameter
//     return fetch(cacheBustUrl, {
//       ...options, // Spread existing options
//     });
//   };

//   const fetchEventData = async () => {
//     // setLoading(true); // Uncomment if you want to set loading state
//     const loading = true
//     try {
//       const response = await fetchWithCacheBust(
//         `https://igtainternational.org/api/note/66f81f6de14bd1c5d6418094`,
//         {
//           headers: {
//             "Cache-Control": "public, max-age=0, must-revalidate",
//             Pragma: "no-cache",
//             Expires: "0",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const res = await response.json();
//       // Return the notes data
//       // setData(res.note);
//       const loading = false
//       return res.note;
//     } catch (error) {
//       // Handle the error
//       console.log(error);
//       // Optionally, set error state or show a toast message
//     } finally {
//       const loading = false
//     }
//   };


//   const data = await fetchEventData();

//   const formattedContent = data.content.replace(/\n/g, '<br>');
//   //   const res = await fetch(`http://localhost:3000/api/note/${id}`, {
//   //     cache: 'no-store', // Avoid caching for fresh data
//   // });

//   // if (!res.ok) {
//   //     notFound(); // Handle 404 if post is not found
//   // }

//   // console.log(status);
//   // console.log(data);

//   // if (loading) {
//   //   return (
//   //     <div className="w-full h-[40vh] flex items-center justify-center">
//   //       <div>
//   //         <BounceLoader className="" size={80} color="#b52624" />
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   return (
//     <>
//       <Navbar />
//       <>
//         {!loading ? (
//           <div className="w-full flex flex-col items-center justify-center">
//             <PageHeader title="Classroom" />
//             <div className="container">
//             <div className="w-full flex flex-col gap-5">
//             <div className="w-full my-10 text-center flex flex-col gap-4 items-center justify-center">
//               <h3 className="text-4xl font-bold">{`${data?.course} Course`} </h3>
//             </div>
//             <h1 className="font-semibold text-2xl"> Title: {data?.title}</h1>

//             {data?.image && (
//               <div className="relative h-[60vh] w-[100%]">
//                 <Image
//                   src={data?.image}
//                   className="object-contain"
//                   fill="true"
//                   alt={`${data?.title} image`}
//                 />
//               </div>
//             )}

//             <div className="mt-5">
//               {/* <div className="md:text-[18px]"> {data?.content} </div> */}
//               <div className="leading-8 text-[18px]" dangerouslySetInnerHTML={{ __html: data?.content }} />
//             </div>
//           </div>
//             </div>
//           </div>
//         ) : (
//           <div className="w-full h-[40vh] flex items-center justify-center mt-28">
//             <div>
//               <BounceLoader className="" size={80} color="#b52624" />
//             </div>
//           </div>
//         )}
//       </>
//       <Footer />
//     </>
//   );
// };

// export default Notes;
