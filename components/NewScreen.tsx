import React from "react";

const NewScreen = () => {
  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="flex flex-col gap-2 rounded-xl shadow-md p-8 mt-10 dark:bg-pink-100/30 bg-[#C28889]/20">
        <h1 className="text-lg font-semibold">Welcome to Uptut AI Chatbot!</h1>
        <p className="leading-normal text-muted-foreground">
          This version is currenlt under development
        </p>
      </div>
    </div>
  );
};

export default NewScreen;
