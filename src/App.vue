<template>
    <div id="app">
        <header class="header">
            <div class="meun-container">
                <div class="content">
                    <ul class="meun">
                        <li class="meun-item">
                            <router-link class="link" to="/">主页</router-link>
                            <i class="bar"></i>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Team">团队介绍</router-link>
                            <i class="bar"></i>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Project">项目介绍</router-link>
                            <i class="bar"></i>
                        </li>
                        <li class="meun-item">
                            <a class="link" href="https://blog.duohuo.org/" target="_blank">博客</a>
                            <i class="bar"></i>
                        </li>
                        <li class="meun-item">
                            <router-link class="link" to="/Contact">联系我们</router-link>
                            <i class="bar"></i>
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
    'home': function() {
        this._lazyLoadBackground(this.$refs.headerBackground, banner);
    },
    'team': function() {
        this._lazyLoadBackground(this.$refs.headerBackground, banner);
    },
    'project': function() {
        this._lazyLoadBackground(this.$refs.headerBackground, banner);
    },
    'contact': function() {
        this._lazyLoadBackground(this.$refs.headerBackground, banner);
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
            headerBgHandler[this.routeName].apply(this);
        }
    },
    methods: {
        _lazyLoadBackground: function(container, src) {
            let img = new Image();
            img.src = src;

            let self = this;
            img.onload = function() {
                setTimeout(() => {
                    container.style.background = 'url(' + src + ')';
                    container.style.backgroundSize = 'cover';
                    self.backgroundShow = true;
                }, 500);
            }
            this.backgroundShow = false;
        },
        changePage: function(arg) {
            pageHandler[arg].apply(this);
        },
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
        headerBgHandler[this.$route.name].apply(this);
    },
    computed: {
        routeName: function() {
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
