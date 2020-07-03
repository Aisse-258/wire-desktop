/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

export const EVENT_TYPE = {
  ABOUT: {
    LOADED: 'EVENT_TYPE.ABOUT.LOADED',
    LOCALE_RENDER: 'EVENT_TYPE.ABOUT.LOCALE_RENDER',
    LOCALE_VALUES: 'EVENT_TYPE.ABOUT.LOCALE_VALUES',
    SHOW: 'EVENT_TYPE.ABOUT.SHOW',
  },
  ACCOUNT: {
    DATA_DELETED: 'EVENT_TYPE.ACCOUNT.DATA_DELETED',
    DELETE_DATA: 'EVENT_TYPE.ACCOUNT.DELETE_DATA',
    SSO_LOGIN: 'EVENT_TYPE.ACCOUNT.SSO_LOGIN',
    UPDATE_INFO: 'EVENT_TYPE.ACCOUNT.UPDATE_INFO',
  },
  ACTION: {
    CHANGE_ENVIRONMENT: 'EVENT_TYPE.ACTION.CHANGE_ENVIRONMENT',
    CREATE_SSO_ACCOUNT: 'EVENT_TYPE.ACTION.CREATE_SSO_ACCOUNT',
    CREATE_SSO_ACCOUNT_RESPONSE: 'EVENT_TYPE.ACTION.CREATE_SSO_ACCOUNT_RESPONSE',
    NOTIFICATION_CLICK: 'EVENT_TYPE.ACTION.NOTIFICATION_CLICK',
    SAVE_PICTURE: 'EVENT_TYPE.ACTION.SAVE_PICTURE',
    SIGN_OUT: 'EVENT_TYPE.ACTION.SIGN_OUT',
    SWITCH_ACCOUNT: 'EVENT_TYPE.ACTION.SWITCH_ACCOUNT',
  },
  CONVERSATION: {
    ADD_PEOPLE: 'EVENT_TYPE.CONVERSATION.ADD_PEOPLE',
    ARCHIVE: 'EVENT_TYPE.CONVERSATION.ARCHIVE',
    CALL: 'EVENT_TYPE.CONVERSATION.CALL',
    DELETE: 'EVENT_TYPE.CONVERSATION.DELETE',
    PEOPLE: 'EVENT_TYPE.CONVERSATION.PEOPLE',
    PING: 'EVENT_TYPE.CONVERSATION.PING',
    SHOW_NEXT: 'EVENT_TYPE.CONVERSATION.SHOW_NEXT',
    SHOW_PREVIOUS: 'EVENT_TYPE.CONVERSATION.SHOW_PREVIOUS',
    START: 'EVENT_TYPE.CONVERSATION.START',
    TOGGLE_MUTE: 'EVENT_TYPE.CONVERSATION.TOGGLE_MUTE',
    VIDEO_CALL: 'EVENT_TYPE.CONVERSATION.VIDEO_CALL',
  },
  EDIT: {
    REDO: 'EVENT_TYPE.EDIT.REDO',
    UNDO: 'EVENT_TYPE.EDIT.UNDO',
  },
  LIFECYCLE: {
    SIGNED_IN: 'EVENT_TYPE.LIFECYCLE.SIGNED_IN',
    SIGNED_OUT: 'EVENT_TYPE.LIFECYCLE.SIGNED_OUT',
    SIGN_OUT: 'EVENT_TYPE.LIFECYCLE.SIGN_OUT',
    UNREAD_COUNT: 'EVENT_TYPE.LIFECYCLE.UNREAD_COUNT',
  },
  PREFERENCES: {
    SET_HIDDEN: 'EVENT_TYPE.PREFERENCES.SET_HIDDEN',
    SHOW: 'EVENT_TYPE.PREFERENCES.SHOW',
  },
  PROXY_PROMPT: {
    CANCELED: 'EVENT_TYPE.PROXY_PROMPT.CANCELED',
    LOADED: 'EVENT_TYPE.PROXY_PROMPT.LOADED',
    LOCALE_RENDER: 'EVENT_TYPE.PROXY_PROMPT.LOCALE_RENDER',
    LOCALE_VALUES: 'EVENT_TYPE.PROXY_PROMPT.LOCALE_VALUES',
    SUBMITTED: 'EVENT_TYPE.PROXY_PROMPT.AUTHENTICATION_DATA',
  },
  UI: {
    BADGE_COUNT: 'EVENT_TYPE.UI.BADGE_COUNT',
    SYSTEM_MENU: 'EVENT_TYPE.UI.SYSTEM_MENU',
    WEBAPP_VERSION: 'EVENT_TYPE.UI.WEBAPP_VERSION',
  },
  WEBAPP: {
    CHANGE_LOCATION_HASH: 'EVENT_TYPE.WEBAPP.CHANGE_LOCATION_HASH',
  },
  WRAPPER: {
    NAVIGATE_WEBVIEW: 'EVENT_TYPE.WRAPPER.NAVIGATE_WEBVIEW',
    RELAUNCH: 'EVENT_TYPE.WRAPPER.RELAUNCH',
    RELOAD: 'EVENT_TYPE.WRAPPER.RELOAD',
    UPDATE: 'EVENT_TYPE.WRAPPER.UPDATE',
    UPDATE_AVAILABLE: 'EVENT_TYPE.WRAPPER.UPDATE_AVAILABLE',
  },
};
