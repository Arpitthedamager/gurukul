"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const AddCoursePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: session } = useSession();
  const { status: sessionStatus } = useSession();
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const router = useRouter();
  const param = useParams();
  const id = param.id;
  let email;

  if (sessionStatus === "authenticated") {
    email = session.user.email;
  }
  if (sessionStatus === "loading") {
    return <p>Loading...</p>;
  }
  if (sessionStatus === "unauthenticated") {
    router.replace("/login");
  }

  const handleAddCourse = async () => {
    setIsLoading(true);
    try {
      const data = {
        email: email,
        courseId: id,
      };

      const response = await fetch("../../api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add course. Server responded with error.");
      }

      const responseData = await response.text();
      if (responseData) {
        const jsonData = JSON.parse(responseData);
        console.log(jsonData);
        // Handle the JSON data
      } else {
        // Handle empty response
      }

      // Assuming the backend API returns a success message
      console.log(responseData.message);
      setIsCompleted(true);
    } catch (error) {
      console.error("There was a problem with the request:", error);
      setErrorMessage("Failed to add course. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    router.replace("/courses");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {paymentId ? (
          <>
            {isLoading && <p>Loading...</p>}
            {isCompleted && <p>Process completed</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {!isLoading && !isCompleted && (
              <button
                onClick={handleAddCourse}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Course
              </button>
            )}
            {isCompleted && (
              <a
                onClick={handleGoBack}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Go Back
              </a>
            )}
          </>
        ) : (
          <p className="text-red-500">
            Please make a payment first before adding a course.
          </p>
        )}
      </div>
    </div>
  );
};

export default AddCoursePage;
