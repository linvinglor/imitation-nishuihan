// 兼容IE8以及工具类封装

// 一丶工具类封装

// 1.直接获取html元素;

// a)ID名获取
function id(idName) {
    return document.getElementById(idName);
};

// b)标签名获取
function tagName(tagName) {
    return document.getElementsByTagName(tagName);
};

// c)类名获取
function className(className) {
    return document.getElementsByClassName(className)
};

// 2. 选中移动

// a)全选
function moveAll(form, to) {
    for (var i = 0; i < form.children.length;) {
        to.appendChild(form.children[0])
        //这里下标0就可以了，因为每移动一次下一个元素的下标就是0
    }
};

// b)多选
function moveSelect(form, to) {
    for (var i = 0; i < form.children.length; i++) {
        if (form.children[i].selected) {
            to.appendChild(form.children[i])
            i--;
            // 每移动一个,数据下标发生变化,i--可以让下标重新对应
        }
    }
};

// 3. 缓动动画封装函数

/**
 * @param obj
 * @param attrs
 */
function animationSlow(obj, attrs) {
    clearInterval(obj.timeID);
    var cssStyle = window.getComputedStyle(obj, null);
    obj.timeID = setInterval(function () {
        var finish = true;
        for (var key in attrs) {
            if (key == "zIndex") {
                // 层级
                obj.style[key] = attrs[key];
            } else if (key == "opacity") {
                // 透明度
                var current = cssStyle[key] * 100;
                var target = attrs[key] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[key] = (current + step) / 100;
                if (current != target) {
                    finish = false;
                }
            } else {
                var current = parseInt(cssStyle[key]);
                var target = attrs[key];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[key] = current + step + "px";
                if (current != target) {
                    finish = false;
                }
            }
        }
        if (finish) {
            clearInterval(obj.timeID);
        }
    }, 10)
}

//------------------------------------------------------------------------------------------------------------------------------------------------------

// 二丶兼容IE8

// 1. 获取元素文本

// a)获取元素文本
function getText(element) {
    if (element.innerText) {
        return element.innerText;
    } else {
        return element.textContent;
    }
};

// b)修改元素文本
function setText(element, text) {
    if (element.innerText == undefined) {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
};

// 2. 间接获取html元素

// a)获取兄弟节点

// 01. 获取下一个兄弟元素
function getNextElement(ele) {
    if (ele.nextElementSibling) {
        return ele.nextElementSibling;
    } else {
        var node = ele.nextSibling;
        // 如果是最后一个元素则也会结束循环并返回null
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
};

// 02. 获取上一个兄弟元素
function getPreviousElement(obj) {
    //能力检测
    if (obj.previousElementSibling) {
        return obj.previousElementSibling;
    } else {
        //获取上一个节点
        var node = obj.previousSibling; //node可能是null 可能是元素节点 可能是其他节点
        //但是并能保证上一个节点是元素，如果不是元素则继续找上一个，以此类推，直到找到为止
        while (node && node.nodeType != 1) { //存在且类型不是元素
            //如果节点的类型不是1，表示node不是一个元素节点，那么继续找上一个
            node = node.previousSibling;
        }
        return node;
    }
};

// b) 获取 first/last ElementChild

// 01. 获取第一个子元素
function getFirstElement(parentEle) {
    if (parentEle.firstElementChild) {
        return parentEle.firstElementChild;
    } else {
        var node = parentEle.firstChild;
        // 没有找到节点结束循环返回null
        while (node && node.nodeType != 1) {
            // 找到的这个节点不是元素节点则找个节点的下一个节点直到找到元素节点
            node = node.nextSibling;
        }
        return node;
    }
};

// 02. 获取最后一个子元素
function getLastElement(obj) {
    //能力检测
    if (obj.lastElementChild) {
        return obj.lastElementChild;
    } else {
        //IE8及之前浏览器会进入这个方法
        var node = obj.lastChild;
        //如果最后一个子节点不是元素节点，那么我们应该获取它的上一个节点
        while (node && node.nodeType != 1) {
            node = node.previousSibling; //为什么这里是上一个子节点？  最后一个子节点只有上一个没有下一个
        }
        return node;
    }
};

// 3. 获取元素的行内行外样式属性

/** 获取元素的样式属性
 * @param  obj: 元素对象
 * @param  attr：属性名字符串
 *@return value: 属性值字符串
 */

function getStyle(obj, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else { // IE8
        return obj.currentStyle[attr];
    }
};

// 4. 获取页面滚动出去的距离

function getScroll() {
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return {
        scrollLeft: scrollLeft, //左边是对象属性名，右边是属性值
        scrollTop: scrollTop
    }
}

// 5. 获取浏览器可视区域
function getClientSize() {
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
    }
}

// 6. 获取事件触发点距离页面左上的距离

//pageX和pageY的兼容
//pageX/Y坐标系相对于页面左上角，实际上就是界面滚定出去的距离 + 可视区域的距离
function getPagePoint(e) {
    e = e || window.event; //事件对象兼容
    return {
        pageX: e.pageX || getScroll().scrollLeft + e.clientX,
        pageY: e.pageY || getScroll().scrollTop + e.clientY,
    }
}

// 7.给元素添加/移出多个相同的事件

/** @param obj：元素
 *  @param type：事件名
 *  @param listener：事件处理函数
 * @return 无
 */

// a) 添加

function addEventListener(obj, type, listener) {
    //能力检测
    if (obj.addEventListener) { // 添加多个相同事件
        obj.addEventListener(type, listener, false);
    } else if (obj.attachEvent) { // IE8
        obj.attachEvent("on" + type, listener);
    } else { // 默认方式
        obj["on" + type] = listener;
    }
}

// b) 移除

function removeEventListener(obj, type, listener) {
    //能力检测
    if (obj.removeEventListener) {
        obj.removeEventListener(type, listener, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, listener);
    } else {
        obj["on" + type] = null;
    }
}

// 8. 阻止事件冒泡

/** @param e: 事件对象
 */
function stopPropagation(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}