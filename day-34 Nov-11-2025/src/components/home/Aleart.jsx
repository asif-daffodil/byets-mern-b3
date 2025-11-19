import React from 'react';

const Aleart = () => {
    return (
      <div className="space-y-6 p-4 max-w-screen-xl mx-auto">
  <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
    <span className="font-semibold text-[15px] inline-block mr-4">Success!</span>
    <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a success message that requires your attention.</span>
  </div>
  <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg" role="alert">
    <span className="font-semibold text-[15px] inline-block mr-4">Warning!</span>
    <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a warning message that requires your attention.</span>
  </div>
  <div className="bg-red-100 text-red-800 p-4 rounded-lg" role="alert">
    <span className="font-semibold text-[15px] inline-block mr-4">Error!</span>
    <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a error message that requires your attention.</span>
  </div>
  <div className="bg-blue-100 text-blue-800 p-4 rounded-lg" role="alert">
    <span className="font-semibold text-[15px] inline-block mr-4">Info!</span>
    <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a info message that requires your attention.</span>
  </div>
</div>

    );
};

export default Aleart;