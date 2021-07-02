import format from 'date-fns/format';

var noop = function noop() {};
var getMessageCreatedAt = function getMessageCreatedAt(message) {
  return format(message.createdAt, 'p');
};
var getSenderName = function getSenderName(message) {
  return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
};
var getSenderProfileUrl = function getSenderProfileUrl(message) {
  return message.sender && message.sender.profileUrl;
};

export { getSenderName as a, getSenderProfileUrl as b, getMessageCreatedAt as g, noop as n };
//# sourceMappingURL=utils-14d5b108.js.map
