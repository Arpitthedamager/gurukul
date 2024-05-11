"use client";
import { useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const AddSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { status: sessionStatus, data: session } = useSession();
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const router = useRouter();
  const param = useParams();
  const id = param.id;
  let email;

  if (sessionStatus === "authenticated") {
    email = session.user.email;
    console.log(email);
  }
  if (sessionStatus === "loading") {
    return <p>Loading...</p>;
  }
  if (sessionStatus === "unauthenticated") {
    return (
      <>
        <p>please login first </p>
        <a href="/login">login</a>
      </>
    );
  }
  const handleAddCourse = async () => {
    setIsLoading(true);
    try {
      const data = {
        email: email,
        subscriptionid: id,
      };

      const response = await fetch("/api/subscriptions", {
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
      setErrorMessage(
        "Failed to add course.  your courses will be add in 8hr."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    router.replace("/subscription");
  };

  return (
    <>
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
                  Add subscriptions
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
    </>
  );
};

export default AddSubscription;
