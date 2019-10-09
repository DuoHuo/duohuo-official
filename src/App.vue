<!--
 * @Description: App.vue
 * @Author: b-sirius
 * @Date: 2019-09-30 12:27:14
 * @LastEditTime: 2019-10-09 11:10:13
 * @LastEditors: xiaoqi
 -->
<template>
    <div id="app">
        <header class="header">
            <div class="meun-container">
                <div class="content">
                    <ul class="meun">
                        <li class="meun-item">
                            <router-link class="link" to="/">主页</router-link>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Team">团队介绍</router-link>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Project">项目介绍</router-link>
                        </li>
                        <li class="meun-item">
                            <a class="link" href="https://blog.duohuo.org/" target="_blank">博客</a>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Contact">联系我们</router-link>
                        </li>
                        <li class="meun-item">
                            <a class="link" href="https://www.duohuo.org/zhaoxin/" target="_blank">2019招新</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="background-container">
                <transition name="headerFade">
                    <div v-show="backgroundShow" ref="headerBackground" class="background"></div>
                </transition>
            </div>
        </header>
        <transition name="fade">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" @changePage="changePage"></router-view>
            </keep-alive>
        </transition>
        <transition name="fade">
            <router-view v-if="!$route.meta.keepAlive" @changePage="changePage"></router-view>
        </transition>
    </div>
</template>
<script>
// import HeaderBg1 from './assets/bg1.jpg';
// import HeaderBg2 from './assets/bg2.jpg';
// import HeaderBg3 from './assets/bg3.png';
// import HeaderBg4 from './assets/bg4.jpg';

// 暂时只使用一张头图
import banner from './assets/banner.jpg';

let pageHandler = {
    'home': function() {
        this.$router.push('/');
    },
    'team': function() {
        this.$router.push('/Team');
    },
    'project': function() {
        this.$router.push('/Project');
    },
    'contact': function() {
        this.$router.push('/Contact');
    }
}

// let headerBgHandler = {
//     'home': function() {
//         this._lazyLoadBackground(this.$refs.headerBackground, HeaderBg1);
//     },
//     'team': function() {
//         this._lazyLoadBackground(this.$refs.headerBackground, HeaderBg2);
//     },
//     'project': function() {
//         this._lazyLoadBackground(this.$refs.headerBackground, HeaderBg3);
//     },
//     'contact': function() {
//         this._lazyLoadBackground(this.$refs.headerBackground, HeaderBg4);
//     }
// }

let headerBgHandler = {
    'home': function(isFirst) {
        this._lazyLoadBackground(this.$refs.headerBackground, banner, isFirst);
    },
    'team': function(isFirst) {
        this._lazyLoadBackground(this.$refs.headerBackground, banner, isFirst);
    },
    'project': function(isFirst) {
        this._lazyLoadBackground(this.$refs.headerBackground, banner, isFirst);
    },
    'contact': function(isFirst) {
        this._lazyLoadBackground(this.$refs.headerBackground, banner, isFirst);
    }
}

export default {
    name: 'app',
    data() {
        return {
            backgroundShow: false
        }
    },
    watch: {
        routeName: function() {
            this.scrollTo(0, 0.25);
            headerBgHandler[this.routeName].call(this, false);
        }
    },
    methods: {
        /**
         * @description: 路由切换 banner动效
         * @param {DOM} 目标 DOM
         * @param {String}  图片路径
         * @param {Boolean}  是否没有切换路径
         * @return: 
         */        
        _lazyLoadBackground: function(container, src, isFirst) {
            let img = new Image();
            img.src = src;

            
            // 改动理由：切换路径时 500ms后执行 banner展示，用户没有切换路径时，个人认为应该立即显示，减少首页展示时间
            let time = isFirst ? 0 : 500;
            let self = this;
            img.onload = function() {
                setTimeout(() => {
                    container.style.background = 'url(' + src + ')';
                    container.style.backgroundSize = 'cover';
                    self.backgroundShow = true;
                }, time);
            }
            this.backgroundShow = false;
        },
        changePage: function(arg) {
            console.log('触发changePage');
            pageHandler[arg].apply(this);
        },
        /**
         * @description: 路由切换时触发视区滚动
         * @param {Number} to 滚动目标位置 
         * @param {Number} time 时间
         * @return: 
         */        
        scrollTo: function(to, time) {
            let from = document.documentElement.scrollTop;
            let speed = (to - from) / 60 / time;

            let scrollId = setInterval(() => {
                document.documentElement.scrollTop += speed;
                if (document.documentElement.scrollTop <= to) {
                    document.documentElement.scrollTop = to;
                    clearInterval(scrollId);
                }
            }, 16);
        }
    },
    mounted: function() {
        headerBgHandler[this.$route.name].call(this, true);
    },
    computed: {
        routeName: function() {
            console.log(this.$route.name);
            return this.$route.name;
        }
    }
}
</script>
<style lang="scss">
$black: #1e2022;
$darkBlack: #1c1e20;
$grey: #c1c7d4;
$red: #ff0042;
$linkRed: #e7211a;
$lightBlue: #f0f9fd;
$dark: #96a0aa;
$white: #fff;
$lightGrey: #d2d2d2;
$title: 20px;
$text: 14px;
$lineHeight: 22.65px;
body {
    font-family: "Microsoft Yahei", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    padding: 0;
    background: transparent;
    font-family: "Microsoft Yahei", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

input,
textarea {
    font-family: "Microsoft Yahei", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

p,
h1,
h2,
h3,
h4 {
    margin: 0;
    font-weight: normal;
}

pre {
    height: auto;
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
}

#app {
    min-width: 1200px;
}
.header {
    position: relative;
    .meun-container {
        position: absolute;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
        .content {
            width: 1200px;
            margin: auto;
            .meun {
                float: right;
                font-size: 0;
                .meun-item {
                    position: relative;
                    display: inline-block;
                    margin-right: 20px;
                    .link {
                        display: inline-block;
                        width: 100px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        color: $dark;
                        text-decoration: none;
                        font-size: $text;
                        transition: 0.3s;
                        cursor: pointer;
                        &.router-link-exact-active,
                        &:hover {
                            color: $white;
                        }
                    }
                }
            }
        }
    }
    .background-container {
        position: relative;
        padding-bottom: 41.6667%;
        .background {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
}

.headerFade-enter-active {
    transition: opacity 0.5s;
    opacity: 1;
}

.headerFade-enter {
    opacity: 0;
}

.headerFade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}

.headerFade-leave {
    opacity: 1
}

.fade-enter-active {
    transition: opacity 0.5s;
    transition-delay: 0.5s;
    opacity: 1;
}

.fade-enter {
    opacity: 0;
    position: absolute;
}

.fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}

.fade-leave {
    opacity: 1
}
</style>
