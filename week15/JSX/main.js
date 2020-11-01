import {createElement, Text, Wrapper} from "./createElement";

import {Carousel} from "./Carousel.js";
import {Panel} from "./Panel.js";
import {TabPanel} from "./TabPanel.js";
import {ListView} from "./ListView.js";


let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/15/b0/153c6456a919c059ab916e885d4d4db0.jpg",
    "https://static001.geekbang.org/resource/image/35/54/35cb65d74b24e70501967b672702ba54.jpg",
    "https://static001.geekbang.org/resource/image/71/41/7121e6eea47da51285c9f844fae64f41.jpg",
    "https://static001.geekbang.org/resource/image/0a/60/0aceeaa0134ae8ebbd520017e8587160.jpg",
]} />


component.mountTo(document.body);