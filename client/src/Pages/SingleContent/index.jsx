import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Navbar } from "../../Components";
import { FaLink } from "react-icons/fa";

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
        <div className="font-bold text-[30px] mb-4 text-[#4f46e5]">
          {content?.title}
        </div>
        <div className="link-date-box w-full flex items-center justify-between mb-4 font-semibold text-sm">
          {content?.contentFileUrl && (
            <Link to={content?.contentFileUrl} target="_blank">
              <div className="flex items-center justify-start gap-2 text-[#6650a4]">
                <div>
                  <FaLink />
                </div>
                <div>{content?.contentFileUrl}</div>
              </div>
            </Link>
          )}
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
