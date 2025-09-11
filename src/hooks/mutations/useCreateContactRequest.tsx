import { useMutation, useQueryClient } from "@tanstack/react-query";

export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  details: string;
};

const createContactRequest = async (contactRequest: ContactRequest) => {
  const response = await fetch("https://api.aresultz.com/agrosken/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactRequest),
  });

  if (!response.ok) {
    throw new Error("Failed to create contact request");
  }

  return response.json();
};

export const useCreateContactRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContactRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactRequest"] });
    },
    onError: (error) => {
      console.error("Error creating contact request:", error);
    },
  });
};
