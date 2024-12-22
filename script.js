// 如果有其他需要的 JavaScript 代码可以放在这里 

// 添加表单验证函数
function validateAndRedirect() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;

    // 检查输入是否匹配指定值
    if ((name === '张静怡' && birthday === '12.24') || 
        (name === '黄镇' && birthday === '5.24')) {
        // 根据不同的人跳转到对应的生日祝福页面
        if (name === '张静怡') {
            window.location.href = 'birthday.html';
        } else {
            window.location.href = 'birthday_huangzhen.html';
        }
    } else {
        // 如果不匹配，显示错误提示
        alert('请输入正确的姓名和生日！');
    }
} 