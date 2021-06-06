import { getStyle } from '../utils/tools'

export default {
  mounted (el) {
    const oImgWrap = el,
          oMagWrap = oImgWrap.querySelector('.mag-wrap'),
          oMagImg = oMagWrap.querySelector('.mag-img'),
          imgWidth = getStyle(oImgWrap, 'width'),
          imgHeight = getStyle(oImgWrap, 'height'),
          magWidth = getStyle(oMagWrap, 'width'),
          magHeight = getStyle(oMagWrap, 'height'),
          imgX = oImgWrap.offsetLeft,
          imgY = oImgWrap.offsetTop

    const init = () => {
      bindEvent()
    }

    function bindEvent () {
      // 给最外层盒子（img-wrap）绑定鼠标移入事件
      oImgWrap.addEventListener('mouseover', function (e) {
        // 显示放大镜
        oMagWrap.className += ' show'
        // 给document绑定鼠标移动事件
        document.addEventListener('mousemove', handleMouseMove, false)
        showMag(getXY(e).x, getXY(e).y)
      }, false)
      // 给最外层盒子（img-wrap）绑定鼠标移出事件
      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }
    // 鼠标移动事件
    function handleMouseMove (e) {
      const { x, y, mouseX, mouseY } = getXY(e)
      showMag(x, y, mouseX, mouseY)
    }
    // 鼠标移出事件
    function handleMouseOut () {
      // 隐藏放大镜
      oMagWrap.className = 'mag-wrap'
      // 当鼠标移出事，解除document上的鼠标移动事件
      document.removeEventListener('mousemove', handleMouseMove, false)
    }

    /**
     * 
     * @param {*} x 放大镜在页面的的x坐标
     * @param {*} y 放大镜在页面的y坐标
     * @param {*} mouseX 鼠标距离最外层盒子（img-wrap）的左侧位置
     * @param {*} mouseY 鼠标距离最外层盒子（img-wrap）的上侧位置
     */
    function showMag (x, y, mouseX, mouseY) {
      // 放大镜盒子的坐标
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'
      // 放大图片需要随放大镜的反方向移动
      oMagImg.style.left = -x + 'px'
      oMagImg.style.top = -y + 'px'

      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        oMagWrap.className = 'mag-wrap'
        document.removeEventListener('mousemove', handleMouseMove, false)
      }
    }

    function getXY (e) {
      /**
       * e.pageX 鼠标距离浏览器左侧的位置，参照点为浏览器内容区域的左上角，不会随着滚动条而变动
       * e.pageY 鼠标距离浏览器上侧的位置，参照点为浏览器内容区域的左上角，不会随着滚动条而变动
       * imgX 最外层盒子（img-wrap）相对于上一个有定位父级的left
       * imgY 最外层盒子（img-wrap）相对于上一个有定位父级的top
       * magWidth 放大镜的宽度
       * magHeight 放大镜的高度
       */
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY
      }
    }

    init()
  }
}