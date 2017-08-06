<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="left bar"></div>
            <div class="right bar"></div>
            <ul class="nav">
                <li class="item">
                    <a class="link" tabindex="0" :class="{active: isActive('home')}" @click="changePage('home')">主页</a>
                </li>
                <li class="item">
                    <a class="link" tabindex="0" :class="{active: isActive('team')}" @click="changePage('team')">团队介绍</a>
                </li>
                <li class="item">
                    <a class="link" tabindex="0" :class="{active: isActive('project')}" @click="changePage('project')">项目介绍</a>
                </li>
                <li class="item">
                    <a class="link" href="https://blog.duohuo.org/" target="_blank">博客</a>
                </li>
                <li class="item">
                    <a class="link" tabindex="0" :class="{active: isActive('contact')}" @click="changePage('contact')">联系我们</a>
                </li>
            </ul>
            <ul class="connect">
                <li class="item">大学生活动中心201</li>
                <li class="item">admin@duohuo.org</li>
                <li class="item">
                    <div class="QR">
                        <img src="../assets/QR.png" class="qr-img">
                    </div>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    },
    methods: {
        isActive: function(page) {
            return page === this.$route.name;
        },
        changePage: function() {
            let args = [].slice.apply(arguments);
            let page = args.shift();

            this.$emit('changePage', page);
        }
    }
}
</script>
<style lang="scss">
$black: #1e2022;
$darkBlack: #1c1e20;
$grey: #c1c7d4;
$red: #ff0042;
$lightBlue: #f0f9fd;
$dark: #96a0aa;
$white: #fff;
$title: 20px;
$text: 14px;
$lineHeight: 22.65px;
.footer {
    min-width: 1200px;
    height: 330px;
    background: $black;
    .footer-content {
        position: relative;
        width: 1140px;
        margin: auto;
        padding-top: 50px;
        .bar {
            position: absolute;
            width: 2px;
            height: 100px;
            background: $red;
            &.left {
                left: 0;
            }
            &.right {
                right: 0;
            }
        }
        .nav {
            float: left;
            margin-left: 22px;
            .item {
                height: 20px;
                margin-bottom: 20px;
                .link {
                    font-size: $title;
                    color: $dark;
                    cursor: pointer;
                    &.active,
                    &:hover {
                        color: $red;
                    }
                }
            }
        }
        .connect {
            float: right;
            margin-right: 22px;
            .item {
                text-align: right;
                height: 20px;
                margin-bottom: 20px;
                font-size: $title;
                color: $dark;
                .QR {
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    .qr-img {
                        width: 100px;
                        height: 100px;
                    }
                }
            }
        }
    }
}
</style>
