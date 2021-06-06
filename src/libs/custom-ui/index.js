import Magnifier from './components/Magnifier/Index'
import Carousel from './components/Carousel/Index'
import CarItem from './components/Carousel/Item'
import TreeMenu from './components/TreeMenu/Index'
import MenuItem from './components/TreeMenu/MenuItem'
import SubMenu from './components/TreeMenu/SubMenu'
import ReSubMenu from './components/TreeMenu/ReSubMenu'
import Selector from './components/Selector/Index'
import Stars from './components/Stars/Index'
import Modal from './components/Modal/Index'

import './reset.css'
import './assets/css/iconfont.css'

let CustomUI = {}

CustomUI.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier)
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
  Vue.component(TreeMenu.name, TreeMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(ReSubMenu.name, ReSubMenu)
  Vue.component(Selector.name, Selector)
  Vue.component(Stars.name, Stars)
  Vue.component(Modal.name, Modal)
}

export default CustomUI