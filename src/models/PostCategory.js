module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory', 
      {
        postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        categoryId: {
          type: DataTypes.STRING,
        },
      },
      {
        underscored: true,
        tableName: 'posts_categories',
        timestamps: false,
      }
    );

    PostCategory.associate = (model) => {
        model.BlogPost.belongsToMany(model.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId', 
        });
        model.Category.belongsToMany(model.BlogPost, {
            as: 'blogPost',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId', 
        })
    }
  
    return PostCategory;
};