import { useState } from "react";
import { deleteLeave } from "../../helper/helperLeave";
import { useToast } from "../../layout/toaster"; 
import { useLeavesContext } from "../../hooks/useLeavesContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const RequestDetails = ({ leaveRequest, onEdit }) => {
  const { token } = useAuthContext();
  const { showToast } = useToast();
  const [isClicked, setIsClicked] = useState(false);
  const { dispatch } = useLeavesContext();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this request?');
    if (confirmation) {
      try {
        const res = await deleteLeave(leaveRequest._id, token);
        dispatch({ type: 'DELETE_LEAVE', payload: res });
        showToast("Leave request deleted successfully!");
      } catch (error) {
        showToast(error.error, 'error');
      }
    }
  };

  const handleUpdate = () => {
    onEdit(leaveRequest);
  };

  return (
    <div onClick={handleClick} className="px-6 py-4 bg-white hover:bg-slate-100 rounded-md ml-auto mr-5 mt-5 mb-auto relative shadow-md dark:bg-slate-700 dark:text-white">
      <h4 className="mb-3 text-lg font-bold text-cyan-600">{leaveRequest.typeLeave}</h4>
      <div className="grid gap-4 grid-cols-3 w-full">
        <div className="col-span-2 grid gap-4 grid-cols-2">
          <p className="text-gray-500 dark:text-gray-400"><span className="text-black font-medium dark:text-gray-200 mr-1">Start Date:</span> {formatDate(leaveRequest.startDate)}</p>
          <p className="text-gray-500 dark:text-gray-400"><span className="text-black font-medium dark:text-gray-200 mr-1">Justification file:</span> {leaveRequest.justificationFile}</p>
          <p className="text-gray-500 dark:text-gray-400"><span className="text-black font-medium dark:text-gray-200 mr-1">Finish Date:</span> {formatDate(leaveRequest.finishDate)}</p>
          <p className="text-gray-500 dark:text-gray-400"><span className="text-black font-medium dark:text-gray-200 mr-1">Justification:</span> {leaveRequest.justification}</p>
          <div className="flex flex-row gap-2">
          <p className="text-gray-500 dark:text-gray-400"><span className="text-black font-medium dark:text-gray-200 mr-1">Status:</span></p>
          <div className="w-max">
          <div className={`relative grid items-center  font-bold uppercase whitespace-nowrap select-none ${
            leaveRequest.statut === "accepted"
              ? "bg-green-500/20 text-green-600"
              : leaveRequest.statut === "refused"
              ? "bg-red-500/20 text-red-700"
              : "bg-gray-200 text-gray-500"
          } py-1 px-2 text-xs rounded-md`}>
            <span>{leaveRequest.statut}</span>
          </div>
        </div>
        </div>
        </div>
        {isClicked && (
          <div className="flex flex-row justify-end ml-72 mb-10 w-1/3 gap-3">
            <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
            <button onClick={handleUpdate} className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDetails;
