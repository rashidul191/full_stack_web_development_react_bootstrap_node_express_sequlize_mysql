import React, { useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

const LabeledInput = (props) => {
  const {
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    register,
    errors,
    watch,
    className = "",
    onChange,
  } = props;
  // Auto format label from name
  const nameText = name
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

  const finalLabel = label ?? nameText;

  const [showPassword, setShowPassword] = useState(false);

  const finalType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <>
      <div className={`mb-2 ${className}`}>
        {/* Label */}
        <label htmlFor={name} className="label mb-0.5">
          <span className="label-text text-gray-800 font-semibold">
            {finalLabel}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>

        <div className="relative">
          {/* Left Icon */}
          {type === "email" && (
            <div className="absolute left-0.5 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-l">
              <Mail className="w-5 h-5 text-gray-700" />
            </div>
          )}

          {type === "password" && (
            <div className="absolute left-0.5 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-l">
              <LockKeyhole className="w-5 h-5 text-gray-700" />
            </div>
          )}

          {/* Input */}
          <input
            type={finalType}
            id={name}
            placeholder={placeholder}          
            className={`w-full border-2 border-gray-600 rounded-md py-1.5 ${type === "password" ? "px-10" : type === "email" ? "pl-10" : type === "file" ? "file-input py-0!" : "px-2"} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
            {...register(name, {
              required: required ? `${finalLabel} is Required` : false,
              ...(type === "email" && {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `Enter a valid ${finalLabel}`,
                },
              }),
              ...(type === "password" && {
                minLength: {
                  value: 6,
                  message: `${finalLabel} must be at least 6 characters`,
                },
              }),
              ...(type === "password" &&
                name === "confirm_password" && {
                  minLength: {
                    value: 6,
                    message: `${finalLabel} must be at least 6 characters`,
                  },
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                }),

              onChange: (e) => {
                onChange && onChange(e); // 👈 preview trigger
              },
            })}
          />

          {/* Eye Toggle */}
          {type === "password" && (
            <div
              className="absolute right-0.5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 bg-gray-200 p-2 rounded-r"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {errors?.[name] && (
          <label className="label w-full">
            <span className="label-text-alt text-red-500">
              {errors[name]?.message}
            </span>
          </label>
        )}
      </div>{" "}
    </>
  );
};

export default LabeledInput;
