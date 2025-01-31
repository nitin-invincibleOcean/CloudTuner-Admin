const Employee = {
  id: null,
  name: null,
  created_at: null,
  deleted_at: null,
  organization_id: null,
  auth_user_id: null,

  initialize(data) {
    this.id = data.id;
    this.name = data.name;
    this.created_at = data.created_at;
    this.deleted_at = data.deleted_at;
    this.organization_id = data.organization_id;
    this.auth_user_id = data.auth_user_id;
  },
};

module.exports = Employee;
