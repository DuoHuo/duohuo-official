<template>
    <div class="index">
        <div class="content">
            <div class="intro">
                <h2 class="title">关于我们</h2>
                <p class="text">
                    “ 多火工作室是一个从事网站制作、移动开发、视觉设计的IT项目实践团队。在这个最in最top的交流平台上，一个富有创意的idea，会有一群实干帅气的程序员为你串联发声，一张张设计图，一行行代码的轨迹见证了七年来一个个不平凡的产品...... ”
                    <br>
                    <br>
                    教科书般酷炫的文案，我也很希望这是真的(ﾒ ﾟ皿ﾟ)ﾒ......的确，这里有过富有创意的idea，有过实干帅气的程序员与设计师，咱也或许是南信大最靠谱的开发者团队，但求求你不要把这里想象成一个大佬云集难以高攀的顶尖团队。我们不过由普通大学的普通大学生组成，试图将楼上这段叼的不行的文案变为现实。所以欢迎加入俺们，说不定你就是那个“实干帅气”的家伙呢( ͡° ͜ʖ ͡°)
                </p>
            </div>
            <div class="content-item">
                <div class="bg">
                </div>
                <div class="transparent-container">
                    <h3 class="title right">
                        <span class="black letter">T</span>
                        <span class="black letter">e</span>
                    </h3>
                    <p class="text">
                        根据咱成员的不同专攻领域，多火有自发形成的安卓，Java，Python，前端，设计，产品，运维等多个小组。如果你也对以上领域有兴趣，这里有与你志同道合的人一起耍子；如果你他喵的还有其他专长，如安全，iOS开发，Steam剁手等，请成为我们的新技能树 _(:3 」∠ )_
                    </p>
                </div>
                <div class="white-container">
                    <div class="img-container">
                        <img src="../assets/team.jpg" class="img">
                    </div>
                    <h3 class="title left">
                        <span class="white letter">a</span>
                        <span class="white letter">m</span>
                    </h3>
                    <p class="text">
                        我们都知道上图是假的，是不存在的特技，但说不定这学期能招到帅气的小姐姐开发者呢，所以就把Flag立在这里了嗯 (;ﾟдﾟ)
                    </p>
                    <button class="link" @click="changePage('team')">
                        <span class="text">查看更多</span>
                        <span class="arrow"></span>
                    </button>
                </div>
            </div>
            <div class="content-item">
                <div class="bg">
                </div>
                <div class="white-container">
                    <div class="img-container">
                        <img src="../assets/work.jpg" class="img">
                    </div>
                    <h3 class="title right">
                        <span class="white letter">W</span>
                        <span class="white letter">o</span>
                    </h3>
                    <p class="text">
                        是的，对于一个远称不上完美的团队，在合作时头铁着去怼，最后很容易处于这种状态。想避免这种情况，请锻炼好自己的基础与责任心 (ﾟ皿ﾟﾒ)
                    </p>
                    <button class="link" @click="changePage('project')">
                        <span class="text">查看更多</span>
                        <span class="arrow"></span>
                    </button>
                </div>
                <div class="transparent-container">
                    <h3 class="title left">
                        <span class="black letter">r</span>
                        <span class="black letter">k</span>
                    </h3>
                    <p class="text">
                        咱不希望仅仅把work定义为“做项目”——项目经验固然重要，前提是参与的开发者都有着相对扎实的基础。特别是对于初学者，学习的能力或许比已经掌握的技术更加重要。但如果你已经能够独当一面......那别一个人玩儿了啊！一起来搞事啊！
                    </p>
                </div>
            </div>
            <div class="intro">
                <h2 class="title">多火博客</h2>
                <p class="text center">
                    Stay before every beautiful thoughts
                    <br>
                    在每一个美好的思想前停留
                </p>
            </div>
            <div class="content-blog">
                <div class="img-container">
                    <img src="../assets/blog.jpg" class="img">
                </div>
                <div class="text-container">
                    <p class="text">
                        这个博客就像世界上99%的博客一样——不仅丑，还更新贼慢......但是，咱会好好更新的，真的，嗯【严肃】
                    </p>
                    <a class="link" href="https://blog.duohuo.org/" target="_blank">
                        <span class="text">查看更多</span>
                        <span class="arrow"></span>
                    </a>
                </div>
                <h3 class="title">
                    GEEK ZONE
                </h3>
            </div>
        </div>
        <pageFooter @changePage="changePage"></pageFooter>
    </div>
</template>
<script>
import Footer from '@/components/Footer';

export default {
    name: 'home',
    data() {
        return {

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
        }
    }
}
</script>
<style lang="scss">
$black: #1e2022;
$lightBlack: #323232;
$darkBlack: #1c1e20;
$grey: #c1c7d4;
$red: #ff0042;
$lightBlue: #f0f9fd;
$dark: #96a0aa;
$white: #fff;
$title: 20px;
$text: 14px;
$lineHeight: 22.65px;
@font-face {
    font-family: "PangMenZhengDao";
    src: url("../assets/PangMenZhengDao.ttf");
}

.index {
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
        .content-item {
            height: 630px;
            font-size: 0;
            margin-bottom: 100px;
            .bg {
                position: absolute;
                width: 760px;
                height: 630px;
                left: 0;
                right: 0;
                margin: auto;
                background: url('../assets/Triangle.png') no-repeat;
                z-index: -1;
            }
            .transparent-container {
                position: relative;
                display: inline-block;
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                padding: 0 48px;
                vertical-align: top;
                .text {
                    margin-top: 184px;
                    color: $lightBlack;
                    font-size: $text;
                    line-height: $lineHeight;
                }
            }
            .white-container {
                position: relative;
                display: inline-block;
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                padding: 10px;
                background: $white;
                box-shadow: 0 20px 60px 0 rgba(100, 146, 188, 0.30);
                .img-container {
                    height: 380px;
                    margin-bottom: 40px;
                    .img {
                        width: 550px;
                        height: 380px;
                    }
                }
                .text {
                    font-size: $text;
                    color: $lightBlack;
                    line-height: $lineHeight;
                }
                .link {
                    position: absolute;
                    left: 10px;
                    bottom: 32px;
                    width: 113px;
                    height: 34px;
                    background: $white;
                    border: 1px solid $red;
                    border-radius: 53px;
                    cursor: pointer;
                    .text {
                        font-size: $text;
                        color: $black;
                    }
                    .arrow {
                        display: inline-block;
                        width: 12px;
                        height: 9px;
                        background: url('../assets/smArrow_black.png');
                        vertical-align: 1px;
                    }
                    &:hover {
                        background: $red;
                        .text {
                            color: $white;
                        }
                        .arrow {
                            background: url('../assets/smArrow_white.png');
                        }
                    }
                    &:active {
                        outline: none;
                    }
                }
            }
            .title {
                position: absolute;
                top: -35px;
                font-family: "PangMenZhengDao";
                font-size: 0;
                &.left {
                    left: 18px;
                }
                &.right {
                    right: 18px;
                }
                .letter {
                    display: inline-block;
                    font-size: 200px;
                    color: $black;
                    margin-right: 30px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .black {
                    color: $black;
                }
                .white {
                    color: $white;
                }
            }
        }
        .content-blog {
            position: relative;
            height: 400px;
            font-size: 0;
            background: #FFFFFF;
            box-shadow: 0 20px 60px 0 rgba(100, 146, 188, 0.30);
            .img-container {
                display: inline-block;
                width: 50%;
                height: 100%;
                vertical-align: top;
                .img {
                    width: 570px;
                    height: 400px;
                }
            }
            .text-container {
                position: relative;
                display: inline-block;
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                padding: 0 40px;
                .text {
                    margin-top: 140px;
                    font-size: $text;
                    color: $lightBlack;
                }
                .link {
                    display: inline-block;
                    position: absolute;
                    left: 40px;
                    bottom: 37px;
                    width: 113px;
                    height: 34px;
                    line-height: 34px;
                    text-align: center;
                    font-size: 13.33px;
                    background: $white;
                    border: 1px solid $red;
                    border-radius: 53px;
                    cursor: pointer;
                    .text {
                        font-size: $text;
                        color: $black;
                    }
                    .arrow {
                        display: inline-block;
                        width: 12px;
                        height: 9px;
                        background: url('../assets/smArrow_black.png');
                        vertical-align: 1px;
                    }
                    &:hover {
                        background: $red;
                        .text {
                            color: $white;
                        }
                        .arrow {
                            background: url('../assets/smArrow_white.png');
                        }
                    }
                }
            }
            .title {
                position: absolute;
                left: 0;
                right: 0;
                top: 46px;
                margin: auto;
                width: 340px;
                height: 60px;
                box-shadow: 0 20px 60px 0 rgba(100, 146, 188, 0.30);
                font-family: 'PangMenZhengDao';
                font-size: 48px;
                color: $black;
                background: $white;
                text-align: center;
            }
        }
    }
}
</style>
