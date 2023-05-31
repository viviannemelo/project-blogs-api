module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory', 
      {
        postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
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