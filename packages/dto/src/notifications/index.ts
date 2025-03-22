import { UserPreferences, Notification as NotificationType } from "@genii/database/src/types";

export type Notification = {
  notifications: NotificationType[];
  preferences: UserPreferences;
};
