import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import ReviewsList from "./ReviewsList";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({reviewsTabs}:any) => {
  return (
    <Tab.Group>
        {/* All customers reviews */}
      <Tab.List className="mb-[3%] mt-[5%] flex gap-x-5 text-myGreen">
        <Tab
          className={({ selected }) =>
            classNames(
              "border-b-2 pb-3 outline-none ",
              selected ? "border-myGreen" : "border-white"
            )
          }
        >
          All customers reviews
        </Tab>
        {/* Revised */}
        <Tab
          className={({ selected }) =>
            classNames(
              "border-b-2 pb-3 outline-none ",
              selected ? "border-myGreen" : "border-white"
            )
          }
        >
          Revised
        </Tab>
        {/* Archived */}
        <Tab
          className={({ selected }) =>
            classNames(
              "border-b-2 pb-3 outline-none ",
              selected ? "border-myGreen" : "border-white"
            )}>Archived</Tab>
      </Tab.List>
      <Tab.Panels>
        {/* All customers reviews */}
        <Tab.Panel>
          {reviewsTabs}
          {/* Revised */}
        </Tab.Panel>
        <Tab.Panel>{reviewsTabs}</Tab.Panel>
        {/* Archived */}
        <Tab.Panel>{reviewsTabs}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
