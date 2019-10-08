<!--
 * @Description: Team.vue
 * @Author: b-sirius
 * @Date: 2019-09-30 12:27:14
 * @LastEditTime: 2019-10-08 17:15:33
 * @LastEditors: xiaoqi
 -->
<template>
    <div class="team">
        <div class="content">
            <div class="intro">
                <h2 class="title">团队概况</h2>
                <p class="text">
                    针对成员的不同发展方向，我们设置了三个团队，分别是极客，开发和UED(用户体验设计)。即使你在入门时还没有决定好方向，当技术积累到一定程度后，总将在他们之间做出抉择。而这所谓的分组目前只是一个方向上的参考，你完全可以加入多个组。
                </p>
                </br>
                <p class="text">
                    注：团队组成现在有所改动，详情可见招新题栏目
                </p>
            </div>
            <!-- <div class="main-content">
                <div class="content-item">
                    <div class="text-container">
                        <p class="text">开发组主要负责工作室日常项目开发维护。
  UED负责产品及设计。</p>
                    </div>
                    <div class="img-container"></div>
                </div>
                <div class="content-item">
                    <div class="img-container"></div>
                    <div class="text-container">
                        <p class="text">极客组负责主要的技术分享博客产出，专注互联网前沿技术。</p>
                    </div>
                </div>
            </div> -->
            <div class="team-intro">
                <div class="team-card-container">
                    <div class="team-card" @click="activeCard(0)" :class="cardPosClass(cardIndex[0])">
                        <div class="icon team0"></div>
                        <p class="title">极客组</p>
                        <p class="text">偏研究型方向，喜欢钻研技术，如网络安全，人工智能或者深挖计算机底层等等</p>
                    </div>
                    <div class="team-card" @click="activeCard(1)" :class="cardPosClass(cardIndex[1])">
                        <div class="icon team1"></div>
                        <p class="title">开发组</p>
                        <p class="text">正如字面所说，进行各种项目业务的开发，偶尔可能造造轮子，前端，后端（Java, PHP等），ios，安卓开发皆属此列</p>
                    </div>
                    <div class="team-card" @click="activeCard(2)" :class="cardPosClass(cardIndex[2])">
                        <div class="icon team2"></div>
                        <p class="title">UED组</p>
                        <p class="text">用户体验设计，专注于面向用户的工作，一般位于开发的上一层，成员主要有产品策划，设计师以及偏前方向的前端</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="info-container">
                    <div class="show-container">
                        <transition
                            :name="slideClass[slideType]"
                            @after-leave="toggleInfo(1)"
                        >
                            <div v-if="showInfo" class="content-wrapper">
                                <div class="avatar">
                                    <img class="img" :src="currInfo.list[currInfo.index].avatar">
                                </div>
                                <p class="name">{{currInfo.list[currInfo.index].name}}</p>
                                <p class="team-text">{{currInfo.list[currInfo.index].team}}</p>
                                <p class="intro">{{currInfo.list[currInfo.index].intro}}</p>
                            </div>
                        </transition>
                    </div>
                    <button class="btn left" @click="prevItem"></button>
                    <button class="btn right" @click="nextItem"></button>
                </div>
            </div>
        </div>
        <pageFooter @changePage="changePage"></pageFooter>
    </div>
</template>
<script>
import Footer from '@/components/Footer';

export default {
    name: 'project',
    data() {
        return {
            cardIndex: {
                0: 'left',
                1: 'center',
                2: 'right'
            },
            posClass: {
                left: 'left',
                center: 'center active',
                right: 'right',
            },
            slideClass: {
                'left': 'slide-left',
                'right': 'slide-right',
            },
            slideType: 'left',
            activedCard: 1,
            memberInfo: {
                0: [ // 极客
                    {
                        name: '陈德品',
                        team: 'AI组组长',
                        intro: '欢迎来调包调参',
                        avatar: require('../assets/avatar/chendepin.jpg')
                    },
                    {
                        name: '陈煜翔',
                        team: '安全组组长',
                        intro: '某大三咸鱼学长，大概会点c/c++，python，java。一只摸索安全但一直爬着走的咸鱼，容我换一面撒盐继续腌。欢迎新人来一起摸鱼',
                        avatar: require('../assets/avatar/cc.jpg')
                    }
                ],
                1: [ // 开发
                    {
                        name: '洪鑫',
                        team: '前端组组长',
                        intro: '悟言一室之内，放浪形骸之外',
                        avatar: require('../assets/avatar/hongxin.jpg')
                    },
                    {
                        name: '包兴宇',
                        team: 'Java组组长',
                        intro: '什么都略懂一点，生活更辛酸一些',
                        avatar: require('../assets/avatar/baoxingyu.jpg')            
                    },
                    {
                        name: '王杰',
                        team: 'Python组组长',
                        intro: '简单就好',
                        avatar: require('../assets/avatar/wangjie.jpg')
                    }
                ],
                2: [ // ued
                    {
                        name: '邹晨',
                        team: '设计组组长',
                        intro: '想学纯设计的封设的新人萌新ww',
                        avatar: require('../assets/avatar/zhengchangshan.jpg')
                    }
                ]
            },
            currInfo: {
                list: null,
                index: null
            },
            nextInfo: {
                list: null,
                index: null
            },
            showInfo: true
        }
    },
    components: {
        'pageFooter': Footer
    },
    methods: {
        changePage: function() {
            let args = [].slice.apply(arguments);
            let page = args.shift();

            this.$emit('changePage', page);
        },
        cardPosClass: function(pos) {
            return this.posClass[pos];
        },
        activeCard: function(index) {
            if (index === this.activedCard) {
                return false;
            }

            // 通过卡片被点击时所在位置获得缓动效果
            this.slideType = this.cardIndex[index];

            // 修改卡片的位置
            this.cardIndex[this.activedCard] = this.cardIndex[index];
            this.cardIndex[index] = 'center';
            this.activedCard = index;

            // 更新下一条信息
            let nextInfo = {};
            nextInfo.list = this.memberInfo[index];
            nextInfo.index = 0;

            this.nextInfo = nextInfo;

            // 切换信息显示
            let self = this;
            this.$nextTick(function() {
                self.toggleInfo();
            })
        },
        toggleInfo: function(arg) {
            if (arg) {
                this.currInfo = this.nextInfo;
            }
            this.showInfo = !this.showInfo;
        },
        prevItem: function() {
            let len = this.currInfo.list.length;
            let index = this.currInfo.index;

            index = index - 1 < 0 ? len - 1 : --index;

            // 更新下一条信息
            let nextInfo = {};
            nextInfo.list = this.currInfo.list;
            nextInfo.index = index;

            this.nextInfo = nextInfo;

            this.slideType = 'left';

            // 切换信息显示
            let self = this;
            this.$nextTick(function() {
                self.toggleInfo();
            })
        },
        nextItem: function() {
            let len = this.currInfo.list.length;
            let index = this.currInfo.index;

            index = index + 1 > len - 1 ? 0 : ++index;

            // 更新下一条信息
            let nextInfo = {};
            nextInfo.list = this.currInfo.list;
            nextInfo.index = index;

            this.nextInfo = nextInfo;

            this.slideType = 'right';

            // 切换信息显示
            let self = this;
            this.$nextTick(function() {
                self.toggleInfo();
            })
        }
    },
    created() {
        this.currInfo.list = this.memberInfo[1];
        this.currInfo.index = 0;
    }
}
</script>
<style lang="scss">
$black: #1e2022;
$darkBlack: #1c1e20;
$lightBlack: #323232;
$grey: #c1c7d4;
$red: #ff0042;
$lightBlue: #f0f9fd;
$dark: #96a0aa;
$white: #fff;
$outline: #13A7FF;
$title: 20px;
$text: 14px;
$name: 16px;
$lineHeight: 22.65px;
.team {
    position: absolute;
    width: 100%;
    .content {
        box-sizing: border-box;
        width: 1200px;
        margin: auto;
        padding: 60px 30px 150px 30px;
        .intro {
            width: 784px;
            margin: auto;
            margin-bottom: 100px;
            .title {
                text-align: center;
                font-weight: normal;
                font-size: $title;
                color: $grey;
                margin-bottom: 30px;
            }
            .text {
                font-size: $text;
                color: $lightBlack;
                line-height: $lineHeight;
                &.center {
                    text-align: center;
                }
            }
        }
        // .main-content {
        //     margin-bottom: 249px;
        //     .content-item {
        //         display: flex;
        //         font-size: 0;
        //         height: 380px;
        //         margin-bottom: 100px;
        //         &:last-child {
        //             margin-bottom: 0;
        //         }
        //         .text-container {
        //             display: flex;
        //             width: 50%;
        //             height: 100%;
        //             line-height: 380px;
        //             box-sizing: border-box;
        //             vertical-align: top;
        //             padding: 0 40px;
        //             .text {
        //                 margin: auto;
        //                 font-size: $text;
        //                 color: $lightBlack;
        //                 line-height: $lineHeight;
        //             }
        //         }
        //         .img-container {
        //             display: inline-block;
        //             width: 50%;
        //             height: 100%;
        //             background: #686A6D;
        //         }
        //     }
        // }
        .team-intro {
            .team-card-container {
                position: relative;
                height: 330px;
                margin-bottom: 50px;
                .team-card {
                    position: absolute;
                    top: 0;
                    width: 355px;
                    height: 330px;
                    padding: 64px 30px 42px 30px;
                    box-sizing: border-box;
                    background: $white;
                    box-shadow: 0 5px 25px 0 rgba(100,146,188,0.15);;
                    transition: box-shadow 0.2s, transform 0.2s, left 0.6s;
                    cursor: pointer;
                    &:hover,
                    &.active {
                        box-shadow: 0 20px 60px 0 rgba(100, 146, 188, 0.30);
                        transform: translateY(-5px);
                        z-index: 1;
                    }
                    &.left {
                        left: 0;
                    }
                    &.center {
                        left: 393px;
                    }
                    &.right {
                        left: 785px;
                    }
                    .icon {
                        width: 64px;
                        height: 64px;
                        margin: auto;
                        margin-bottom: 30px;
                        &.team0 {
                            background: url(../assets/team0.png) center no-repeat;
                        }
                        &.team1 {
                            background: url(../assets/team1.png) center no-repeat;
                        }
                        &.team2 {
                            background: url(../assets/team2.png) center no-repeat;
                        }
                    }
                    .title {
                        color: $lightBlack;
                        font-size: $title;
                        line-height: $title;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .text {
                        color: $grey;
                        line-height: $lineHeight;
                        font-size: $text;
                    }
                }
            }
            .line {
                width: 2px;
                height: 130px;
                background: $red;
                margin: auto;
                margin-bottom: 50px;
            }
            .info-container {
                position: relative;
                .show-container {
                    display: flex;
                    width: 900px;
                    height: 203px;
                    margin: auto;
                    overflow: hidden;
                    .content-wrapper {
                        display: inline-block;
                        margin: 0 auto;
                        transition: 0.5s;
                        &.slide-left-leave-active {
                            transform: translateX(-900px);
                        }
                        &.slide-left-enter {
                            transform: translateX(900px);
                        }
                        &.slide-right-leave-active {
                            transform: translateX(900px);
                        }
                        &.slide-right-enter {
                            transform: translateX(-900px);
                        }
                        .avatar {
                            width: 50px;
                            height: 50px;
                            margin: auto;
                            margin-bottom: 15px;
                            border-radius: 50%;
                            overflow: hidden;
                            .img {
                                width: 50px;
                                height: 50px;
                            }
                        }
                        .name {
                            text-align: center;
                            font-size: $name;
                            line-height: $name;
                            color: $lightBlack;
                            margin-bottom: 10px;
                        }
                        .team-text {
                            text-align: center;
                            font-size: $text;
                            line-height: $text;
                            color: $grey;
                            margin-bottom: 30px;
                        }
                        .intro {
                            width: 784px;
                            margin: auto;
                            text-align: center;
                            font-size: $text;
                            line-height: $lineHeight;
                            color: $lightBlack;
                        }
                    }
                }
                .btn {
                    position: absolute;
                    top: 83px;
                    width: 60px;
                    height: 60px;
                    border: none;
                    border-radius: 50%;
                    transition: 0.2s;
                    background: url(../assets/bigArrow.png) no-repeat center center;
                    cursor: pointer;
                    &.left {
                        left: 0;
                        transform: rotate(180deg);
                    }
                    &.right {
                        right: 0;
                    }
                    &:active {
                        outline: 2px solid $outline;
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>
