import { ToastContext } from "contexts/toastContext";
import { useContext } from "react";

type Props = {
  message: string;
  type?: "success" | "error";
  link?: string;
};

const useToast = () => {
  const { dispatch } = useContext(ToastContext);
  function toast({ type = "success", message, link }: Props) {
    const id = Math.random();
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id,
        type,
        message,
        link,
        linkMessage: "Learn more",
        color: type === "success" ? "#4BB543" : "#EF5350",
      },
    });
    setTimeout(() => {
      dispatch({
        type: "DELETE_NOTIFICATION",
        payload: id,
      });
    }, 4000);
  }

  return toast;
};

export default useToast;
