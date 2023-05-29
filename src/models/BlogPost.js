module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost', 
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
        published: {
          type: DataTypes.STRING,
        },
        updated: {
          type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.STRING,
          },
      },
      {
        underscored: true,
        tableName: 'blog_posts',
        timestamps: false,
      }
    );

    BlogPost.associate = (model) => {
        BlogPost.belongsTo(model.User, {
            foreignKey: 'userId', as: 'user'
        });
    }
  
    return BlogPost;
};