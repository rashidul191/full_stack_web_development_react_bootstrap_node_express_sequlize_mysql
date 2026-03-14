import { useEffect, useState } from "react";
import api from "../api/axios";

/**
 * Fetch all business settings from backend
 * @returns {Promise<Object>} key-value object
 */
export const getBusinessSettings = async () => {
  try {
    const res = await api.get("/admin/business-setting");

    if (res.data?.status === "success") {
      const dataArray = res?.data?.data || [];

      const settingsObj = {};

      dataArray.forEach((item) => {
        settingsObj[item.key] = item.value;
      });

      return settingsObj;
    }

    return {};
  } catch (error) {
    console.log("Failed to fetch business settings", error);
    return {};
  }
};

/**
 * Custom Hook for business settings
 */
export const useBusinessSettings = () => {
  const [businessSetting, setBusinessSetting] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getBusinessSettings();
      setBusinessSetting(data);
      setLoading(false);
    };

    fetchSettings();
  }, []);

  return { businessSetting, loading };
};
