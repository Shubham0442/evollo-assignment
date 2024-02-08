import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import {  Navbar } from "../../Components";

const SingleContent = () => {
  const [content, setContent] = useState();
  const userContent = useSelector((state) => state.contentReducer.userContent);

  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      const currentContent = userContent?.find((el) => el._id === _id);
      setContent(currentContent);
    }
  }, [_id]);

  return (
    <div className="w-full m-auto">
      <div className="navbar-container mb-10 mt-5">
        <Navbar />
      </div>
      <div className="single-content-container w-[40%] m-auto text-left p-3">
        {content?.fileurl && (
          <div className="w-full h-auto">
            <img
              className="w-full h-auto"
              src={content?.fileurl}
              alt="content-file"
            />
          </div>
        )}
        <div className="font-bold text-[30px] mb-4 text-[#4f46e5]">
          {content?.title}
        </div>
        <div className="link-date-box w-full flex items-center justify-start mb-4 font-semibold text-sm">
          <div className="font-semibold text-[12px]">{content?.createdAt}</div>
        </div>
        <div className="w-full font-semibold text-sm">
          {content?.description}
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
