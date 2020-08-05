import React from 'react';

function SelectedUsersList(props) {
  const { users } = props;
  const selectedUsers = users.filter(u => u.isSelected);
  return (
    <ol>
      {selectedUsers.map(u => (
        <li key={u.id}>
          ID = "{u.id}" {u.firstName}
        </li>
      ))}
    </ol>
  );
}

export default SelectedUsersList;
