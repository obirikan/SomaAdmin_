import React from "react";
import Table from "../Verifications/Table";
import { ReactComponent as Link } from "../../assets/svgs/link.svg";
import { ReactComponent as Filter } from "../../assets/svgs/filter.svg";
import { ReactComponent as Search } from "../../assets/svgs/search.svg";
const Verifications = () => {
  return (
    <div>
      <div className="flex justify-between">
        <form class="flex items-center">
          <label className="sr-only">Search</label>
          <div class="relative w-60">
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 pl-3 p-2.5"
              placeholder="Search with name or keyword"
            />
            <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <Search />
            </div>
          </div>
        </form>
        <div className="flex">
          <button
            type="button"
            className="text-black flex bg-white border-gray-500 border-2  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-5 mt-5  items-center"
          >
            <Filter className="mr-2" />
            Filter
          </button>

          <button
            type="button"
            className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-5 mt-5  items-center"
          >
            <Link className="mr-2" />
            Get verification link
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Verifications;
