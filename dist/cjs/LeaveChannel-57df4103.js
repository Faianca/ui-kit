'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var LocalizationContext = require('./LocalizationContext-96132df1.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var index = require('./index-1a9fb168.js');
var index$1 = require('./index-a41a85a1.js');
var index$2 = require('./index-7612de95.js');

var filterUser = function filterUser(idsToFilter) {
  return function (currentId) {
    return idsToFilter.includes(currentId);
  };
};

var InviteMembers = function InviteMembers(props) {
  var userQueryCreator = props.userQueryCreator,
      closeModal = props.closeModal,
      _onSubmit = props.onSubmit,
      submitText = props.submitText,
      titleText = props.titleText,
      idsToFilter = props.idsToFilter,
      swapParams = props.swapParams;

  var _useState = React.useState([]),
      _useState2 = LocalizationContext._slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = LocalizationContext._slicedToArray(_useState3, 2),
      selectedUsers = _useState4[0],
      setSelectedUsers = _useState4[1];

  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  var _useState5 = React.useState({}),
      _useState6 = LocalizationContext._slicedToArray(_useState5, 2),
      usersDataSource = _useState6[0],
      setUsersDataSource = _useState6[1];

  var selectedCount = Object.keys(selectedUsers).length;
  React.useEffect(function () {
    var applicationUserListQuery = userQueryCreator();
    setUsersDataSource(applicationUserListQuery);
    applicationUserListQuery.next(function (res, err) {
      // eslint-disable-next-line no-underscore-dangle
      var users_ = res;
      var error = err;

      if (swapParams) {
        users_ = err;
        error = users_;
      }

      if (error) {
        return;
      }

      setUsers(users_);
    });
  }, []);
  return React__default.createElement(index.Modal, {
    titleText: titleText,
    submitText: submitText,
    type: index.Type.PRIMARY,
    onCancel: closeModal,
    onSubmit: function onSubmit() {
      var selectedUserList = Object.keys(selectedUsers);

      if (selectedUserList.length > 0) {
        _onSubmit(selectedUserList);

        closeModal();
      }
    }
  }, React__default.createElement("div", null, React__default.createElement(index$1.Label, {
    color: selectedCount > 0 ? index$1.LabelColors.PRIMARY : index$1.LabelColors.ONBACKGROUND_3,
    type: index$1.LabelTypography.CAPTION_1
  }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTEC)), React__default.createElement("div", {
    className: "sendbird-create-channel--scroll",
    onScroll: function onScroll(e) {
      var hasNext = usersDataSource.hasNext;
      var fetchMore = e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight;

      if (hasNext && fetchMore) {
        usersDataSource.next(function (usersBatch, error) {
          if (error) {
            return;
          }

          setUsers([].concat(LocalizationContext._toConsumableArray(users), LocalizationContext._toConsumableArray(usersBatch)));
        });
      }
    }
  }, users.map(function (user) {
    return !filterUser(idsToFilter)(user.userId) && React__default.createElement(index$2.UserListItem, {
      key: user.userId,
      user: user,
      checkBox: true,
      checked: selectedUsers[user.userId],
      onChange: function onChange(event) {
        var modifiedSelectedUsers = LocalizationContext._objectSpread2({}, selectedUsers, LocalizationContext._defineProperty({}, event.target.id, event.target.checked));

        if (!event.target.checked) {
          delete modifiedSelectedUsers[event.target.id];
        }

        setSelectedUsers(modifiedSelectedUsers);
      }
    });
  }))));
};

InviteMembers.propTypes = {
  idsToFilter: PropTypes.arrayOf(PropTypes.string),
  swapParams: PropTypes.bool,
  userQueryCreator: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  titleText: PropTypes.string
};
InviteMembers.defaultProps = {
  swapParams: false,
  submitText: 'create',
  titleText: 'Create new channel',
  idsToFilter: []
};

var createDefaultUserListQuery = function createDefaultUserListQuery(_ref) {
  var sdk = _ref.sdk,
      _ref$userFilledApplic = _ref.userFilledApplicationUserListQuery,
      userFilledApplicationUserListQuery = _ref$userFilledApplic === void 0 ? {} : _ref$userFilledApplic;
  var params = sdk.createApplicationUserListQuery();

  if (userFilledApplicationUserListQuery) {
    Object.keys(userFilledApplicationUserListQuery).forEach(function (key) {
      params[key] = userFilledApplicationUserListQuery[key];
    });
  }

  return params;
};

var getApplicationAttributes = function getApplicationAttributes() {
  var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _sdk$appInfo = sdk.appInfo,
      appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
  var _appInfo$applicationA = appInfo.applicationAttributes,
      applicationAttributes = _appInfo$applicationA === void 0 ? [] : _appInfo$applicationA;
  return applicationAttributes;
};

var isBroadcastChannelEnabled = function isBroadcastChannelEnabled() {
  var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
  var applicationAttributes = getApplicationAttributes(sdk);

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
  }

  return false;
};
var isSuperGroupChannelEnabled = function isSuperGroupChannelEnabled() {
  var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
  var applicationAttributes = getApplicationAttributes(sdk);

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
  }

  return false;
};
var setChannelType = function setChannelType(params, type) {
  if (type === 'broadcast') {
    // eslint-disable-next-line no-param-reassign
    params.isBroadcast = true;
  }

  if (type === 'supergroup') {
    // eslint-disable-next-line no-param-reassign
    params.isSuper = true;
  }

  return params;
};
var createChannel = function createChannel(sdk, selectedUsers, onBeforeCreateChannel, userId) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'group';
  return new Promise(function (resolve, reject) {
    // have custom params
    if (onBeforeCreateChannel) {
      var _params = onBeforeCreateChannel(selectedUsers);

      setChannelType(_params, type);
      sdk.GroupChannel.createChannel(_params, function (response, error) {
        var swapParams = sdk.getErrorFirstCallback();
        var groupChannel = response;
        var err = error;

        if (swapParams) {
          groupChannel = error;
          err = response;
        }

        if (err) {
          reject(err);
        }

        resolve(groupChannel);
      });
      return;
    }

    var params = new sdk.GroupChannelParams();
    params.addUserIds(selectedUsers);
    params.isDistinct = false;

    if (userId) {
      params.operatorUserIds = [userId];
    }

    setChannelType(params, type); // do not have custom params

    sdk.GroupChannel.createChannel(params, function (response, error) {
      var swapParams = sdk.getErrorFirstCallback();
      var groupChannel = response;
      var err = error;

      if (swapParams) {
        groupChannel = error;
        err = response;
      }

      if (err) {
        reject(err);
      }

      resolve(groupChannel);
    });
  });
};

var LeaveChannel = function LeaveChannel(props) {
  var onCloseModal = props.onCloseModal,
      onLeaveChannel = props.onLeaveChannel;
  return React__default.createElement(index.Modal, {
    onCancel: onCloseModal,
    onSubmit: onLeaveChannel,
    submitText: "Leave",
    titleText: "Leave this channel?"
  });
};

LeaveChannel.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  onLeaveChannel: PropTypes.func.isRequired
};

exports.InviteMembers = InviteMembers;
exports.LeaveChannelModal = LeaveChannel;
exports.createChannel = createChannel;
exports.createDefaultUserListQuery = createDefaultUserListQuery;
exports.isBroadcastChannelEnabled = isBroadcastChannelEnabled;
exports.isSuperGroupChannelEnabled = isSuperGroupChannelEnabled;
//# sourceMappingURL=LeaveChannel-57df4103.js.map
