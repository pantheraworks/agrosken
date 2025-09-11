import { motion } from "framer-motion";
import { useMessage } from "../../locales/LocaleHooks";
import { useMemo, useState, type ReactNode } from "react";
import {
  useCreateContactRequest,
  type ContactRequest,
} from "../../hooks/mutations/useCreateContactRequest";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const ContactForm = () => {
  const nameLabel = useMessage("contact.form.name");
  const emailLabel = useMessage("contact.form.email");
  const phoneLabel = useMessage("contact.form.phone");
  const messageLabel = useMessage("contact.form.message");
  const sendLabel = useMessage("contact.form.send");
  const loadingLabel = useMessage("contact.form.loading");
  const submittedLabel = useMessage("contact.form.submitted");

  const [formData, setFormData] = useState<ContactRequest>({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const {
    mutateAsync: postContactRequestAsync,
    isPending,
    isSuccess,
  } = useCreateContactRequest();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postContactRequestAsync(formData);
    console.log("Form submitted:", formData);
  };

  const submitButtonLabel: ReactNode = useMemo(() => {
    if (isPending)
      return (
        <div className="flex gap-2">
          {loadingLabel} <RefreshIcon className="animate-spin" />
        </div>
      );
    if (isSuccess)
      return (
        <div className="flex gap-2">
          {submittedLabel}
          <CheckCircleOutlineIcon className="animate-bounce [animation-iteration-count:1]" />
        </div>
      );
    return sendLabel;
  }, [isPending, isSuccess, loadingLabel, submittedLabel, sendLabel]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-400 block mb-1">
            {nameLabel}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">
            {emailLabel}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 block mb-1">{phoneLabel}</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 block mb-1">
          {messageLabel}
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors resize-none"
          required
        />
      </div>

      <div className="flex justify-end">
        <motion.button
          type="submit"
          disabled={isSuccess || isPending}
          className="px-8 py-3 rounded-full transition-all"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            color: "white",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {submitButtonLabel}
        </motion.button>
      </div>
    </form>
  );
};
