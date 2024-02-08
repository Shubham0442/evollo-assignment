import React, { useMemo, useState } from "react";
import { Button, InputField, TextArea } from "../../Components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addContent, getContent } from "../../State/Actions/ContentAction";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const NewContent = () => {
  const [newContent, setNewContent] = useState({
    title: "",
    description: "",
    fileUrl: ""
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
    const formData = new FormData();

    formData.append("title", newContent?.title);
    formData.append("description", newContent?.description);
    formData.append("fileurl", newContent.fileUrl);
    formData.append("createdAt", createdAt);
    formData.append("userId", userData?.id);
    console.log("newContent", newContent);

    toast.warn("Please wait, content is being uploaded", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });

    dispatch(addContent(formData, token)).then((res) => {
      if (res?.type === "ADD_USER_CONTENT_SUCCESS") {
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
        dispatch(getContent(userData?.id, token)).then((res) => {
          if (res?.type === "GET_USER_CONTENT_SUCCESS") navigate("/");
        });
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

    return `${date} at ${time}`;
  }, [new Date()]);

  return (
    <div className="w-1/4 h-auto m-auto">
      <div className="w-full text-xl font-bold mb-6 mt-5">Add New Content</div>
      <form
        action="/content/upload"
        method="POST"
        encType="multipart/form-data"
      >
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
          <div className="col-span-full">
            <label
              for="cover-photo"
              className="block text-base font-semibold leading-6 text-gray-900 text-left"
            >
              File
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center flex flex-col items-center justify-center">
                <FaCloudUploadAlt fontSize="50px" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="fileurl"
                      type="file"
                      accept="image/bmp, image/jpeg, image/x-png; image/png, image/gif"
                      className="sr-only"
                      onChange={(e) =>
                        setNewContent({
                          ...newContent,
                          fileUrl: e.target.files[0]
                        })
                      }
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <Button title="Save" onClick={handleSaveContent} />
        </div>
      </form>
    </div>
  );
};

export default NewContent;
