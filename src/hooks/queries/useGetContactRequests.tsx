import { useQuery } from "@tanstack/react-query";

export type ContactRequestResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  emailSent: boolean;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
};

const getContactRequests = async (
  authKey: string
): Promise<ContactRequestResponse[]> => {
  const response = await fetch("https://api.aresultz.com/agrosken/contact", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      AuthKey: authKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch contact requests");
  }

  return response.json();
};

export const useGetContactRequests = (authKey: string | null) => {
  return useQuery({
    queryKey: ["contactRequest", authKey],
    queryFn: () => getContactRequests(authKey!),
    enabled: !!authKey,
  });
};
