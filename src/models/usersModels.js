const User = {
  id: null,
  created_at: null,
  deleted_at: null,
  type_id: null,
  email: null,
  password: null,
  salt: null,
  scope_id: null,
  display_name: null,
  is_active: null,
  slack_connected: null,
  is_password_auth: null,
  jira_connected: null,
  verified: null,

  initialize(data) {
    this.id = data.id;
    this.created_at = data.created_at;
    this.deleted_at = data.deleted_at;
    this.type_id = data.type_id;
    this.email = data.email;
    this.password = data.password;
    this.salt = data.salt;
    this.scope_id = data.scope_id;
    this.display_name = data.display_name;
    this.is_active = data.is_active;
    this.slack_connected = data.slack_connected;
    this.is_password_auth = data.is_password_auth;
    this.jira_connected = data.jira_connected;
    this.verified = data.verified;
  },
};

module.exports = User;
