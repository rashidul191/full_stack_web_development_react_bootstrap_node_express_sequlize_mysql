import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "./toast";

/**
 * PUBLIC: Fetch business settings (Frontend)
 * GET /business-setting
 */
export const getBusinessSettings = async () => {
  try {
    const res = await api.get("/business-setting");

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
    toast.error("Failed to load business settings");
    return {};
  }
};

/**
 * ADMIN: Fetch settings
 * GET /admin/business-setting
 */
export const getAdminBusinessSettings = async () => {
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
    console.log("Failed to fetch admin settings", error);
    toast.error("Failed to load admin settings");
    return {};
  }
};

/**
 * ADMIN: Update settings
 * PUT /admin/business-setting
 */
export const updateBusinessSettings = async (formData) => {
  try {
    const res = await api.put("/admin/business-setting", formData);

    toast.success(res?.data?.message || "Settings updated");

    return res?.data;
  } catch (error) {
    console.log("Failed to update settings", error);
    toast.error(
      error?.response?.data?.message || "Failed to update settings"
    );
    return null;
  }
};

/**
 * Frontend Hook (Public)
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

/**
 * Admin Hook
 */
export const useAdminBusinessSettings = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    const data = await getAdminBusinessSettings();
    setSettings(data);
    setLoading(false);
  };

  const updateSettings = async (formData) => {
    const res = await updateBusinessSettings(formData);
    if (res) {
      fetchSettings();
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    updateSettings,
  };
};