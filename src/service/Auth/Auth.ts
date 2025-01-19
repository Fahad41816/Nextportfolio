/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { loginUser } from "@/utils/Auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["authlogin"],
    mutationFn: async (userData: { email: string; password: string }) =>
      await loginUser(userData),
    onSuccess: () => {
      toast.success("User Login Successfully!", { position: "top-right" });
    },
    onError: (error: any) => {
      // Since the thrown error contains the actual message, use it here
      toast.error("Invalid Password or Email!", { position: "top-right" });
    },
  });
};
