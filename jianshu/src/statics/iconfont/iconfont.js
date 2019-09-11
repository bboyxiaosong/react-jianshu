import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1568196738883'); /* IE9 */
  src: url('./iconfont.eot?t=1568196738883#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOwAAsAAAAAB8AAAANkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDBIJjATYCJAMQCwoABCAFhG0HQBvNBsiOUElZ11VVVYmHr3vfc/ftr5WSUC/ax0MZb4VCUgBDFOGAdIH/83jaC6Z0Rk6aoIo/XVanORj+n2OmS0vA/L5wrK7no70BjlsHFtkHcsB3IAfkN4xd0BJ3E6ib0Rl2WlheD84yc1Agnli9GpwzGrkhP1SFcsXMDPEKDqppJH4GwEvw+/EPseEMklIB5sizmwIdZH/5PUskBvwfADJPB5OnM4HNo8AqkIm7SssFIoqsItTV9qR9oKoqMVVTp2eJ//8j3lEkVUti6D9eIspg5jbBLowWfPk5nETaCaoElCbCHAk+iKwKs56BdzBxU16TZKnj6uzsJ/AI7H5tTP2VQQ1XHwpRJ+b6LdGVUY3XBgqvjy68YoAH1ehaTxkEYsm0cGpOoEi9WzAaoB7UAWrUOWygUDgwODG9YcsKGLBSMPowhgmF+ijhwIFU47QpUD/UNcxo7a285FSwv3RWiD5AOHv19q1tGnZe7TxmKKvzsUk61oeRUVMkK2vXLn+0jCWp7qxS+lsllSp/S1WqCKH8bqrfcIAputg+/yJy/6/Ju9acWdWA52rYzOvk70w7fzQ5CnPIibR0aGTd5IKy7NQnCiF/Osjvd3Cbj23C4a/rPCu+f3S8BMOxEZXgGeDdPkHP74/cXHJ7tm1baO+AQIH/5uAXJXGShd+buwYNryj0qywAK8DEROzH32DKf+IAAbGBhJjo+9f+xts4Oljpkf7VWUACfM57OQi6JiYSuknh1XM7c/8Rt2NR1vimNmdF4HB0a7aZGiShro4/k6Dv3hSyUedcQtUogaRiGgpVs8iMXYWShl0oqzqAuhVF8xsGOITILsCyoQBC13pI2j6g0HUWmbF3oWTsLZR1g4C68/BZsWE+WCqPQ2oe6WhNT5rVWsyMreepML8W6bsa1VyaH5AbEWdn/XRMZHQ+XoTMiJtijL2bPpbnGZrhLCa6EOyHjEYLbeUszUjLRzbxvDU1Koqp+qJIrcUElBMcRI2H6NA0eqKxtCzMGK88jyr8fC1ErysjNa6hoMreCOHYsa3TYkSK7oAskpg7FdzKPXbd6MXi8Rg0BsfChFYITIjRiljQrNXdmiFavEhNA0JWqaJQKaarJHJ5mekNV0CdOTkHjhEYiTlA2o3Bc9Sul9+hi7YJaQ2sGQA=') format('woff2'),
  url('./iconfont.woff?t=1568196738883') format('woff'),
  url('./iconfont.ttf?t=1568196738883') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1568196738883#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon41:before {
  content: "\e62b";
}

.iconAa:before {
  content: "\e636";
}

.iconicon-checkin:before {
  content: "\e615";
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
