import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AngelHack, Pokemon, Pokem, Type } from "../assets/Images";
import Pagination from "../components/Pagination";
import Logo from "@/assets/Logo";
import GraphCard from "@/components/GraphCard";
import { GraphData } from "@/utils/GraphData";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const ITEMS_PER_PAGE = 2;

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGraph, setSelectedGraph] = useState(null);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedGraph(null);
  };

  const handleSearch = () => {
    const graph = GraphData.find((graph) =>
      graph.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSelectedGraph(graph);
  };

  const closeModal = () => {
    setSelectedGraph(null);
  };

  const toggleExpand = () => {
    setSelectedGraph(null);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGraphs = GraphData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  

  useEffect(() => {
    // Check if the user is on the last page after each pagination change
    if (currentPage === Math.ceil(GraphData.length / ITEMS_PER_PAGE)) {
      // Set a delay of 5 seconds before showing the popup
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      // Clear the timeout when the component is unmounted or the page changes
      return () => clearTimeout(timeout);
    } else {
      // If the user moves to a different page, hide the popup
      setShowPopup(false);
    }
  }, [currentPage]);
  return (
    <>
      <main className="mt-[3em] md:mt-[5em] space-y-[4em] md:space-y-[6em] lg:space-y-[8em] ">
        <div className="w-fit mx-auto  flex-column items-center">
          <Link href="/">
          <div className=" fc w-fit  mx-auto">
            <Pokemon className="w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[130px] lg:h-[60px] pr-2  " />
            <div className="w-[2px] h-[50px] bg-[#0000003d]"></div>
            <AngelHack className="w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[130px] lg:h-[60px] pr-2  " />
          </div>
          </Link>
          <p className="text-center text-[1.125rem] mt-6 font-[500]">
            Data Visualization Challenge
          </p>

          <Image
            src={Pokem}
            alt="pokemon"
            className="w-[380px] h-[100px] md:w-[250px] md:h-[100px] lg:w-[700px] lg:h-[100px] pr-2 mt-8 mx-auto "
          />
 <div className=" mx-auto mt-8 flex justify-center items-center">
        <FiSearch className="text-gray-600 mr-4" size={20} />
     
      <input
        type="text"
        placeholder="Search data sets.."
        value={searchQuery}
        onChange={handleInputChange}
        className="bg-transparent focus:outline-none focus:border-blue-500 placeholder-gray-900"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Search
      </button>

      {selectedGraph && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-50">
          <GraphCard
            name={selectedGraph.name}
            number={selectedGraph.number}
            story={selectedGraph.story}
            toggleExpand={toggleExpand}
          />
          <button
            className="absolute top-2 right-2 text-white bg-blue-500 rounded-md px-2 py-1"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="block mt-6 w-[60%] mx-auto px-4 py-2 pr-8 leading-tight bg-transparent border border-gray-400 rounded focus:outline-none focus:border-blue-500"
      >
        <option value="">All category...</option>
        {GraphData.map((graph) => (
          <option key={graph.id} value={graph.name}>
            {graph.name}
          </option>
        ))}
      </select>
     
    </div>
        </div>

       
        <div className="flex flex-col items-center">
      {currentGraphs.map((graph) => (
        <GraphCard
          key={graph.id}
          name={graph.name}
          number={graph.number}
          story={graph.story}
        />
      ))}
      <Pagination
        totalItems={GraphData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
       <div className="w-fit mx-auto mt-14">
     
      
    </div>
    </div>
    {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-50">
            <div className="  animate-bounce">
              <Image src={Type} alt="Your Image" />
          
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
          </div>
        )}

      </main>
    </>
  );
};

export default Dashboard;
