import React, { useRef } from "react";
import Cards from "./Cards";
function Foreground() {
  const ref = useRef()
  const Data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error perspiciatis nam aliquid aperiam asperiores at.",
      filesize: ".9mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error perspiciatis nam aliquid aperiam asperiores at.",
      filesize: ".9mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error perspiciatis nam aliquid aperiam asperiores at.",
      filesize: ".9mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-6">
      {Data.map((item,index)=>(
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
