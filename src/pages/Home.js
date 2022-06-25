import React from "react";

const Home = () => {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <NavBar />
      <div className="main-content flex flex-col flex-grow p-4">
        <div className="flex flex-col flex-grow bg-white rounded mt-4">
          <HomeTabs />
        </div>
      </div>
    </main>
  );
};

export default Home;
