'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var LocalizationContext = require('./LocalizationContext-96132df1.js');
var SendbirdProvider = require('./SendbirdProvider.js');
var React = require('react');
var React__default = _interopDefault(React);
require('prop-types');
require('sendbird');
require('./actionTypes-920b541f.js');
require('css-vars-ponyfill');
var index$1 = require('./index-1a9fb168.js');
var ChannelList = require('./ChannelList.js');
require('./index-a41a85a1.js');
require('react-dom');
require('./index-7612de95.js');
require('date-fns/format');
require('./utils-9643a8c5.js');
require('./LeaveChannel-57df4103.js');
var Channel = require('./Channel.js');
require('./utils-101e7a33.js');
require('./index-898b3981.js');
require('date-fns/isSameDay');
require('date-fns/formatDistanceToNowStrict');
require('./index-3524921e.js');
require('./utils-1c769f73.js');
var ChannelSettings = require('./ChannelSettings.js');
require('./index-7ef78461.js');
var App = require('./App.js');
var MessageSearch = require('./MessageSearch.js');
require('date-fns/isToday');
require('date-fns/isYesterday');
var OpenChannel = require('./OpenChannel.js');
var OpenChannelSettings = require('./OpenChannelSettings.js');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(LocalizationContext.SendbirdSdkContext);
  return context;
}

exports.getStringSet = LocalizationContext.getStringSet;
exports.withSendBird = LocalizationContext.withSendbirdContext;
exports.SendBirdProvider = SendbirdProvider;
exports.sendBirdSelectors = index$1.selectors;
exports.ChannelList = ChannelList;
exports.Channel = Channel.default;
exports.getAllEmojisFromEmojiContainer = Channel.getAllEmojisFromEmojiContainer;
exports.getEmojiCategoriesFromEmojiContainer = Channel.getEmojiCategoriesFromEmojiContainer;
exports.getEmojisFromEmojiContainer = Channel.getEmojisFromEmojiContainer;
exports.ChannelSettings = ChannelSettings;
exports.App = App;
exports.MessageSearch = MessageSearch;
exports.OpenChannel = OpenChannel.default;
exports.OpenChannelSettings = OpenChannelSettings;
exports.useSendbirdStateContext = useSendbirdStateContext;
//# sourceMappingURL=index.js.map
