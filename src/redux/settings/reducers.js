import store from 'store'
import actions from './actions'

const STORED_SETTINGS = (storedSettings) => {
  const settings = {}
  Object.keys(storedSettings).forEach((key) => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

const initialState = {
  ...STORED_SETTINGS({
    authProvider: 'jwt', // firebase, jwt
    logo: 'Visual Builder',
    version: 'fluent', // fluent, clean, air
    theme: 'default', // default, dark
    locale: 'en-US',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    isPreselectedOpen: false,
    preselectedVariant: 'default',
    menuLayoutType: 'left', // left, top
    routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
    menuColor: 'gray', // white, dark, gray
    authPagesColor: 'gray', // white, gray, image
    isAuthTopbar: true,
    primaryColor: '#4b7cf3',
    leftMenuWidth: 256,
    isMenuUnfixed: false,
    isMenuShadow: false,
    isTopbarFixed: false,
    isTopbarSeparated: false,
    isGrayTopbar: false,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: false,
    isCardShadow: true,
    isSquaredBorders: false,
    isBorderless: false,
    layoutMenu: 'classic', // classic, flyout, simply
    layoutTopbar: 'v1', // v1
    layoutBreadcrumbs: 'v1', // v1, v2
    layoutFooter: 'v1', // v1, v2, v3, v4
    flyoutMenuType: 'flyout', // flyout, default, compact
    flyoutMenuColor: 'blue', // dark, blue, gray, white
  }),
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
