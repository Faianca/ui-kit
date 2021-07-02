import { c as _toConsumableArray, d as LocalizationContext, b as _slicedToArray } from './LocalizationContext-daa4f283.js';
import React, { useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { j as Colors, k as changeColorToClassName, I as IconButton, B as Button, l as ButtonTypes, m as ButtonSizes, n as MODAL_ROOT } from './index-b9d6f6bf.js';
import { L as Label, a as LabelTypography, b as LabelColors, I as Icon, c as IconTypes, d as IconColors, A as Avatar, j as changeColorToClassName$1 } from './index-4bd4c3e1.js';
import { createPortal } from 'react-dom';

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
var SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp' // not supported in IE
  ],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
};
var isImage = function isImage(type) {
  return SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0;
};
var isVideo = function isVideo(type) {
  return SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0;
};
var unSupported = function unSupported(type) {
  return !(isImage(type) || isVideo(type));
};

var isEmpty = function isEmpty(val) {
  return val === null || val === undefined;
}; // Some Ids return string and number inconsistently
// only use to comapre IDs


function compareIds (a, b) {
  if (isEmpty(a) || isEmpty(b)) {
    return false;
  }

  var aString = a.toString();
  var bString = b.toString();
  return aString === bString;
}

function DateSeparator(_ref) {
  var className = _ref.className,
      children = _ref.children,
      separatorColor = _ref.separatorColor;
  return React.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-separator']).join(' ')
  }, React.createElement("div", {
    className: ['sendbird-separator__left', "".concat(changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }), React.createElement("div", {
    className: "sendbird-separator__text"
  }, children), React.createElement("div", {
    className: ['sendbird-separator__right', "".concat(changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.element]),
  separatorColor: PropTypes.string
};
DateSeparator.defaultProps = {
  className: '',
  children: React.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: Colors.ONBACKGROUND_4
};

// import IconAttach from '../../svgs/icon-attach.svg';

var LINE_HEIGHT = 76;

var noop = function noop() {};

var KeyCode = {
  SHIFT: 16,
  ENTER: 13
};

var handleUploadFile = function handleUploadFile(callback) {
  return function (event) {
    if (event.target.files && event.target.files[0]) {
      callback(event.target.files[0]);
    } // eslint-disable-next-line no-param-reassign


    event.target.value = '';
  };
};

var MessageInput = React.forwardRef(function (props, ref) {
  var isEdit = props.isEdit,
      disabled = props.disabled,
      value = props.value,
      name = props.name,
      placeholder = props.placeholder,
      maxLength = props.maxLength,
      onFileUpload = props.onFileUpload,
      onSendMessage = props.onSendMessage,
      onCancelEdit = props.onCancelEdit,
      onStartTyping = props.onStartTyping;

  var _useContext = useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

  var fileInputRef = useRef(null);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShiftPressed = _useState4[0],
      setIsShiftPressed = _useState4[1];

  var setHeight = function setHeight() {
    try {
      var elem = ref.current;
      var MAX_HEIGHT = window.document.body.offsetHeight * 0.6;

      if (elem && elem.scrollHeight >= LINE_HEIGHT) {
        if (MAX_HEIGHT < elem.scrollHeight) {
          elem.style.height = 'auto';
          elem.style.height = "".concat(MAX_HEIGHT, "px");
        } else {
          elem.style.height = 'auto';
          elem.style.height = "".concat(elem.scrollHeight, "px");
        }
      } else {
        elem.style.height = '';
      }
    } catch (error) {// error
    }
  }; // after setHeight called twice, the textarea goes to the initialized


  useEffect(function () {
    setHeight();
    return setHeight;
  }, [inputValue]);

  var sendMessage = function sendMessage() {
    if (inputValue && inputValue.trim().length > 0) {
      var trimmedInputValue = inputValue.trim();

      if (isEdit) {
        onSendMessage(name, trimmedInputValue, function () {
          onCancelEdit();
        });
      } else {
        onSendMessage(trimmedInputValue);
        setInputValue('');
      }
    }
  };

  return React.createElement("form", {
    className: [isEdit ? 'sendbird-message-input__edit' : '', disabled ? 'sendbird-message-input-form__disabled' : ''].join(' ')
  }, React.createElement("div", {
    className: ['sendbird-message-input', disabled ? 'sendbird-message-input__disabled' : ''].join(' ')
  }, React.createElement("textarea", {
    className: "sendbird-message-input--textarea",
    disabled: disabled,
    ref: ref,
    name: name,
    value: inputValue,
    maxLength: maxLength,
    onChange: function onChange(e) {
      setInputValue(e.target.value);
      onStartTyping();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === KeyCode.SHIFT) {
        setIsShiftPressed(true);
      }

      if (!isShiftPressed && e.keyCode === KeyCode.ENTER) {
        e.preventDefault();
        sendMessage();
      }
    },
    onKeyUp: function onKeyUp(e) {
      if (e.keyCode === KeyCode.SHIFT) {
        setIsShiftPressed(false);
      }
    }
  }), !inputValue && React.createElement(Label, {
    className: "sendbird-message-input--placeholder",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_3
  }, placeholder || stringSet.CHANNEL__MESSAGE_INPUT__PLACE_HOLDER), !isEdit && inputValue && inputValue.trim().length > 0 && React.createElement(IconButton, {
    className: "sendbird-message-input--send",
    height: "32px",
    width: "32px",
    onClick: sendMessage
  }, React.createElement(Icon, {
    type: IconTypes.SEND,
    fillColor: IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  })), !isEdit && (!inputValue || !(inputValue.trim().length > 0)) && React.createElement(IconButton, {
    className: "sendbird-message-input--attach",
    height: "32px",
    width: "32px",
    onClick: function onClick() {
      // todo: clear previous input
      fileInputRef.current.click();
    }
  }, React.createElement(Icon, {
    type: IconTypes.ATTACH,
    fillColor: IconColors.CONTENT_INVERSE,
    width: "20px",
    height: "20px"
  }), React.createElement("input", {
    className: "sendbird-message-input--attach-input",
    type: "file",
    ref: fileInputRef,
    onChange: handleUploadFile(onFileUpload)
  }))), isEdit && React.createElement("div", {
    className: "sendbird-message-input--edit-action"
  }, React.createElement(Button, {
    className: "sendbird-message-input--edit-action__cancel",
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: onCancelEdit
  }, stringSet.BUTTON__CANCEL), React.createElement(Button, {
    className: "sendbird-message-input--edit-action__save",
    type: ButtonTypes.PRIMARY,
    size: ButtonSizes.SMALL,
    onClick: function onClick() {
      if (inputValue) {
        var trimmedInputValue = inputValue.trim();
        onSendMessage(name, trimmedInputValue, function () {
          onCancelEdit();
        });
      }
    }
  }, stringSet.BUTTON__SAVE)));
});
MessageInput.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isEdit: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  onFileUpload: PropTypes.func,
  onSendMessage: PropTypes.func,
  onStartTyping: PropTypes.func,
  onCancelEdit: PropTypes.func
};
MessageInput.defaultProps = {
  value: '',
  onSendMessage: noop,
  name: 'sendbird-message-input',
  isEdit: false,
  disabled: false,
  placeholder: '',
  maxLength: 5000,
  onFileUpload: noop,
  onCancelEdit: noop,
  onStartTyping: noop
};

var FileViewerComponent = function FileViewerComponent(_ref) {
  var profileUrl = _ref.profileUrl,
      nickname = _ref.nickname,
      name = _ref.name,
      type = _ref.type,
      url = _ref.url,
      isByMe = _ref.isByMe,
      onClose = _ref.onClose,
      onDelete = _ref.onDelete;
  return React.createElement("div", {
    className: "sendbird-fileviewer"
  }, React.createElement("div", {
    className: "sendbird-fileviewer__header"
  }, React.createElement("div", {
    className: "sendbird-fileviewer__header__left"
  }, React.createElement("div", {
    className: "sendbird-fileviewer__header__left__avatar"
  }, React.createElement(Avatar, {
    height: "32px",
    width: "32px",
    src: profileUrl
  })), React.createElement(Label, {
    className: "sendbird-fileviewer__header__left__filename",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, name), React.createElement(Label, {
    className: "sendbird-fileviewer__header__left__sender-name",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, nickname)), React.createElement("div", {
    className: "sendbird-fileviewer__header__right"
  }, !unSupported(type) && React.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions"
  }, React.createElement("a", {
    className: "sendbird-fileviewer__header__right__actions__download",
    rel: "noopener noreferrer",
    href: url,
    target: "_blank"
  }, React.createElement(Icon, {
    type: IconTypes.DOWNLOAD,
    height: "24px",
    width: "24px"
  })), onDelete && isByMe && React.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__delete"
  }, React.createElement(Icon, {
    type: IconTypes.DELETE,
    height: "24px",
    width: "24px",
    onClick: onDelete
  }))), React.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__close"
  }, React.createElement(Icon, {
    type: IconTypes.CLOSE,
    height: "24px",
    width: "24px",
    onClick: onClose
  })))), React.createElement("div", {
    className: "sendbird-fileviewer__content"
  }, isVideo(type) && // eslint-disable-next-line jsx-a11y/media-has-caption
  React.createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, React.createElement("source", {
    src: url,
    type: type
  })), isImage(type) && React.createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), unSupported(type) && React.createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, React.createElement(Label, {
    type: LabelTypography.H_1,
    color: LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};
FileViewerComponent.propTypes = {
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isByMe: PropTypes.bool
};
FileViewerComponent.defaultProps = {
  isByMe: true
};
function FileViewer(props) {
  var message = props.message,
      isByMe = props.isByMe,
      onClose = props.onClose,
      onDelete = props.onDelete;
  var sender = message.sender,
      type = message.type,
      url = message.url,
      _message$name = message.name,
      name = _message$name === void 0 ? '' : _message$name;
  var profileUrl = sender.profileUrl,
      _sender$nickname = sender.nickname,
      nickname = _sender$nickname === void 0 ? '' : _sender$nickname;
  return createPortal(React.createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onClose: onClose,
    onDelete: onDelete,
    isByMe: isByMe
  }), document.getElementById(MODAL_ROOT));
}
FileViewer.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.shape({
      profileUrl: PropTypes.string,
      nickname: PropTypes.string
    }),
    type: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  isByMe: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
FileViewer.defaultProps = {
  isByMe: true
};

var http = /https?:\/\//;
function LinkLabel(_ref) {
  var className = _ref.className,
      src = _ref.src,
      type = _ref.type,
      color = _ref.color,
      children = _ref.children;
  var url = http.test(src) ? src : "http://".concat(src);
  return React.createElement("a", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-link-label', color ? changeColorToClassName$1(color) : '']).join(' '),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(Label, {
    className: "sendbird-link-label__label",
    type: type,
    color: color
  }, children));
}
LinkLabel.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(LabelTypography)).isRequired,
  color: PropTypes.oneOf(Object.keys(LabelColors)).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.element)]).isRequired
};
LinkLabel.defaultProps = {
  className: ''
};

export { DateSeparator as D, FileViewer as F, LinkLabel as L, MessageInput as M, isVideo as a, compareIds as c, isImage as i, unSupported as u };
//# sourceMappingURL=index-53b12704.js.map
