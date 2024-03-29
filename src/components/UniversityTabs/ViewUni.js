import React from "react";
import Table from "../ViewUni/Table";

import { ReactComponent as Search } from "../../assets/svgs/search.svg";
const ViewUni = () => {
  return (
    <div>
      <div className="flex justify-between">
        <form class="flex items-center py-5">
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
      </div>
      <Table />
    </div>
  );
};

export default ViewUni;
