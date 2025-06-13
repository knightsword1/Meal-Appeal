const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Success Icon */}
      <div className="bg-green-100 p-6 rounded-full">
        <svg
          className="w-16 h-16 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-3xl font-bold text-gray-800 mt-6">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-500 mt-2 text-center">
        "We know time is precious, so thanks for trusting us with your quick
        meal delivery!"
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4"></div>
    </div>
  );
};

export default OrderSuccess;
