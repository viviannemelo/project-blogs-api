module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost', 
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
        published: {
          type: DataTypes.DATE,
        },
        updated: {
          type: DataTypes.DATE,
        },
        userId: {
          type: DataTypes.INTEGER,
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