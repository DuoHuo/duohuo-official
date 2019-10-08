<!--
 * @Description: Contact.vue
 * @Author: b-sirius
 * @Date: 2019-09-30 12:27:14
 * @LastEditTime: 2019-10-08 11:15:56
 * @LastEditors: xiaoqi
 -->
<template>
    <div class="contact">
        <div class="content">
            <div class="intro">
                <h2 class="title">联系我们</h2>
                <p class="text">
                    这是咱的联系方式，24h开通！活动合作和意见反馈等均可通过此联系，请认真填写【鞠躬】。特别一提，如果你是想加入多火，同样可在此申请，并在留言中展示出你的技术面或学习热情。图书馆605，欢迎您拎包入住！
                </p>
            </div>
            <div class="form">
                <div class="row1">
                    <div class="personal-info">
                        <h3 class="title">联系我们</h3>
                        <div class="text-input">
                            <input ref="name" class="input" type="text">
                            <p class="subtitle">
                                姓名
                            </p>
                            <span ref="nameErr" class="error-message"></span>
                        </div>
                        <div class="text-input">
                            <input ref="mail" class="input" type="text">
                            <p class="subtitle">邮箱</p>
                            <span ref="mailErr" class="error-message"></span>
                        </div>
                        <div class="text-input">
                            <input ref="unit" class="input" type="text">
                            <p class="subtitle">公司/年级专业</p>
                            <span ref="unitErr" class="error-message"></span>
                        </div>
                    </div>
                    <div class="contact-info">
                        <h3 class="title">联系方式</h3>
                        <div class="item">
                            <p class="subtitle">QQ招新群</p>
                            <p class="text">564307340</p>
                        </div>
                        <div class="item">
                            <p class="subtitle">邮箱</p>
                            <p class="text">contact@duohuo.org</p>
                        </div>
                        <div class="item">
                            <p class="subtitle">地址</p>
                            <p class="text">图书馆605</p>
                        </div>
                        <div class="QR">
                            <img src="../assets/QR.png" class="qr-img">
                        </div>
                    </div>
                    <div class="message"></div>
                </div>
                <div class="row2">
                    <div class="textarea-container">
                        <p ref="textareaTitle" class="subtitle" :class="{'focus': isFocus}">留言</p>
                        <span ref="messageErr" class="error-message"></span>
                        <div class="expanding-area" :class="{'focus': isFocus}">
                            <pre><span ref="cloneTextarea"></span><br></pre>
                            <textarea ref="textarea" class="textarea"></textarea>
                        </div>
                    </div>
                    <a href="javascript:" @click="confirm" class="btn" :class="confirmBtnClass">
                        <i v-show="confirmState" class="icon" :class="processingClass"></i> {{confirmBtnText}}
                    </a>
                </div>
            </div>
        </div>
        <pageFooter @changePage="changePage"></pageFooter>
    </div>
</template>
<script>
import Footer from '@/components/Footer';

let checkStrategyFactory = {
    'notEmpty': function(errMsg) {
        return function(value) {
            if (value.trim() === '') {
                return errMsg;
            }
        }
    },
    'lengthLimit': function(limit, errMsg) {
        return function(value) {
            if (value.trim().length > limit) {
                return errMsg;
            }
        }
    },
    'mail': function(errMsg) {
        let reg = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i;
        return function(value) {
            if (!value.trim().match(reg)) {
                return errMsg;
            }
        }
    }
}

let Input = function(dom, errDom) {
    this.dom = dom;
    this.dom.self = this;
    this.errDom = errDom;
    this.checkList = [];

    return this;
}

Input.prototype.add = function(list) {
    for (let item of list) {
        this.checkList.push(item);
    }
    return this;
}

Input.prototype.check = function(value) {
    for (let strategy of this.checkList) {
        let errMsg = strategy(value);
        if (errMsg) {
            this.errDom.innerHTML = errMsg;
            return errMsg;
        }
        this.errDom.innerHTML = '';
    }
}

export default {
    name: 'team',
    components: {
        'pageFooter': Footer
    },
    data() {
        return {
            isFocus: false,
            inputs: [],
            url: 'https://smtp.duohuo.org',
            confirmState: false,
            processingState: 'done',
            processingText: {
                'done': '发送留言',
                'loading': '正在发送',
                'success': '发送成功',
                'error': '发送失败'
            }
        }
    },
    computed: {
        confirmBtnClass: function() {
            if (this.confirmState) {
                return 'processing';
            }
            return '';
        },
        processingClass: function() {
            return this.processingState;
        },
        confirmBtnText: function() {
            return this.processingText[this.processingState];
        }
    },
    methods: {
        _allLegal: function() {
            let count = 0;
            for (let item of this.inputs) {
                let res = item.check(item.dom.value);
                if (!res) {
                    ++count;
                }
            }
            return count === this.inputs.length;
        },
        confirm: function() {
            if (this._allLegal() && !this.confirmState) {
                this.confirmState = true;
                this.processingState = 'loading';

                let name = this.$refs.name.value;
                let mail = this.$refs.mail.value;
                let unit = this.$refs.unit.value;
                let message = this.$refs.textarea.value;

                let data = {
                    name,
                    mail,
                    unit,
                    message
                }

                this.$http.post(this.url, data).then((response) => {
                    // 短时间内重复发送
                    if (response.body === 'SPAM') {
                        alert('发送过于频繁，请一分钟后重试');
                        this._confirmFailure();
                        return;
                    }

                    this._confirmSuccess();
                }, (response) => {
                    this._confirmFailure()
                });
            }
        },
        _confirmFailure: function() {
            // 发送失败
            this.processingState = 'error';

            let self = this;
            setTimeout(function() {
                self.confirmState = false;
                self.processingState = 'done';
            }, 3000);
        },
        _confirmSuccess: function() {
            // 发送成功
            this.processingState = 'success';

            let self = this;
            setTimeout(function() {
                self.confirmState = false;
                self.processingState = 'done';
            }, 3000);
        },
        initTextArea: function() {
            let textarea = this.$refs.textarea;
            let cloneTextarea = this.$refs.cloneTextarea;

            let self = this;
            textarea.addEventListener('input', function() {
                cloneTextarea.innerHTML = textarea.value;
            });
            textarea.addEventListener('focus', function() {
                self.toggleFocus();
            });
            textarea.addEventListener('blur', function() {
                self.toggleFocus();
            });
        },
        initInputsCheck: function() {
            let self = this;

            let createInput = function(dom, errDom, checkList) {
                let newInput = new Input(dom, errDom);
                newInput.add(checkList);
                dom.addEventListener('blur', function() {
                    let value = dom.value;
                    newInput.check(value);
                });

                self.inputs.push(newInput);
            }
            // 所有需要验证的表单
            let name = this.$refs.name;
            let nameErr = this.$refs.nameErr;
            let mail = this.$refs.mail;
            let mailErr = this.$refs.mailErr;
            let unit = this.$refs.unit;
            let unitErr = this.$refs.unitErr
            let message = this.$refs.textarea;
            let messageErr = this.$refs.messageErr;
            // 用到的验证规则
            let notEmpty = checkStrategyFactory['notEmpty']('输入不能为空');
            let lengthLimit16 = checkStrategyFactory['lengthLimit'](16, '不能超过16个字符');
            let lengthLimit500 = checkStrategyFactory['lengthLimit'](500, '不能超过500个字符');
            let mailCheck = checkStrategyFactory['mail']('邮箱格式不正确');
            // 创建对象
            createInput(name, nameErr, [notEmpty, lengthLimit16]);
            createInput(mail, mailErr, [notEmpty, mailCheck]);
            createInput(unit, unitErr, [notEmpty]);
            createInput(message, messageErr, [notEmpty, lengthLimit500]);
        },
        toggleFocus: function() {
            this.isFocus = !this.isFocus;
        },
        changePage: function() {
            let args = [].slice.apply(arguments);
            let page = args.shift();

            this.$emit('changePage', page);
        }
    },
    mounted: function() {
        this.initTextArea();
        this.initInputsCheck();
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
$outline: #13A7FF;
$title: 20px;
$text: 14px;
$formText: 16px;
$lineHeight: 22.65px;
.contact {
    position: absolute;
    width: 100%;
    .text-delete {
        text-decoration: line-through;
    }

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
            }
        }
        .form {
            box-sizing: border-box;
            padding: 100px 60px;
            background: $white;
            box-shadow: 0 0 60px 0 rgba(100, 146, 188, 0.30);
            .row1 {
                display: flex;
                justify-content: space-between;
                margin-bottom: 60px;
                .title {
                    font-size: $title;
                    line-height: $title;
                    color: $black;
                    margin-bottom: 60px;
                }
                .personal-info {
                    width: 450px;
                    .text-input {
                        position: relative;
                        display: flex;
                        flex-direction: column-reverse;
                        margin-bottom: 60px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .error-message {
                            position: absolute;
                            right: 0;
                            top: 0;
                            line-height: 20px;
                            font-size: $text;
                            color: $red;
                        }
                        .subtitle {
                            line-height: 20px;
                            font-size: $text;
                            color: $grey;
                            margin-bottom: 30px;
                            line-height: $text;
                            transition: 0.2s;
                        }
                        .input {
                            width: 100%;
                            border: none;
                            border-bottom: 2px solid $grey;
                            padding-bottom: 10px;
                            outline: none;
                            font-size: $formText;
                            color: $black;
                            transition: 0.2s;
                            &:focus {
                                border-bottom: 2px solid $red
                            }
                            &:focus + .subtitle {
                                color: $red;
                            }
                        }
                    }
                }
                .contact-info {
                    position: relative;
                    width: 450px;
                    .item {
                        margin-bottom: 72px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .subtitle {
                            line-height: 20px;
                            font-size: $text;
                            color: $grey;
                            margin-bottom: 30px;
                            line-height: $text;
                            .error-message {
                                float: right;
                            }
                        }
                        .text {
                            font-size: $formText;
                            color: $red;
                            line-height: $formText;
                        }
                    }
                    .QR {
                        position: absolute;
                        right: 0;
                        top: 121px;
                        width: 150px;
                        height: 150px;
                        .qr-img {
                            widows: 150px;
                            height: 150px;
                        }
                    }
                }
            }
            .row2 {
                .textarea-container {
                    position: relative;
                    margin-bottom: 60px;
                }
                .subtitle {
                    line-height: 20px;
                    font-size: $text;
                    color: $grey;
                    margin-bottom: 30px;
                    line-height: $text;
                    transition: 0.2s;
                    &.focus {
                        color: $red;
                    }
                }
                .error-message {
                    position: absolute;
                    right: 0;
                    top: 0;
                    line-height: 20px;
                    font-size: $text;
                    color: $red;
                }
                .expanding-area {
                    position: relative;
                    width: 100%;
                    padding-bottom: 10px;
                    border-bottom: 2px solid $grey;
                    &.focus {
                        border-bottom: 2px solid $red;
                    }
                    pre {
                        display: block;
                        font-size: $formText;
                        line-height: 24px;
                        visibility: hidden;
                    }
                    .textarea {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        bottom: 0;
                        padding: 0;
                        overflow: hidden;
                        resize: none;
                        border: none;
                        outline: none;
                        font-size: $formText;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        line-height: 24px;
                        color: $black;
                        transition: 0.2s;
                    }
                }
                .btn {
                    display: inline-block;
                    box-sizing: content-box;
                    text-align: center;
                    width: 94px;
                    height: 32px;
                    line-height: 32px;
                    background: $white;
                    border: 1px solid $red;
                    border-radius: 53px;
                    font-size: $text;
                    color: $black;
                    cursor: pointer;
                    transition: 0.2s;
                    &:hover {
                        background: $red;
                        color: $white;
                    }
                    &.processing {
                        padding-left: 10px;
                        background: $red;
                        color: $white;
                        cursor: default;
                        .icon {
                            display: inline-block;
                            vertical-align: -2px;
                            width: 16px;
                            height: 16px;
                            margin-left: -16px;
                            &.loading {
                                background: url('../assets/loading.png') no-repeat;
                                animation: circle 1s infinite linear;
                                @keyframes circle {
                                    from {
                                        transform: rotate(0deg);
                                    }
                                    to {
                                        transform: rotate(360deg);
                                    }
                                }
                            }
                            &.success {
                                background: url('../assets/success.png');
                            }
                            &.error {
                                background: url('../assets/error.png');
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
