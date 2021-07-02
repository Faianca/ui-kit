import { S as SendbirdSdkContext } from './LocalizationContext-daa4f283.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-daa4f283.js';
export { default as SendBirdProvider } from './SendbirdProvider.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-a85c0eaa.js';
import 'css-vars-ponyfill';
export { s as sendBirdSelectors } from './index-b9d6f6bf.js';
export { default as ChannelList } from './ChannelList.js';
import './index-4bd4c3e1.js';
import 'react-dom';
import './index-1fdb5f67.js';
import 'date-fns/format';
import './utils-14d5b108.js';
import './LeaveChannel-c3d9b653.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import './utils-44990d43.js';
import './index-53b12704.js';
import 'date-fns/isSameDay';
import 'date-fns/formatDistanceToNowStrict';
import './index-fe82cbb1.js';
import './utils-45f0162a.js';
export { default as ChannelSettings } from './ChannelSettings.js';
import './index-91408caa.js';
export { default as App } from './App.js';
export { default as MessageSearch } from './MessageSearch.js';
import 'date-fns/isToday';
import 'date-fns/isYesterday';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
