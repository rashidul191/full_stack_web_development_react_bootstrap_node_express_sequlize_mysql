import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "../utility/toast";
import {
  createFormData,
  createFormDataWithFile,
} from "../utility/formDataHelper";
import Swal from "sweetalert2";

export const useImagePreview = () => {
  const [previewImage, setPreviewImage] = useState({});

  const handleImageChange = (e) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      setPreviewImage((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
    }
  };
  return { previewImage, handleImageChange };
};

export const useApiHook = (url = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // =========================
  // GET (list or single)
  // =========================
  const getData = async (customUrl = url) => {
    if (!customUrl) return;

    setLoading(true);

    try {
      const res = await api.get(customUrl);

      if (res?.data?.status === "success") {
        setData(res.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // POST
  // =========================
  const createData = async (payload, hasFile = false, customUrl = url) => {
    try {
      const body = hasFile
        ? createFormDataWithFile(payload) // json data with image
        : createFormData(payload); // only json data

      const res = await api.post(customUrl, body);

      if (res?.data?.status === "success") {
        toast.success(res.data.message);
        return res.data.data;
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // =========================
  // PUT
  // =========================
  const updateData = async (id, payload, hasFile = false, customUrl = url) => {
    try {
      const body = hasFile
        ? createFormDataWithFile(payload) // json data with image
        : createFormData(payload); // only json data

      const res = await api.put(`${customUrl}/${id}`, body);

      if (res?.data?.status === "success") {
        toast.success(res.data.message);
        return res.data.data;
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // =========================
  // DELETE
  // =========================
  const deleteData = async (id, customUrl = url) => {
    try {
      const confirmed = await toast.delete();

      if (!confirmed) return;
      const res = await api.delete(`${customUrl}/${id}`);

      if (res?.data?.status === "success") {
        toast.success(res.data.message);
        setData((prev) =>
          Array.isArray(prev) ? prev.filter((item) => item.id !== id) : prev,
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // =========================
  // AUTO LOAD
  // =========================
  useEffect(() => {
    if (url) {
      getData(url);
    }
  }, [url]);

  return {
    data,
    setData,
    loading,
    getData,
    createData,
    updateData,
    deleteData,
    refetch: () => getData(url),
  };
};

export const useCss = (href) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href]);
};

export const useScript = (src) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default { useImagePreview, useApiHook, useCss, useScript };
