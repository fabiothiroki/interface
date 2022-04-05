import { useContext } from "react";
import Notification from "types/entities/Notification";
import { ToastContext } from "..";
import * as S from "./styles";

function Toast() {
  const { state } = useContext(ToastContext);

  return (
    <S.NotificationContainer>
      {state.map((notification: Notification) => {
        const index = state.indexOf(notification);
        return (
          <S.NotificationToast
            style={{
              backgroundColor: state[index].color,
            }}
            key={index}
          >
            <S.Message>{notification.message}</S.Message>
            {notification.link && (
              <S.Link href={notification.link}>
                {notification.linkMessage}
              </S.Link>
            )}
          </S.NotificationToast>
        );
      })}
    </S.NotificationContainer>
  );
}

export default Toast;
