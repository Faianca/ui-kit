'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index$1 = require('./index-a41a85a1.js');
var utils$2 = require('./utils-1c769f73.js');

function ChannelAvatar(_a) {
  var channel = _a.channel,
      userId = _a.userId,
      theme = _a.theme,
      _b = _a.width,
      width = _b === void 0 ? 56 : _b,
      _c = _a.height,
      height = _c === void 0 ? 56 : _c;
  var isBroadcast = channel.isBroadcast;
  var memoizedAvatar = React.useMemo(function () {
    return isBroadcast ? utils$2.useDefaultAvatar(channel) ? React__default.createElement("div", {
      className: "sendbird-chat-header--default-avatar",
      style: {
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, React__default.createElement(index$1.Icon, {
      type: index$1.IconTypes.BROADCAST,
      fillColor: index$1.IconColors.CONTENT,
      width: width * 0.575,
      height: height * 0.575
    })) : React__default.createElement(index$1.Avatar, {
      className: "sendbird-chat-header--avatar--broadcast-channel",
      src: utils$2.getChannelAvatarSource(channel, userId),
      width: width,
      height: height,
      alt: channel.name
    }) : React__default.createElement(index$1.Avatar, {
      className: "sendbird-chat-header--avatar--group-channel",
      src: utils$2.getChannelAvatarSource(channel, userId),
      width: width + "px",
      height: height + "px",
      alt: channel.name
    });
  }, [channel.members, channel.coverUrl, theme]);
  return React__default.createElement(React__default.Fragment, null, memoizedAvatar);
}

exports.ChannelAvatar = ChannelAvatar;
//# sourceMappingURL=index-3524921e.js.map
