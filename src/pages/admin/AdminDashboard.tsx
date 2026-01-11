import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useGetContactRequests,
  type ContactRequestResponse,
} from "../../hooks/queries/useGetContactRequests";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DescriptionIcon from "@mui/icons-material/Description";
import LockIcon from "@mui/icons-material/Lock";

const formatDate = (createdAt: ContactRequestResponse["createdAt"]) => {
  const date = new Date(createdAt._seconds * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const RequestCard = ({
  request,
  index,
}: {
  request: ContactRequestResponse;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all duration-300 shadow-lg hover:shadow-amber-500/5"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
            {request.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{request.name}</h3>
            <p className="text-neutral-400 text-sm">
              ID: {request.id.slice(0, 8)}...
            </p>
          </div>
        </div>
        <div
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
            request.emailSent
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-amber-500/20 text-amber-400"
          }`}
        >
          {request.emailSent ? (
            <>
              <CheckCircleIcon className="w-3.5 h-3.5" />
              Email Sent
            </>
          ) : (
            <>
              <CancelIcon className="w-3.5 h-3.5" />
              Pending
            </>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <EmailIcon className="w-4 h-4 text-amber-500" />
          <a
            href={`mailto:${request.email}`}
            className="hover:text-amber-400 transition-colors"
          >
            {request.email}
          </a>
        </div>

        {request.phone && (
          <div className="flex items-center gap-2 text-neutral-300">
            <PhoneIcon className="w-4 h-4 text-amber-500" />
            <a
              href={`tel:${request.phone}`}
              className="hover:text-amber-400 transition-colors"
            >
              {request.phone}
            </a>
          </div>
        )}

        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <AccessTimeIcon className="w-4 h-4 text-amber-500" />
          {formatDate(request.createdAt)}
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-700/50">
          <div className="flex items-start gap-2">
            <DescriptionIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-neutral-300 text-sm leading-relaxed">
              {request.details}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PasswordScreen = ({
  onSubmit,
  initialPassword,
}: {
  onSubmit: (password: string) => void;
  initialPassword: string;
}) => {
  const [password, setPassword] = useState(initialPassword);

  useEffect(() => {
    if (initialPassword) {
      setPassword(initialPassword);
    }
  }, [initialPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      onSubmit(password.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
              <LockIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-neutral-400 text-sm mt-2 text-center">
              Enter your password to access the dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm text-neutral-400 block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-900/50 border border-neutral-700 rounded-lg py-3 px-4 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                placeholder="Enter password"
                autoFocus
              />
            </div>

            <motion.button
              type="submit"
              disabled={!password.trim()}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              whileTap={{ scale: 0.98 }}
            >
              Access Dashboard
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export const AdminDashboard = () => {
  const [searchParams] = useSearchParams();
  const [authKey, setAuthKey] = useState<string | null>(null);
  const [initialPassword, setInitialPassword] = useState("");

  useEffect(() => {
    const authKeyParam = searchParams.get("authKey");
    if (authKeyParam) {
      setInitialPassword(authKeyParam);
    }
  }, [searchParams]);

  const {
    data: requests,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetContactRequests(authKey);

  const handlePasswordSubmit = (password: string) => {
    setAuthKey(password);
  };

  if (!authKey) {
    return (
      <PasswordScreen
        onSubmit={handlePasswordSubmit}
        initialPassword={initialPassword}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-neutral-900/80 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Admin Dashboard
              </h1>
              <p className="text-neutral-400 text-sm mt-1">
                Contact Request Management
              </p>
            </div>
            <motion.button
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg transition-colors border border-amber-500/20"
              whileTap={{ scale: 0.95 }}
            >
              <RefreshIcon
                className={`w-5 h-5 ${isFetching ? "animate-spin" : ""}`}
              />
              Refresh
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshIcon className="w-8 h-8 text-amber-500 animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <CancelIcon className="w-12 h-12 text-red-400 mb-4" />
            <p className="text-neutral-300 text-lg">Failed to load requests</p>
            <p className="text-neutral-500 text-sm mt-1">
              Invalid password or server error
            </p>
            <motion.button
              onClick={() => setAuthKey(null)}
              className="mt-4 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Try Different Password
            </motion.button>
          </div>
        ) : requests && requests.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {requests.map((request, index) => (
              <RequestCard key={request.id} request={request} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <EmailIcon className="w-12 h-12 text-neutral-600 mb-4" />
            <p className="text-neutral-300 text-lg">No contact requests yet</p>
            <p className="text-neutral-500 text-sm mt-1">
              Requests will appear here when submitted
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
