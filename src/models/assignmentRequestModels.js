const AssignmentRequest = {
  deleted_at: null,
  id: null,
  created_at: null,
  resource_id: null,
  source_pool_id: null,
  message: null,
  approver_id: null,
  requester_id: null,
  status: null,

  initialize(data) {
    this.deleted_at = data.deleted_at;
    this.id = data.id;
    this.created_at = data.created_at;
    this.resource_id = data.resource_id;
    this.source_pool_id = data.source_pool_id;
    this.message = data.message;
    this.approver_id = data.approver_id;
    this.requester_id = data.requester_id;
    this.status = data.status;
  },
};

module.exports = AssignmentRequest;
