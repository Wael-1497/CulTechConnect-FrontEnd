import { RxStompService } from './rx-stomp.service';
import { myRxStompConfig } from './rx-stomp.config';
import {envi} from "../../../environments/envi";

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.stompClient.brokerURL = envi.brokerURL + '?token=' + localStorage.getItem('token');
  rxStomp.activate();
  return rxStomp;
}
