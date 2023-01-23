import { FONTS } from '@past3lle/assets'
import { createGlobalStyle } from 'styled-components'

export const FontCssProvider = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Thin}) format('truetype');
        font-style: normal;
        font-weight: 100;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_ThinItalic}) format('truetype');
        font-style: italic;
        font-weight: 100;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Light}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_LightItalic}) format('truetype');
        font-style: italic;
        font-weight: 300;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Regular}) format('truetype');
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Italic}) format('truetype');
        font-style: italic;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Medium}) format('truetype');
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_MediumItalic}) format('truetype');
        font-style: italic;
        font-weight: 500;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Bold}) format('truetype');
        font-style: normal;
        font-weight: 700;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_BoldItalic}) format('truetype');
        font-style: italic;
        font-weight: 700;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_Black}) format('truetype');
        font-style: normal;
        font-weight: 900;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${FONTS.FONT_Roboto_BlackItalic}) format('truetype');
        font-style: italic;
        font-weight: 900;
    }
`
