<template>
    <div class="team">
        <div class="content">
            <div class="intro">
                <h2 class="title">团队概况</h2>
                <p class="text">
                    针对成员的不同发展方向，我们设置了三个团队，分别是极客，开发和UED(用户体验设计)。即使你在入门时还没有决定好方向，当技术积累到一定程度后，总将在他们之间做出抉择。而这所谓的分组目前只是一个方向上的参考，你完全可以加入多个组。
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
                        <p class="text">正如字面所说，进行各种项目业务的开发，偶尔可能造造轮子，前端，后端（java, php等），iOS，安卓开发皆属此列</p>
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
                        name: '金敏睿',
                        team: 'IOS',
                        intro: '我是16级计算机科学与技术专业的金敏睿，大一参加了多火组织的第一届黑客松比赛并有幸加入了多火，在这个被大佬包围的组织里我学到了很多，受益匪浅，希望能学到更多感兴趣的东西',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E9%87%91%E6%95%8F%E7%9D%BF.jpg'
                    },
                    {
                        name: '芮文凡',
                        team: '产品',
                        intro: '我要做有吸引力的产品(●╹◡╹●)ﾉ♡',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E8%8A%AE%E6%96%87%E5%87%A1.jpg'
                    },
                    {
                        name: '沈传奇',
                        team: 'PHP',
                        intro: '16计科三班，姓沈，名传奇，阴差阳错地进入了多火的大家庭，本人技术一般，爱聊善思，有点愣，本着多修仙，多学习的想法，向着社里的大佬看齐～(手动滑稽)',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E6%B2%88%E4%BC%A0%E5%A5%87.jpg'
                    }
                ],
                1: [ // 开发
                    {
                        name: '周易',
                        team: '前端',
                        intro: '我练功发自真心',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E5%91%A8%E6%98%93.jpg'
                    },
                    {
                        name: '曹青华',
                        team: '前端',
                        intro: '莫说我穷得叮当响，大袖揽清风。莫讥我困时无处眠，天地做床被。莫笑我渴时无美酒，大江是酒壶……',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E6%9B%B9%E9%9D%92%E5%8D%8E.jpg'            
                    },
                    {
                        name: '常俊飞',
                        team: 'PHP',
                        intro: '拍黄片是坠吼的语言，我们一起深入学习观摩拍黄片，迎娶白富美，走向人生巅峰？？？（tx 。失败人士，菜鸡一只，爱好勃学？滑稽。（逃',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E5%B8%B8%E4%BF%8A%E9%A3%9E.png'
                    },
                    {
                        name: '朱慧迪',
                        team: '前端',
                        intro: '自称是████小弟，目前学习前端，水平较菜，正在努力学习中，可完成简单设计，有希望做项目的可以找我合作',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E6%9C%B1%E6%83%A0%E8%BF%AA.jpg'
                    },
                    {
                        name: '陈曦',
                        team: 'PHP',
                        intro: '当一条咸鱼拥有了梦想~',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E9%99%88%E6%9B%A6.jpg'
                    },
                    {
                        name: '袁兴宇',
                        team: '安卓',
                        intro: '袁兴宇，15级软工的，再留个联系方式 qq ：3303521941。主要做java与android。',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E8%A2%81%E5%85%B4%E5%AE%87.jpg'
                    },
                    {
                        name: '李杰',
                        team: 'java',
                        intro: '额，我真的是小白，白到不能再白了。。。对代码感兴趣，对技术感兴趣，梦想是要有的说不定就实现了呢2333,再来点字凑个字数吧，哎字数还就凑上了，真的凑上字数了哎。',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E6%9D%8E%E6%9D%B0.jpg'
                    }
                ],
                2: [ // ued
                    {
                        name: '芮文凡',
                        team: '产品',
                        intro: '我要做有吸引力的产品(●╹◡╹●)ﾉ♡',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E8%8A%AE%E6%96%87%E5%87%A1.jpg'
                    },
                    {
                        name: '周易',
                        team: '前端',
                        intro: '我练功发自真心',
                        avatar: 'http://7xrkxs.com1.z0.glb.clouddn.com/duohuoOfficial/avatar/%E5%91%A8%E6%98%93.jpg'
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
