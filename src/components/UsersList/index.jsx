import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UsersList = props => {
  const { users, setUsers } = props;

  const onUserSelectHandler = index => {
    const newUsers = [...users];
    newUsers[index].isSelected = !newUsers[index].isSelected;
    setUsers(newUsers);
  };

  const mapUser = (user, index) => (
    <UserListItem
      key={user.id}
      user={user}
      isSelected={user.isSelected}
      onSelect={() => onUserSelectHandler(index)}
    />
  );

  return <ul>{users.map(mapUser)}</ul>;
};
export default UsersList;
