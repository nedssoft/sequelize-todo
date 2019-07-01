
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    completed: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }

  }, {});
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      onDelete: 'CASCADE',
      foreignKey: 'todoId',
      as: 'todo',
    })
  };
  sequelize.sync();
  return TodoItem;
};