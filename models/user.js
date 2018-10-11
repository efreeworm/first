const crypto = require('crypto');
const Schema = require('mongoose').Schema;
/**
 * 定义用户文档的数据结构
 */
const UserSchema = Schema({
    account: {
        type: String,
        min: 3,
        max: 20,
        unique: true
    },
    pwd: {
        type: String,
        min: 6,
        max: 32
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const secret = 'first_test';

/**
 * 用户注册
 * 
 * @param {Object} params           用户注册信息
 *        {String} params.account   用户账号
 *        {String} params.pwd       用户密码
 * @param {Function} callback       回调函数
 */
UserSchema.statics.register = async function (params) {
    if (!(Reflect.has(params, 'account') && Reflect.has(params, 'pwd')))
        return Promise.reject('参数不完整')

    let { account, pwd } = params
    let alen = account.length
    let plen = pwd.length

    if (alen < 3 || alen > 20)
        return Promise.reject('账号长度不合要求：3-20个字符之间')
    if (plen < 6 || alen > 32)
        return Promise.reject('账号长度不合要求：6-32个字符之间')

    params.pwd = hash(pwd)
    try {
        // 这里不能使用save来保存记录，需使用create
        let result = await this.create(params)
        console.log('result',result,params)
        return Promise.resolve('ok')
    }
    catch (e) {
        console.log(e)
        return Promise.reject(e)
    }
}

/**
 * 用户登录
 * 
 * @param {Object} params           用户登录信息
 *        {String} params.account   用户账号
 *        {String} params.pwd       用户密码
 * @param {Function} callback       回调函数
 */
UserSchema.statics.login = async function (params) {
    let { account, pwd } = params
    pwd = hash(pwd)
    try {
        let result = await this.findOne({
            account: account,
            pwd: pwd
        })
        return result ? Promise.resolve('登录成功') : Promise.reject('账号或密码错误')
    }
    catch (e) {
        return Promise.reject('登录失败')
    }
}

/**
 * 计算sha256的hash值
 * @param {*} val 待加密值
 */
function hash(val) {
    return crypto.createHmac('sha256', secret)
        .update(val)
        .digest('hex');
}

/* global db */
module.exports = db.model('user', UserSchema);