import React, { useMemo, useState } from "react";
import { Button, InputField, TextArea } from "../../Components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../State/Actions/ContentAction";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const NewContent = () => {
  const [newContent, setNewContent] = useState({
    title: "",
    description: "",
    contentFileUrl: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, token } = useSelector((state) => state.authReducer);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setNewContent({
      ...newContent,
      [name]: value
    });
  };

  const handleSaveContent = (e) => {
    e.preventDefault();
    dispatch(
      addContent({ ...newContent, userId: userData?.id, createdAt }, token)
    ).then((res) => {
      if (res?.type === "ADD_USER_CONTENT_SUCCESS") {
        // console.log(res?.payload);
        toast.success(res?.payload?.msg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        navigate("/");

      } else {
        toast.error("Please fill the required details", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      }
    });
  };

  const createdAt = useMemo(() => {
    let date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    const formatted = date?.split(" ");
    console.log(formatted, date, time);

    return `${date} at ${time}`;
  }, [new Date()]);

  return (
    <div className="w-1/4 h-auto m-auto">
      <div className="w-full text-xl font-bold mb-6 mt-5">Add New Content</div>
      <form action="/content" method="POST" encType="multipart/form-data">
        <div className="w-full mb-5">
          <InputField
            label="Title"
            value={newContent.title}
            onChange={handleChange}
            name="title"
            type="text"
            required
          />
        </div>
        <div className="w-full mb-5">
          <TextArea
            label="Description"
            value={newContent.description}
            onChange={handleChange}
            name="description"
            height="100px"
            required
          />
        </div>
        <div className="w-full mb-5">
          <InputField
            label="Content File Link"
            value={newContent.contentFileUrl}
            onChange={handleChange}
            name="contentFileUrl"
            type="text"
          />
        </div>
        <div className="w-full mb-5">
          <Button title="Save" onClick={handleSaveContent} />
        </div>
      </form>
    </div>
  );
};

export default NewContent;
