import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ContactRequestResponse } from "../queries/useGetContactRequests";

type UpdateEmailSentParams = {
  id: string;
  emailSent: boolean;
  authKey: string;
};

const updateEmailSent = async ({
  id,
  emailSent,
  authKey,
}: UpdateEmailSentParams): Promise<void> => {
  const response = await fetch(
    `https://api.aresultz.com/agrosken/contact/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        AuthKey: authKey,
      },
      body: JSON.stringify({ emailSent }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update email sent status");
  }
};

export const useUpdateEmailSent = (authKey: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEmailSent,
    onMutate: async ({ id, emailSent }) => {
      await queryClient.cancelQueries({ queryKey: ["contactRequest", authKey] });

      const previousData = queryClient.getQueryData<ContactRequestResponse[]>([
        "contactRequest",
        authKey,
      ]);

      queryClient.setQueryData<ContactRequestResponse[]>(
        ["contactRequest", authKey],
        (old) =>
          old?.map((request) =>
            request.id === id ? { ...request, emailSent } : request
          )
      );

      return { previousData };
    },
    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ["contactRequest", authKey],
          context.previousData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["contactRequest", authKey] });
    },
  });
};
