import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Navbar } from "../../Components";
import { FaBoxOpen } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { getContent } from "../../State/Actions/ContentAction";

const Content = () => {
  const { isLoading, isError, userContent } = useSelector(
    (state) => state.contentReducer
  );
  const { userData, token } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userContent?.length === 0) dispatch(getContent(userData?.id, token));
  }, [userContent.length]);

  return (
    <div className="w-full m-auto">
      <div className="navbar-container mb-10 mt-5">
        <Navbar />
      </div>
      {userContent?.length !== 0 && (
        <div className="w-full mb-10 mt-5 flex items-center justify-center">
          <div className="w-[100px]">
            <Button title="Add New" onClick={() => navigate("/content/new")} />
          </div>
        </div>
      )}
      <div className="content-container w-[80%] m-auto mt-10 gap-4">
        {isLoading && "Loading..."}
        {isError && "Something went wrong, please try again"}
        {userContent?.length !== 0 &&
          userContent?.map((el) => (
            <div
              key={el._id}
              className="text-left p-2 border rounded-md shadow-md relative"
            >
              {el?.fileurl && (
                <div className="w-[95%] h-auto m-auto">
                  <div className="w-full h-[50px]">
                    <img
                      className="w-full h-full object-cover"
                      src={el?.fileurl}
                      alt="file-image"
                    />
                  </div>
                </div>
              )}
              <div className="font-bold text-base whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-[#4f46e5]">
                {el.title}
              </div>
              <div className="w-full h-5 whitespace-nowrap overflow-hidden text-ellipsis font-semibold mb-2">
                {el.description}
              </div>

              <Link to={`/${el._id}`}>
                <div className="text-[#6650a4] text-xs">More Details</div>
              </Link>
            </div>
          ))}
      </div>
      {!isLoading && !isError && userContent?.length === 0 && (
        <div className="w-full h-[300px] flex flex-col items-center justify-center gap-2 text-sm font-bold">
          <div className="text-[60px]">
            <FaBoxOpen />
          </div>
          <div>No Content Available</div>
          <div className="w-[100px]">
            <Button title="Add New" onClick={() => navigate("/content/new")} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
