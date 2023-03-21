// TODO: Update to new requirements. 
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'comment_id'
})

User.hasMany(Comment, {
  foreignKey: 'user_id', 
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Post, Comment };
