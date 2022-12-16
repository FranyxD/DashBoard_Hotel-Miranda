import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import ReviewsList from "./ReviewsList";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({tabs, componentes}:any) => {
  return (
    <Tab.Group>
      {/* All customers reviews */}
      <Tab.List className="mb-[3%] mt-[5%] flex gap-x-5 text-myGreen">
        {tabs.map((item: string, index: number) => (
          <Tab key={item}
            className={({ selected }) =>
              classNames(
                "border-b-2 pb-3 outline-none ",
                selected ? "border-myGreen" : "border-white"
              )
            }
          >
            {item}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {
          // @ts-ignore
          componentes.map((item, index) => <Tab.Panel key={index}>{item}</Tab.Panel>)
        }
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
