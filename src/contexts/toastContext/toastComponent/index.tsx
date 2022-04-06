import { useContext } from "react";
import Notification from "types/entities/Notification";
import { ToastContext } from "..";
import * as S from "./styles";

function Toast() {
  const { notificationsState } = useContext(ToastContext);

  return (
    <S.NotificationContainer>
      {notificationsState.map((notification: Notification) => {
        const index = notificationsState.indexOf(notification);
        return (
          <S.NotificationToast
            style={{
              backgroundColor: notificationsState[index].color,
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
