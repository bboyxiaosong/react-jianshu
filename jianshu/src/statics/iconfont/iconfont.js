import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1568710101176'); /* IE9 */
  src: url('./iconfont.eot?t=1568710101176#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASAAAsAAAAACMAAAAQyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEYIQXATYCJAMUCwwABCAFhG0HRxuiBxEVnKPJfhbGbrQAYtRBTLS11Oxouv6L8cMmv+nK/X7Ih97L3iSpJjW8Lpz2IGBxxpccHv45/N03/pxWNCb9870JnFAUJRhaCP219tt/kG6YLrZYO4+Y2P63J773sGZaoVQaoVAliYcGIdNtgcz//udyei0vsPm94bLmsPKOegFGE6QsHGPhmHjABRKQ50DcxqtLdwMB1CWCQT5yi6sx1oxBBJAvob0R45RR11CIsWZYMrMRv0TPOCdLD4CZ/vfJP07EEBiDgjGyvC2nBS9v9N/EsqP+9yhdM5k7nh0ANw9YEAyAg3yXOruhwmQwWFOlfXsBUGMpx2pl8yboTaw4sXRH6qnpBG6UP15ChjCUxiClpzje6NvCWGUDPViogqAHgSoWKTDgvtwARegAQHJuwNs/H6OlXBkbGtrwZvauvgO106qfx9S8PJ9tDWrTPZhTT6l9HS15m4pzjDKTa42raRcvky9wpcuKpY1H+UsCGvQUnfKUGz07OxonNtXs24RRm/nL+xyRSNrDJKNH05kF81Bt3VKzyNt9x7orpbaKJU7tdpKlWw/u96k5rFGG0ik3doqFU21k8xdRWa2eUr+YWX/QbrumX6ObPdnnzeGZ5+E1NZc15j5/6x3aBm0tVVdfUhv81Gtr6bwptvIFS/mrYyFvZZFbBCvWtkbKCUo/v+zRSoGjA4V6xZ+GRUX9H8VaQ4jUY63hD0615d32z77daipuvGs7U8tqmMwmIVXH/UnN+p2PDyN6GaE9A2oFExVflJ74qk7S76qDzR/H+k8+lfg3X5FIJy+j5YQhk0bImhBMWzm8fXq+t+Brae8756F29rztXsd3BVHy1T86Nx0mlvTYlObg9Oy5S1f2XbIL9vIppG8277gV9u5V5DY3zrGpbJJV/MdrY1lcnfdpr8KcAVN7VOR0dMt2L/OWYAqeN1KQln+x8iyWFLafy3TNxwSNX139yopWd4z2GPIDAETqpPQL4nWKBYjWPDscxOo76/DX+I09m/4NXTVL/mbIcwDg/oYTGj8g0mgv/L4qiuiPIGpZwKkSw6TXcr4tlF16PhJGMErZFHx+ryWejKO2aZ0NEGOHGBgjF8Aau8JxpCfQM3MGfWPPQD0ibz5vxyUUiJ7gwTGBsHYLaekPytojrkk/MHD0B0PrYGHqM6xWnLkJQc4SsI6Qpxu71GVxxC0LykHuBNibwbpISnzqDIjMjVBTM7KZXohAjDEm27ItRE65iEPaQ/aDIIhpImIPGGoOYtKg67zsRhqLQyJ7J4B1CORRG3ZRLiYW4W5pJOc+PwHYNgXWiRpUhXsGEDJu85RJY7TA9SqjVqhraZ/ZYrMgxOl+nBALUT2wg8BMxqikvJsHMEjj9IgnGuhUMd5Wqc2vDp9xHUwZmwwio6JjEEN5NqWM9aLzn6QyB5jvRoV9EzciBAAA') format('woff2'),
  url('./iconfont.woff?t=1568710101176') format('woff'),
  url('./iconfont.ttf?t=1568710101176') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1568710101176#iconfont') format('svg'); /* iOS 4.1- */
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
.iconspin:before {
  content: "\e606";
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
