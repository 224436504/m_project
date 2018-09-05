import {
  injectGlobal
} from 'styled-components';
injectGlobal`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1535805230696'); /* IE9*/
  src: url('./iconfont.eot?t=1535805230696#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAfMAAsAAAAACxwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8dkiCY21hcAAAAYAAAACDAAAB7GZI/wJnbHlmAAACBAAAA4cAAARMhfU6KGhlYWQAAAWMAAAAMQAAADYVKpRsaGhlYQAABcAAAAAeAAAAJAqJBjJobXR4AAAF4AAAABkAAAAgIs3//2xvY2EAAAX8AAAAEgAAABIE9APabWF4cAAABhAAAAAfAAAAIAEXAFhuYW1lAAAGMAAAAUUAAAJtPlT+fXBvc3QAAAd4AAAAUwAAAGqd37k4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkiWKcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMTwzY27438AQw9zA0AAUZgTJAQD+VQxzeJztkcENgzAQBOfAmCiKUD5UQfhSSipIJXml0m2D3Pl4UARnjaVdyWvpFhiA3nk5BeyHEfN115rfc29+4e164kZHFRo0a9Gqbd/BdTnr05i/mXgeJ340zyxURk/CKtc82v051Bj7TKIflST60JBEZ5qT6E1L4ltFa9JytoTuDwevIZUAeJxdU99rI1UUPufeuTOmaX5M82OSkKSdmWTGWm3ayWTGH23aratIW5BaXAsuFQTXpVbXZQWR0BKssn/AsgF90EBLBPvmvmwfhIq73Ve3D0vqU+3L+iD4IkUwmXgneVjYlzPfPefjcL5zvgEBoPcz/ZW+CimYhgVYAmCaOYmmYbtVdB1LyaOSjEthlESq9T/xfsrql+0+VTEkJkpU9LNFx405dBJtx0rGRQKXV1e2NF3XtlZW7z6Bl1eXF6+Pjo2NXl9cbj2BTVHyzggeCEyQCOZ99O9IKlVIpRae7jCA9N2nWwxgiwkHSLwzPjThAPOS9yf6fQopAF9zjx5SAAkiUIASgKqbqqRjOUYNU+dSmFO2cqhXdFHXjIo9h7auSUoYE/Fk2XJmkRxeecNrv/YBRt6/+BETCZM2sD1VvfEiqhcm3Y31+ZdL7z2bG8sUp46PKXjjOBc19Jj3C8t+dr/kTI1fCg8vFddYNp3IWsU8AGCv17sl7tOPgQEUA6gEUNzv/NjZ3yHH5KFC3/bRwy4fFYDw+X+gbboGOXiFs+W4qBmzyG9jFMwyPw6/jO5foKw6yaLl2FwTT/FCmRM4rWIbmpiQ8+jStpyWqyc373peZiZ9+v32vfIfw7I8jCbJdBs+OrPvbTVP0zMZzzu42a5yOsmQv7yTkCyHHl3bIcLjO9/eF0h9A6O8FPhHTkdxo07o0Tc/PRbIzrVHPtE7iQ+hr6x3SOt0nm89BVnQweTCVX8UvlbVciqybaBmDKxTVGUVK3pCV1ymJlQ6363ndD1H/OjtRmQ5L8s43a2Teg/qV5otr4l1jzfXc13wiZTHzqHPysuc5J02m63W6by/az5Hg75F68Bf6Myh40pi39oRVDigpmG6jtsv+PkIESWH291/G1XJTYaJRL5OJcxYKMRYIBMMhW+sxxKxKftCTlNL4egLE8tG4fnp565W0uuGiRLLpIuMMjYy8frah5ubZYwo2RB+KUpBkVmJofRENBbV5agcHs0gY8ElJbu8+NXFWWvOufXO+HezC7HRzJvOSlAQx166+sXnn15yBXWztm37XuAm7v1Nf6czEAQFDO4G/kMOjh1GyjUN7DCJqJXQsKs4innfKfhb44EgPGjc9uPt2h6le7XaLqW7+Eko8N9QLB3oiIIUDdSEo0bjSOhHsu2TBtS9zvkz50OpGAbOpZERflyA/wHu5/UkAHicY2BkYGAA4sSoL1Pi+W2+MnCzMIDA9Q0r9GD0////J7OtZm4AcjkYmECiAGexDXwAAAB4nGNgZGBgbvjfwBDDtuo/ELCtZgCKoAAOAL5bB8YAAHicY2FgYGCBYrZV//+zIPFZlBkYADJsAu4AAAAAAAAAAHoAxADaATYBegHgAiYAAHicY2BkYGDgYPBhYGUAASYg5gJCBob/YD4DABEBAXAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbcHBDYAgDAXQfhQEtnIAh6gRoR5qQiQapvfg1ffI0CfSPw+DASMsHCZ4BIq9iLL2ktTM7DbRvDZ/CJ+lsbpHuLPYu8qVwsJZZZdUiV40XRNhAA==') format('woff'),
  url('./iconfont.ttf?t=1535805230696') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1535805230696#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
font-family:"iconfont" !important;
font-size:16px;
font-style:normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

`



// 


// .icon-zhinanzhen:before { content: "\e604"; }

// .icon-Aa:before { content: "\e636"; }

// .icon-dingbu:before { content: "\e605"; }

// .icon-jiaohuan:before { content: "\e615"; }

// .icon-xiazai:before { content: "\e600"; }

// .icon-write:before { content: "\e62b"; }

// .icon-Magnifier:before { content: "\e62d"; }




// .icon-Aa:before { content: "\e636"; }

// .icon-write:before { content: "\e62b"; }

// .icon-Magnifier:before { content: "\e62d"; }
