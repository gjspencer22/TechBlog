const user = require('./user');
const comment = require('./comment');
const blogPost = require('./blogPost');

user.hasMany(blogPost, {
    foreignKey: 'user_id'
});

blogPost.belongsTo(user, {
    foreignKey: 'user_id',
});

comment.belongsTo(user, {
    foreignKey: 'user_id'
});

comment.belongsTo(blogPost, {
    foreignKey: 'blogPost_id'
});

user.hasMany(comment, {
    foreignKey: 'user_id'
});
user.hasMany(comment, {
    foreignKey: 'blogPost_id'
});






module.exports= { user, comment, blogPost };