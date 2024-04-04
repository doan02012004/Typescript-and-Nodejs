
const Joi = require('joi')

const registerSchema = Joi.object({
    username: Joi.string().required().trim().messages({
        "any.required":"Username buộc nhập",
        "string.emty":" Username không được để trống",
        "string.trim":"Username không được để khoảng trắng"
    }),
    email:Joi.string().email().required().messages({
        "string.email":"Email không hợp lệ",
        "any.required":"Email Bắt buộc nhập",
        "string.emty": "Email không được để trống"
    }),
    password: Joi.string().required().min(6).messages({
        "any.required":" Password Bắt buộc nhập",
        "string.min":"Password nhập ít nhất {#limit} kí tự",
        "string.emty":"Password không được để trống"
    })
})

module.exports = {
    registerSchema
}