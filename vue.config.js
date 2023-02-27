module.exports={
    lintOnSave: false, // 可以过滤掉敏感的报错
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ rootValue: 16 , propList: ['*']}),
                ],
            },
        },
    },

}