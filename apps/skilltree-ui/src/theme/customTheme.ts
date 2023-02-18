export const CUSTOM_THEME = {
  text1: '#fff',
  bg1: '#d5fb73',
  mainBg: '#d5fb73',
  mainBgDarker: '#94c614',
  mainBg2: '#262528',
  mainFg: 'ghostwhite',
  mainFg2: 'red',
  darkText: '#000',
  lightText: 'ghostwhite',
  // rarity colours
  rarity: {
    empty: {
      backgroundColor: 'transparent',
      boxShadowColor: '0px 0px transparent'
    },
    common: {
      backgroundColor: '#969696b3',
      boxShadowColor: '12px 2px #969696b3'
    },
    rare: { backgroundColor: '#6495ed', boxShadowColor: '12px 2px #6495ed' },
    legendary: {
      backgroundColor: '#ab64ffbd',
      boxShadowColor: '12px 8px #8000809e'
    },
    epic: { backgroundColor: '#ffb467', boxShadowColor: '12px 8px #ffb467' }
  },
  gradients: {
    lockedSkill: 'linear-gradient(195deg, lightgrey, darkred)',
    unlockedSkill: 'linear-gradient(195deg, lightgrey, #ab64ffbd)',
    ownedSkill: 'linear-gradient(195deg, lightgrey, #208120)'
  }
} as const
export type CustomTheme = typeof CUSTOM_THEME
