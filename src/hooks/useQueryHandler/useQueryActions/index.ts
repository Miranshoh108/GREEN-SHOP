import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";

export const useLoginMutate = () => {
  const axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
