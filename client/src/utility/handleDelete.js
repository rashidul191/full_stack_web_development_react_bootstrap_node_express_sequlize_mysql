import api from "../api/axios";
import toast from "./toast";

const handleDelete = async (urlWithId, setState) => {
  const id = Number(urlWithId.split("/").pop());

  const confirmDelete = await toast.delete();
  if (!confirmDelete) return;
  try {
    const res = await api.delete(urlWithId);
    if (res?.data?.status === "success") {
      toast.success(res?.data?.message);
      setState((prev) => prev.filter((item) => item.id !== id));
    }
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

export default handleDelete;
